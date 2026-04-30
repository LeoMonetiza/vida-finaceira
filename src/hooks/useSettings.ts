import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { AppSettings } from '../types';

const defaultSettings: AppSettings = {
  siteName: 'Vida Financeira',
  siteDescription: 'Educação Financeira e Investimentos',
  socialLinks: {
    instagram: 'https://www.instagram.com/vida.financeira.mz',
    linkedin: '',
    twitter: ''
  },
  termsContent: 'Os nossos termos de serviço...',
  privacyContent: 'A nossa política de privacidade...',
  adsContent: {
    enabled: false,
    text: 'Aprende mais com o nosso curso premium!',
    link: '#'
  }
};

export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('app_settings')
        .select('*')
        .eq('id', 'global')
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (data) {
        setSettings({
          siteName: data.site_name,
          siteDescription: data.site_description,
          socialLinks: data.social_links,
          termsContent: data.terms_content,
          privacyContent: data.privacy_content,
          adsContent: data.ads_content
        });
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = async (newSettings: AppSettings) => {
    try {
      const { error } = await supabase
        .from('app_settings')
        .upsert({
          id: 'global',
          site_name: newSettings.siteName,
          site_description: newSettings.siteDescription,
          social_links: newSettings.socialLinks,
          terms_content: newSettings.termsContent,
          privacy_content: newSettings.privacyContent,
          ads_content: newSettings.adsContent,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      setSettings(newSettings);
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  };

  return { settings, loading, updateSettings, refreshSettings: fetchSettings };
}
