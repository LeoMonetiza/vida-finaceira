import { useState, useEffect } from 'react';
import { UserProgress, UserProfile } from '../types';
import { supabase } from '../lib/supabase';

const initialProgress: UserProgress = {
  points: 0,
  level: 1,
  completedThemes: [],
  unlockedModules: ['basico']
};

export function usePersistence() {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (session) {
          fetchProfile(session.user.id);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Auth session error:', err);
        setLoading(false);
      });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setProgress(initialProgress);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (data) {
        const isAdmin = data.email === 'lemosfaya6@gmail.com' || data.role === 'admin';
        setProfile({
          id: userId,
          name: data.name,
          email: data.email,
          avatarUrl: data.avatar_url,
          joinedAt: data.created_at || new Date().toISOString(),
          role: isAdmin ? 'admin' : 'user',
          favorites: data.favorites || { businessIdeas: [], tips: [], books: [] }
        });
        if (data.progress) {
          setProgress(data.progress);
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const syncProgress = async (newProgress: UserProgress) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    try {
      await supabase
        .from('profiles')
        .update({ progress: newProgress })
        .eq('id', session.user.id);
    } catch (error) {
      console.error('Error syncing progress:', error);
    }
  };

  const completeTheme = async (themeId: string, _moduleId: string, points: number) => {
    if (progress.completedThemes.includes(themeId)) return;
    
    const newCompleted = [...progress.completedThemes, themeId];
    const newPoints = progress.points + points;
    const newLevel = Math.floor(newPoints / 1000) + 1;
    
    const newProgress = {
      ...progress,
      completedThemes: newCompleted,
      points: newPoints,
      level: newLevel
    };

    setProgress(newProgress);
    await syncProgress(newProgress);
  };

  const unlockModule = async (moduleId: string) => {
    if (progress.unlockedModules.includes(moduleId)) return;
    
    const newProgress = {
      ...progress,
      unlockedModules: [...progress.unlockedModules, moduleId]
    };

    setProgress(newProgress);
    await syncProgress(newProgress);
  };

  const toggleFavorite = async (type: 'businessIdeas' | 'tips' | 'books', id: string) => {
    if (!profile) return;
    
    const currentFavorites = profile.favorites || { businessIdeas: [], tips: [], books: [] };
    const list = [...(currentFavorites[type] || [])];
    const index = list.indexOf(id);
    
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(id);
    }
    
    const newFavorites = { ...currentFavorites, [type]: list };
    const newProfile = { ...profile, favorites: newFavorites };
    
    setProfile(newProfile);
    
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      await supabase
        .from('profiles')
        .update({ favorites: newFavorites })
        .eq('id', session.user.id);
    }
  };

  const updateAvatar = async (url: string) => {
    if (!profile) return;
    const newProfile = { ...profile, avatarUrl: url };
    setProfile(newProfile);

    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      await supabase
        .from('profiles')
        .update({ avatar_url: url })
        .eq('id', session.user.id);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return { 
    progress, 
    profile, 
    loading,
    completeTheme, 
    unlockModule,
    toggleFavorite,
    updateAvatar,
    logout
  };
}
