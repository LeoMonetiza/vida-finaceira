import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Gamepad2, 
  Book, 
  User, 
  Library, 
  Search, 
  Trophy, 
  CheckCircle2, 
  Lock, 
  ChevronRight,
  LogOut,
  ChevronLeft,
  X,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Lightbulb,
  Shield,
  Settings as SettingsIcon,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  ExternalLink,
  Info,
  ShieldCheck,
  Megaphone,
  Share2,
  Save,
  Rocket,
  TrendingUp,
  Heart,
  Camera,
  Upload,
  Zap,
  Terminal,
  Facebook,
  Home
} from 'lucide-react';
import { usePersistence } from './hooks/usePersistence';
import { useSettings } from './hooks/useSettings';
import { modules } from './data/modules';
import { dictionary, library } from './data/extras';
import { tips } from './data/tips';
import { businessIdeas, businessGuide } from './data/businessIdeas';
import { Module, Theme, Story, Quiz, UserProfile, AppSettings, BusinessIdea } from './types';
import { supabase } from './lib/supabase';

export default function App() {
  const { progress, profile, loading: profileLoading, completeTheme, unlockModule, logout } = usePersistence();
  const { settings, loading: settingsLoading, updateSettings } = useSettings();
  const [activeTab, setActiveTab] = useState<'home' | 'learn' | 'tips' | 'dictionary' | 'library' | 'profile' | 'admin' | 'business'>('home');
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [gameMode, setGameMode] = useState<'story' | 'quiz' | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const isLoading = profileLoading || settingsLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!profile) {
    return <AuthScreen mode={authMode} setMode={setAuthMode} settings={settings} />;
  }

  return (
    <div className={`min-h-screen pb-20 font-sans selection:bg-emerald-500/30 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Ads Banner */}
      {settings.adsContent.enabled && (
        <motion.a 
          href={settings.adsContent.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-500 text-slate-950 px-4 py-2 text-xs font-black text-center flex items-center justify-center gap-2"
        >
          <Megaphone size={14} />
          {settings.adsContent.text}
          <ExternalLink size={14} />
        </motion.a>
      )}

      {/* Header */}
      <header className={`sticky top-0 z-30 backdrop-blur-md border-b px-4 py-3 transition-colors ${
        theme === 'dark' ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200 shadow-sm'
      }`}>
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-emerald-500/10"
            >
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x100/10b981/ffffff?text=VF')} />
            </motion.div>
            <div>
              <h1 className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Nível {progress.level}</h1>
              <div className={`h-1.5 w-32 rounded-full overflow-hidden mt-1 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <motion.div 
                  className="h-full bg-emerald-500" 
                  initial={{ width: 0 }}
                  animate={{ width: `${(progress.points % 1000) / 10}%` }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-amber-600 shadow-sm'
              }`}
            >
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="text-emerald-400 text-sm font-black">{progress.points} pts</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="tab-home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <HomeView theme={theme} user={profile} onNavigate={(tab) => setActiveTab(tab)} />
            </motion.div>
          )}

          {activeTab === 'learn' && (
            <motion.div
              key="tab-learn"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <section>
                <h2 className="text-2xl font-bold mb-4">A tua jornada</h2>
                <div className="space-y-4">
                  {modules.map((module) => {
                    const isUnlocked = progress.unlockedModules.includes(module.id);
                    const completedThemesCount = module.themes.filter(t => progress.completedThemes.includes(t.id)).length;
                    const completionRate = (completedThemesCount / module.themes.length) * 100;

                    return (
                      <div 
                        key={module.id}
                        className={`relative p-5 rounded-3xl border-2 transition-all ${
                          isUnlocked 
                            ? `${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} ${isUnlocked ? 'active:scale-[0.98]' : ''} ` 
                            : `${theme === 'dark' ? 'bg-slate-900/50 border-slate-900 opacity-40' : 'bg-slate-100 border-slate-200 opacity-50'}`
                        }`}
                        onClick={() => isUnlocked && setSelectedModule(module)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            module.difficulty === 'Básico' ? 'bg-emerald-500/20 text-emerald-400' :
                            module.difficulty === 'Médio' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-rose-500/20 text-rose-400'
                          }`}>
                            {module.difficulty}
                          </div>
                          {!isUnlocked && <Lock size={16} className={theme === 'dark' ? 'text-slate-600' : 'text-slate-400'} />}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                        <div className="flex items-center gap-3">
                          <div className={`flex-1 h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
                            <motion.div 
                                className={`h-full ${
                                    module.difficulty === 'Básico' ? 'bg-emerald-500' :
                                    module.difficulty === 'Médio' ? 'bg-amber-500' :
                                    'bg-rose-500'
                                }`} 
                                initial={{ width: 0 }}
                                animate={{ width: `${completionRate}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-500">{completedThemesCount}/{module.themes.length}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'tips' && (
            <motion.div
              key="tab-tips"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <TipsView theme={theme} />
            </motion.div>
          )}

          {activeTab === 'dictionary' && (
            <motion.div
              key="tab-dictionary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <DictionaryView theme={theme} />
            </motion.div>
          )}
          {activeTab === 'library' && (
            <motion.div
              key="tab-library"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <LibraryView theme={theme} />
            </motion.div>
          )}
          {activeTab === 'business' && (
            <motion.div
              key="tab-business"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <BusinessView theme={theme} />
            </motion.div>
          )}
          {activeTab === 'profile' && (
            <motion.div
              key="tab-profile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ProfileView user={profile} progress={progress} onLogout={logout} themeMode={theme} settings={settings} />
            </motion.div>
          )}

          {activeTab === 'admin' && profile.role === 'admin' && (
            <motion.div
              key="tab-admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <AdminView settings={settings} onUpdate={updateSettings} theme={theme} onBack={() => setActiveTab('learn')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Overlays */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            key="overlay-module"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <ModuleDetails 
              module={selectedModule} 
              progress={progress}
              onClose={() => setSelectedModule(null)}
              onSelectTheme={(theme) => {
                setSelectedTheme(theme);
                setGameMode('story');
              }}
            />
          </motion.div>
        )}

        {selectedTheme && gameMode === 'story' && (
          <motion.div
            key="overlay-story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <StoryView 
              theme={selectedTheme}
              story={selectedTheme.story} 
              onComplete={(points) => {
                setGameMode('quiz');
              }}
              onClose={() => {
                setSelectedTheme(null);
                setGameMode(null);
              }}
            />
          </motion.div>
        )}

        {selectedTheme && gameMode === 'quiz' && (
          <motion.div
            key="overlay-quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <QuizView 
              quizzes={selectedTheme.quizzes} 
              onComplete={(points) => {
                completeTheme(selectedTheme.id, selectedModule?.id || '', points);
                setSelectedTheme(null);
                setGameMode(null);
                // Check for unlocking next module
                const currentModuleIndex = modules.findIndex(m => m.id === selectedModule?.id);
                if (currentModuleIndex !== -1 && currentModuleIndex < modules.length - 1) {
                  const isModuleFullyCompleted = selectedModule?.themes.every(t => 
                    progress.completedThemes.includes(t.id) || t.id === selectedTheme.id
                  );
                  if (isModuleFullyCompleted) {
                    unlockModule(modules[currentModuleIndex + 1].id);
                  }
                }
              }}
              onClose={() => {
                setSelectedTheme(null);
                setGameMode(null);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 border-t px-6 py-3 safe-area-bottom z-40 transition-colors ${
        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-md mx-auto flex items-center justify-between">
          {profile?.role === 'admin' && (
            <NavButton active={activeTab === 'admin'} icon={<Shield size={24} />} label="Admin" onClick={() => setActiveTab('admin')} theme={theme} />
          )}
          <NavButton active={activeTab === 'home'} icon={<Home size={24} />} label="Início" onClick={() => setActiveTab('home')} theme={theme} />
          <NavButton active={activeTab === 'learn'} icon={<BookOpen size={24} />} label="Aprender" onClick={() => setActiveTab('learn')} theme={theme} />
          <NavButton active={activeTab === 'business'} icon={<Gamepad2 size={24} />} label="Negócios" onClick={() => setActiveTab('business')} theme={theme} />
          <NavButton active={activeTab === 'tips'} icon={<Lightbulb size={24} />} label="Dicas" onClick={() => setActiveTab('tips')} theme={theme} />
          <NavButton active={activeTab === 'dictionary'} icon={<Search size={24} />} label="Diz." onClick={() => setActiveTab('dictionary')} theme={theme} />
          <NavButton active={activeTab === 'library'} icon={<Library size={24} />} label="Livros" onClick={() => setActiveTab('library')} theme={theme} />
          <NavButton active={activeTab === 'profile'} icon={<User size={24} />} label="Perfil" onClick={() => setActiveTab('profile')} theme={theme} />
          {profile?.role === 'admin' && (
            <NavButton active={activeTab === 'admin'} icon={<Shield size={24} />} label="Admin" onClick={() => setActiveTab('admin')} theme={theme} />
          )}
        </div>
      </nav>
    </div>
  );
}

// Helper Components

function NavButton({ active, icon, label, onClick, theme }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void, theme: 'light' | 'dark' }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-colors relative ${
      active 
        ? 'text-emerald-500' 
        : theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
    }`}>
      <motion.div whileTap={{ scale: 0.9 }}>{icon}</motion.div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
      {active && <motion.div layoutId="nav-dot" className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute -bottom-1" />}
    </button>
  );
}

function AuthScreen({ mode, setMode, settings }: { mode: 'login' | 'signup', setMode: (m: 'login' | 'signup') => void, settings: AppSettings }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'login') {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
      } else {
        const { data: { user }, error: signUpError } = await supabase.auth.signUp({ 
          email, 
          password,
        });
        
        if (signUpError) throw signUpError;
        
        if (user) {
          // Create profile record
          const { error: profileError } = await supabase
            .from('profiles')
            .upsert([
              { 
                id: user.id, 
                name: name || 'Investidor', 
                email, 
                avatar_url: null,
                favorites: { businessIdeas: [], tips: [], books: [] },
                progress: {
                  points: 0,
                  level: 1,
                  completedThemes: [],
                  unlockedModules: ['basico']
                }
              }
            ]);
          
          if (profileError) throw profileError;
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0f3d2e]/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c5a059]/10 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm space-y-8 relative z-10"
      >
        <div className="text-center space-y-4">
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-32 h-32 mx-auto relative"
          >
            <div className="absolute inset-0 bg-[#c5a059]/20 blur-2xl rounded-full" />
            <img 
              src="/logo.png" 
              alt="Vida Financeira" 
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(197,160,89,0.3)]"
              referrerPolicy="no-referrer"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/200x200/0f3d2e/c5a059?text=VIDA+FINANCEIRA')}
            />
          </motion.div>
          <div>
            <h1 className="text-4xl font-black tracking-tight bg-gradient-to-b from-white to-[#c5a059] bg-clip-text text-transparent uppercase leading-tight font-serif">Vida Financeira</h1>
            <p className="text-slate-400 font-bold text-xs mt-2 uppercase tracking-[0.3em]">{settings.siteDescription}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium">
              {error}
            </div>
          )}
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Ex: João Silva" 
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 placeholder-slate-600 outline-none focus:ring-2 ring-emerald-500/40 transition-all font-medium text-white"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">E-mail</label>
            <input 
              type="email" 
              placeholder="exemplo@email.com" 
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 placeholder-slate-600 outline-none focus:ring-2 ring-emerald-500/40 transition-all font-medium text-white"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Senha</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="********" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 placeholder-slate-600 outline-none focus:ring-2 ring-emerald-500/40 transition-all font-medium pr-12 text-white"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div className="pt-2">
            <button 
              disabled={isLoading}
              className="w-full bg-emerald-500 text-white font-black p-4 rounded-2xl shadow-xl shadow-emerald-500/10 active:scale-[0.98] transition-all uppercase tracking-wider hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                mode === 'login' ? 'Entrar Agora' : 'Criar Minha Conta'
              )}
            </button>
          </div>
        </form>

        <div className="text-center pt-4">
          <button 
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-slate-500 text-sm font-bold hover:text-emerald-400 transition-colors"
          >
            {mode === 'login' ? 'Ainda não tens conta? Clica aqui' : 'Já tens uma conta? Faz login'}
          </button>
        </div>

        <div className="pt-8 flex flex-col items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />
          
          <motion.a 
            href="https://www.facebook.com/profile.php?id=61589097058710"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full group"
          >
            <div className="relative overflow-hidden p-[1px] rounded-[32px] bg-gradient-to-br from-[#1877F2]/40 to-transparent">
              <div className="bg-slate-900/40 backdrop-blur-xl p-5 rounded-[31px] flex items-center justify-between group-hover:bg-slate-900/60 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1877F2] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#1877F2]/20">
                    <Facebook size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Comunidade no Facebook</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Dicas diárias & Networking</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-white transition-colors">
                  <ChevronLeft size={16} className="rotate-180" />
                </div>
              </div>
            </div>
            <p className="text-center mt-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity">Visita a nossa página oficial</p>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

function ModuleDetails({ module, progress, onClose, onSelectTheme }: { module: Module, progress: any, onClose: () => void, onSelectTheme: (t: Theme) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col"
    >
      <div className="flex-shrink-0 p-4 flex items-center gap-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <button onClick={onClose} className="flex items-center gap-1 p-2 -ml-2 text-slate-500 font-bold hover:text-white transition-colors">
          <ChevronLeft size={20} /> <span>Voltar</span>
        </button>
        <h2 className="text-xl font-bold">{module.title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-md mx-auto w-full pb-10">
        {module.themes.map((theme, i) => {
          const isCompleted = progress.completedThemes.includes(theme.id);
          const canStart = i === 0 || progress.completedThemes.includes(module.themes[i-1].id);

          return (
            <motion.div 
              key={theme.id}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 rounded-2xl border-2 flex items-center justify-between ${
                isCompleted 
                  ? 'border-emerald-500/20 bg-emerald-500/10' 
                  : canStart 
                    ? 'border-slate-800 bg-slate-900 shadow-sm' 
                    : 'border-slate-900 bg-slate-900/50 opacity-30'
              }`}
              onClick={() => canStart && onSelectTheme(theme)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-500'
                }`}>
                  {isCompleted ? <CheckCircle2 size={20} /> : i + 1}
                </div>
                <div>
                  <h4 className={`font-bold ${isCompleted ? 'text-emerald-400' : ''}`}>{theme.title}</h4>
                </div>
              </div>
              {canStart && !isCompleted && <ChevronRight size={20} className="text-slate-600" />}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function StoryView({ theme, story, onComplete, onClose }: { theme: Theme, story: Story, onComplete: (pts: number) => void, onClose: () => void }) {
  const [step, setStep] = useState<'intro' | 'choice' | 'feedback'>('intro');
  const [selectedChoice, setSelectedChoice] = useState<any>(null);

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} className="fixed inset-0 z-50 bg-slate-900 text-white flex flex-col p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <button onClick={onClose} className="text-slate-400 flex items-center gap-1 hover:text-white transition-colors">
          <ChevronLeft size={20} /> <span className="text-xs font-bold">Voltar</span>
        </button>
        <span className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">História Interativa</span>
      </div>

      <div className="flex-1 space-y-8">
        <div className="flex items-center gap-4">
          <div className="text-4xl bg-white/10 w-16 h-16 rounded-3xl flex items-center justify-center ring-4 ring-white/5">{story.character.avatar}</div>
          <div>
            <h3 className="text-xl font-bold">{story.character.name}</h3>
            <p className="text-slate-400 text-sm">{story.character.role}</p>
          </div>
        </div>

        {step === 'intro' ? (
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 leading-relaxed text-slate-300">
              {/* Using split and map for paragraph formatting */}
              {theme.content.split('\n\n').map((p, i) => (
                <p key={i} className="mb-4 last:mb-0">{p}</p>
              ))}
            </div>
            <button onClick={() => setStep('choice')} className="w-full bg-emerald-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-emerald-900/40 uppercase tracking-wider">Entendido, Próximo Passo</button>
          </div>
        ) : (
          <div className="bg-white/10 p-6 rounded-3xl border border-white/10 leading-relaxed text-lg italic">
            "{story.context}"
          </div>
        )}

        {step === 'choice' && (
          <div className="space-y-4">
            {story.choices.map(choice => (
              <motion.button 
                key={choice.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedChoice(choice);
                  setStep('feedback');
                }}
                className="w-full text-left bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors"
              >
                {choice.text}
              </motion.button>
            ))}
          </div>
        )}

        {step === 'feedback' && selectedChoice && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            <div className={`p-6 rounded-3xl border-2 ${
              selectedChoice.outcome === 'positive' ? 'bg-emerald-500/20 border-emerald-500/30' : 
              selectedChoice.outcome === 'negative' ? 'bg-rose-500/20 border-rose-500/30' : 'bg-slate-500/20 border-slate-500/30'
            }`}>
              <p className="text-lg mb-4">{selectedChoice.consequence}</p>
              <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                <Trophy size={16} /> Ganhaste {selectedChoice.points} pontos de experiência.
              </div>
            </div>
            <button onClick={() => onComplete(selectedChoice.points)} className="w-full bg-white text-slate-900 font-bold py-4 rounded-2xl">Continuar para o Quiz</button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function QuizView({ quizzes, onComplete, onClose }: { quizzes: Quiz[], onComplete: (pts: number) => void, onClose: () => void }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const quiz = quizzes[currentQuestionIndex];

  const isCorrect = useMemo(() => {
    return quiz.options.find(o => o.id === selectedOption)?.isCorrect;
  }, [selectedOption, quiz]);

  const handleNext = () => {
    if (isCorrect) setCorrectAnswers(prev => prev + 1);
    
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      const finalScore = Math.round(((correctAnswers + (isCorrect ? 1 : 0)) / quizzes.length) * 100);
      onComplete(finalScore);
    }
  };

  return (
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col p-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => onComplete(0)} className="text-slate-500 flex items-center gap-1 hover:text-white transition-colors">
          <ChevronLeft size={20} /> <span className="text-xs font-bold">Abandonar</span>
        </button>
        <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
          Exercício {currentQuestionIndex + 1} / {quizzes.length}
        </div>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <div className="flex flex-col items-center mb-8 space-y-4">
        <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500" 
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / quizzes.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 space-y-8">
        <h3 className="text-2xl font-bold text-center leading-tight">{quiz.question}</h3>

        <div className="space-y-3">
          {quiz.options.map(option => {
            const isSelected = selectedOption === option.id;
            const isCorrectOption = option.isCorrect;
            
            let buttonClass = 'border-slate-800 bg-slate-900 text-slate-100';
            if (showFeedback) {
              if (isCorrectOption) {
                buttonClass = 'border-emerald-500 bg-emerald-500/20 text-emerald-400';
              } else if (isSelected && !isCorrectOption) {
                buttonClass = 'border-rose-500 bg-rose-500/20 text-rose-400';
              } else {
                buttonClass = 'border-slate-800 bg-slate-900 opacity-50';
              }
            } else if (isSelected) {
              buttonClass = 'border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/20';
            }

            return (
              <button 
                key={option.id}
                disabled={showFeedback}
                onClick={() => setSelectedOption(option.id)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex justify-between items-center ${buttonClass}`}
              >
                <span className="font-bold">{option.text}</span>
                {showFeedback && isCorrectOption && <CheckCircle2 size={20} className="text-emerald-500" />}
                {showFeedback && isSelected && !isCorrectOption && <X size={20} className="text-rose-500" />}
                {!showFeedback && isSelected && <CheckCircle2 size={20} className="text-emerald-500" />}
              </button>
            );
          })}
        </div>

        {selectedOption && !showFeedback && (
          <button onClick={() => setShowFeedback(true)} className="w-full bg-emerald-500 text-white font-black py-4 rounded-2xl uppercase tracking-wider">Verificar Resposta</button>
        )}

        {showFeedback && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-6">
             <div className={`p-6 rounded-3xl border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'}`}>
                <h4 className="font-bold text-lg mb-2">{isCorrect ? 'Excelente! Estás correto.' : 'Não foi desta vez...'}</h4>
                <p className="opacity-80 leading-relaxed">{quiz.explanation}</p>
             </div>
             <button onClick={handleNext} className="w-full bg-white text-slate-950 font-black py-4 rounded-2xl uppercase tracking-wider">
               {currentQuestionIndex === quizzes.length - 1 ? 'Finalizar Teste' : 'Próxima Questão'}
             </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function DictionaryView({ theme }: { theme: 'light' | 'dark' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = dictionary.filter(d => d.term.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dicionário Financeiro</h2>
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`} size={20} />
        <input 
          type="text" 
          placeholder="Procurar termos..." 
          className={`w-full border rounded-2xl p-4 pl-12 outline-none focus:ring-2 ring-emerald-500/20 transition-all font-medium ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
          }`}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-4">
        {filtered.map(entry => (
          <motion.div layout key={entry.term} className={`p-5 rounded-3xl border shadow-sm space-y-3 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
             <h3 className="text-lg font-bold text-emerald-500">{entry.term}</h3>
             <p className={`font-medium leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{entry.explanation}</p>
             <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-800/50 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
               <p className={`text-[10px] font-black uppercase mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Exemplo</p>
               <p className={`text-sm italic ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{entry.example}</p>
             </div>
             <div className="pt-2">
               <p className="text-[10px] font-black text-emerald-500 uppercase flex items-center gap-1">
                 <CheckCircle2 size={12} /> No dia a dia
               </p>
               <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{entry.application}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HomeView({ theme, user, onNavigate }: { theme: 'light' | 'dark', user: UserProfile, onNavigate: (tab: any) => void }) {
  const containerClass = `space-y-8 pb-10`;
  const cardClass = `p-6 rounded-[32px] border ${
    theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
  }`;

  return (
    <div className={containerClass}>
      {/* Hero Welcome */}
      <section className="relative overflow-hidden rounded-[40px] bg-slate-900 p-8 text-white">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[60px]" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-white/90">Bem-vindo,</h2>
              <p className="text-emerald-400 font-bold text-2xl">{user.name}</p>
            </div>
          </div>
          
          <p className="text-slate-300 font-medium leading-relaxed">
            Estás no caminho certo para a tua <span className="text-white font-bold">liberdade financeira</span>. Vamos começar a investir no teu futuro?
          </p>
          
          <button 
            onClick={() => onNavigate('learn')}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            Começar jornada <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* Social Call to Action */}
      <section className={cardClass}>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
              <Facebook size={24} fill="currentColor" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Segue-nos no Facebook</h3>
              <p className="text-xs text-slate-500 font-medium italic">Faz parte da nossa comunidade</p>
            </div>
          </div>
          
          <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Publicamos diariamente dicas exclusivas, análises de mercado e motivação para te manteres focado nos teus objetivos.
          </p>
          
          <a 
            href="https://www.facebook.com/profile.php?id=61589097058710"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#1877F2] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-[#1877F2]/20 active:scale-[0.98] transition-all"
          >
            Visitar Página Oficial
          </a>
        </div>
      </section>

      {/* Quick Stats/Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className={cardClass}>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
            <Zap size={20} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Aulas Lidas</p>
          <p className="text-xl font-bold mt-1">0</p>
        </div>
        <div className={cardClass}>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
            <TrendingUp size={20} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Património Virt.</p>
          <p className="text-xl font-bold mt-1">1,000 VF</p>
        </div>
      </div>

      {/* Instagram Invitation */}
      <section className={`${cardClass} overflow-hidden relative group`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <Camera size={24} />
            </div>
            <div>
              <h3 className="font-bold">Instagram</h3>
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">@vida.financeira.mz</p>
            </div>
          </div>
          <a 
            href="https://www.instagram.com/vida.financeira.mz"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full flex items-center justify-center border ${theme === 'dark' ? 'border-slate-800 bg-slate-950 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-500'}`}
          >
            <ChevronRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}

function TipsView({ theme }: { theme: 'light' | 'dark' }) {
  const { profile, toggleFavorite } = usePersistence();
  const isFavorite = (id: string) => profile?.favorites?.tips?.includes(id);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dicas e Conselhos</h2>
      <div className="space-y-4">
        {tips.map((tip, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={tip.id} 
            className={`p-6 rounded-3xl border shadow-sm relative overflow-hidden ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Lightbulb size={60} />
            </div>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                tip.category === 'poupança' ? 'bg-emerald-500/20 text-emerald-500' :
                tip.category === 'investimento' ? 'bg-blue-500/20 text-blue-500' :
                tip.category === 'mentalidade' ? 'bg-purple-500/20 text-purple-500' :
                'bg-amber-500/20 text-amber-500'
              }`}>
                {tip.category === 'poupança' ? <BookOpen size={24} /> :
                 tip.category === 'investimento' ? <Trophy size={24} /> :
                 tip.category === 'mentalidade' ? <User size={24} /> :
                 <Gamepad2 size={24} />}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                      tip.impact === 'alto' ? 'text-rose-500' : 'text-amber-500'
                    }`}>Impacto {tip.impact}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{tip.category}</span>
                  </div>
                  <button 
                    onClick={() => toggleFavorite('tips', tip.id)}
                    className={`p-2 transition-all ${isFavorite(tip.id) ? 'text-rose-500' : 'text-slate-400'}`}
                  >
                    <Heart size={18} fill={isFavorite(tip.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <h3 className="text-lg font-bold">{tip.title}</h3>
                <p className={`text-sm font-medium leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{tip.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LibraryView({ theme }: { theme: 'light' | 'dark' }) {
  const { profile, toggleFavorite } = usePersistence();
  const isFavorite = (id: string) => profile?.favorites?.books?.includes(id);

  return (
    <div className="space-y-6">
      <div className="p-6 bg-emerald-500 rounded-[32px] text-white shadow-xl shadow-emerald-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20 rotate-12">
          <BookOpen size={80} />
        </div>
        <div className="relative z-10 space-y-2">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Library size={24} /> Biblioteca Essencial
          </h2>
          <p className="text-emerald-50 font-medium leading-relaxed">
            Obtém estes livros e muda a tua vida financeira hoje mesmo!
          </p>
          <a 
            href="https://wa.me/244936386566" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider mt-2 shadow-sm"
          >
            Adquirir no WhatsApp <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="grid gap-6">
        {library.map(book => (
          <div key={book.title} className={`rounded-3xl border overflow-hidden shadow-sm flex flex-col sm:flex-row ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className={`bg-emerald-500/10 p-8 flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-slate-800' : 'bg-emerald-50'}`}>
               <Book size={40} className="text-emerald-500" />
            </div>
            <div className="p-6 flex-1 space-y-3">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="text-lg font-bold">{book.title}</h3>
                   <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{book.author}</p>
                 </div>
                 <button 
                  onClick={() => toggleFavorite('books', book.title)}
                  className={`p-2 transition-all ${isFavorite(book.title) ? 'text-rose-500' : 'text-slate-400'}`}
                >
                  <Heart size={20} fill={isFavorite(book.title) ? "currentColor" : "none"} />
                </button>
               </div>
               <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{book.summary}</p>
               <div className="space-y-2">
                 <p className={`text-[10px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Lições Chave</p>
                 <ul className="space-y-1">
                   {book.lessons.map((lesson, i) => (
                     <li key={i} className={`text-xs flex items-center gap-2 font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                       <CheckCircle2 size={12} className="text-emerald-400" /> {lesson}
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-2">
                 <p className="text-xs font-bold text-amber-500 flex items-center gap-2 italic">
                   💡 Conhecimento gera riqueza. Compra este livro!
                 </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileView({ user, progress, onLogout, themeMode, settings }: { user: UserProfile, progress: any, onLogout: () => void, themeMode: 'light' | 'dark', settings: AppSettings }) {
  const { updateAvatar, profile } = usePersistence();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showLegal, setShowLegal] = useState<'terms' | 'privacy' | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      updateAvatar(base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8">
      <div className="bg-emerald-600 rounded-[40px] p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-500/20">
        <div className="absolute top-0 right-0 p-4 opacity-10"><Trophy size={120} /></div>
        <div className="relative z-10 space-y-4">
          <div className="relative w-20 h-20 group">
            <div className="bg-white/10 w-full h-full rounded-3xl flex items-center justify-center ring-4 ring-white/10 overflow-hidden">
              {profile?.avatarUrl ? (
                <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <User size={40} className="opacity-50" />
              )}
            </div>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-2 -right-2 bg-white text-emerald-600 p-2 rounded-xl shadow-xl transition-transform active:scale-90"
            >
              <Camera size={16} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{user.name}</h2>
            <p className="text-emerald-100 font-medium tracking-wide">Investidor Nível {progress.level}</p>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="bg-black/20 px-4 py-2 rounded-2xl flex-1 text-center backdrop-blur-sm">
              <p className="text-[10px] font-black text-emerald-200 uppercase mb-1">Pontos acumulados</p>
              <p className="text-2xl font-black">{progress.points}</p>
            </div>
            <div className="bg-black/20 px-4 py-2 rounded-2xl flex-1 text-center backdrop-blur-sm">
              <p className="text-[10px] font-black text-emerald-200 uppercase mb-1">Cursos desbloq.</p>
              <p className="text-2xl font-black">{progress.unlockedModules.length}</p>
            </div>
          </div>
        </div>
      </div>

      {profile?.favorites && (
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
            <Heart size={14} className="text-rose-500" /> Os Teus Favoritos
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded-3xl border text-center ${themeMode === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <p className="text-xl font-bold text-emerald-500">{profile.favorites.businessIdeas?.length || 0}</p>
              <p className="text-[10px] font-black uppercase text-slate-500">Ideias</p>
            </div>
            <div className={`p-4 rounded-3xl border text-center ${themeMode === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <p className="text-xl font-bold text-blue-500">{profile.favorites.tips?.length || 0}</p>
              <p className="text-[10px] font-black uppercase text-slate-500">Dicas</p>
            </div>
            <div className={`p-4 rounded-3xl border text-center ${themeMode === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <p className="text-xl font-bold text-amber-500">{profile.favorites.books?.length || 0}</p>
              <p className="text-[10px] font-black uppercase text-slate-500">Livros</p>
            </div>
          </div>
        </div>
      )}

      <div className={`rounded-3xl border divide-y overflow-hidden shadow-sm ${
        themeMode === 'dark' ? 'bg-slate-900 border-slate-800 divide-slate-800' : 'bg-white border-slate-200 divide-slate-100'
      }`}>
        <div className="p-5 flex items-center justify-between">
          <span className={`font-bold ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>E-mail</span>
          <span className="font-medium">{user.email}</span>
        </div>
        <div className="p-5 flex items-center justify-between">
          <span className={`font-bold ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Membro desde</span>
          <span className="font-medium">{new Date(user.joinedAt).toLocaleDateString()}</span>
        </div>
        {(settings.socialLinks.instagram || settings.socialLinks.linkedin || settings.socialLinks.twitter) && (
          <div className="p-5 flex items-center gap-4">
            {settings.socialLinks.instagram && (
              <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-pink-500">
                <Instagram size={20} />
              </a>
            )}
            {settings.socialLinks.linkedin && (
              <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-500">
                <Linkedin size={20} />
              </a>
            )}
            {settings.socialLinks.twitter && (
              <a href={settings.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-400">
                <Twitter size={20} />
              </a>
            )}
          </div>
        )}
        <div className="p-5">
           <div className="flex gap-4">
             <button onClick={() => setShowLegal('terms')} className="text-xs font-bold text-slate-500 hover:text-emerald-500 transition-colors uppercase tracking-widest">Termos</button>
             <button onClick={() => setShowLegal('privacy')} className="text-xs font-bold text-slate-500 hover:text-emerald-500 transition-colors uppercase tracking-widest">Privacidade</button>
           </div>
        </div>
        <button 
          onClick={onLogout}
          className="w-full p-5 flex items-center justify-center gap-2 text-rose-500 font-black uppercase tracking-wider text-sm hover:bg-rose-500/10 transition-colors"
        >
          <LogOut size={20} /> Terminar Sessão
        </button>
      </div>

      <AnimatePresence>
        {showLegal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-lg max-h-[80vh] overflow-hidden rounded-[40px] flex flex-col ${
                themeMode === 'dark' ? 'bg-slate-900' : 'bg-white'
              }`}
            >
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <ShieldCheck className="text-emerald-500" />
                  {showLegal === 'terms' ? 'Termos de Serviço' : 'Política de Privacidade'}
                </h3>
                <button onClick={() => setShowLegal(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
                  <X />
                </button>
              </div>
              <div className="p-8 overflow-y-auto leading-relaxed text-sm font-medium">
                <p className={themeMode === 'dark' ? 'text-slate-300' : 'text-slate-600 space-y-4'}>
                  {showLegal === 'terms' ? settings.termsContent : settings.privacyContent}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AdminView({ settings, onUpdate, theme, onBack }: { settings: AppSettings, onUpdate: (s: AppSettings) => Promise<void>, theme: 'light' | 'dark', onBack: () => void }) {
  const [formData, setFormData] = useState<AppSettings>(settings);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'settings' | 'stats' | 'dev'>('settings');

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);
    try {
      await onUpdate(formData);
      setMessage({ type: 'success', text: 'Configurações guardadas com sucesso!' });
    } catch (err) {
      setMessage({ type: 'error', text: 'Erro ao guardar configurações.' });
    } finally {
      setIsSaving(false);
    }
  };

  const inputClass = `w-full p-4 rounded-2xl border outline-none focus:ring-2 ring-emerald-500/20 transition-all font-medium text-sm ${
    theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-950'
  }`;

  const StatCard = ({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) => (
    <div className={`p-4 rounded-3xl border ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}>
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white mb-3`}>
        {icon}
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );

  return (
    <div className="space-y-8 pb-32">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <Shield size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Painel de Admin</h2>
            <p className="text-slate-500 text-sm font-medium">Gestão global do ecossistema</p>
          </div>
        </div>
        <button onClick={onBack} className="p-3 bg-slate-100 dark:bg-slate-900 rounded-2xl text-slate-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2 active:scale-95 transition-all">
          <ChevronLeft size={18} /> Voltar
        </button>
      </div>

      {/* Admin Nav */}
      <div className={`flex p-1.5 rounded-2xl ${theme === 'dark' ? 'bg-slate-900 border border-slate-800' : 'bg-slate-100 border border-slate-200'}`}>
        <button 
          onClick={() => setActiveTab('settings')}
          className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
            activeTab === 'settings' 
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
              : 'text-slate-500'
          }`}
        >
          Definições
        </button>
        <button 
          onClick={() => setActiveTab('stats')}
          className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
            activeTab === 'stats' 
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
              : 'text-slate-500'
          }`}
        >
          Métricas
        </button>
        <button 
          onClick={() => setActiveTab('dev')}
          className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
            activeTab === 'dev' 
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
              : 'text-slate-500'
          }`}
        >
          Dev Center
        </button>
      </div>

      {activeTab === 'settings' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {message && (
            <div className={`p-4 rounded-2xl border text-sm font-bold flex items-center gap-2 ${
              message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-rose-500/10 border-rose-500/20 text-rose-500'
            }`}>
              {message.type === 'success' ? <CheckCircle2 size={18} /> : <X size={18} />}
              {message.text}
            </div>
          )}

      {/* Site Info */}
      <section className={`p-6 rounded-[32px] border space-y-6 ${
        theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-sm' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <Globe size={18} className="text-indigo-500" />
          <h3 className="font-black uppercase tracking-widest text-[10px] text-slate-500">Site & Identidade</h3>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-500 ml-4">Nome do Site</label>
            <input 
              value={formData.siteName} 
              onChange={e => setFormData({...formData, siteName: e.target.value})} 
              className={inputClass}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-500 ml-4">Descrição</label>
            <textarea 
              value={formData.siteDescription} 
              onChange={e => setFormData({...formData, siteDescription: e.target.value})} 
              className={`${inputClass} min-h-[100px]`}
            />
          </div>
        </div>
      </section>

      {/* Social Networks */}
          <section className={`p-6 rounded-[32px] border space-y-6 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-sm' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Share2 size={18} className="text-cyan-500" />
              <h3 className="font-black uppercase tracking-widest text-[10px] text-slate-500">Links de Suporte</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500 ml-4">Instagram</label>
                <input value={formData.socialLinks.instagram} onChange={e => setFormData({...formData, socialLinks: {...formData.socialLinks, instagram: e.target.value}})} placeholder="Link Instagram..." className={inputClass} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500 ml-4">TikTok (ou LinkedIn)</label>
                <input value={formData.socialLinks.linkedin} onChange={e => setFormData({...formData, socialLinks: {...formData.socialLinks, linkedin: e.target.value}})} placeholder="Link TikTok..." className={inputClass} />
              </div>
            </div>
          </section>

          <section className={`p-6 rounded-[32px] border space-y-6 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-sm' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Megaphone size={18} className="text-amber-500" />
              <h3 className="font-black uppercase tracking-widest text-[10px] text-slate-500">Anúncios & Banners</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-950 rounded-2xl mb-2">
                <span className="text-sm font-bold">Ativar Anúncio</span>
                <button 
                  onClick={() => setFormData({...formData, adsContent: {...formData.adsContent, enabled: !formData.adsContent.enabled}})}
                  className={`w-12 h-6 rounded-full transition-all relative ${formData.adsContent.enabled ? 'bg-emerald-500' : 'bg-slate-700'}`}
                >
                  <motion.div animate={{ x: formData.adsContent.enabled ? 24 : 2 }} className="w-5 h-5 bg-white rounded-full absolute top-0.5" />
                </button>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500 ml-4">Texto do Anúncio</label>
                <input value={formData.adsContent.text} onChange={e => setFormData({...formData, adsContent: {...formData.adsContent, text: e.target.value}})} className={inputClass} />
              </div>
            </div>
          </section>

          <button onClick={handleSave} disabled={isSaving} className="w-full bg-indigo-600 text-white p-5 rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-indigo-600/20 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 mb-10">
            {isSaving ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <>
                <Save size={20} /> Guardar Alterações
              </>
            )}
          </button>
        </motion.div>
      )}

      {activeTab === 'stats' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Usuários" value="1,284" icon={<User size={18} />} color="bg-blue-500" />
            <StatCard label="Ativos" value="442" icon={<TrendingUp size={18} />} color="bg-emerald-500" />
            <StatCard label="Módulos" value="12" icon={<BookOpen size={18} />} color="bg-amber-500" />
            <StatCard label="Success Rate" value="92%" icon={<ShieldCheck size={18} />} color="bg-indigo-500" />
          </div>
          <div className={`p-6 rounded-[32px] border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-2">
              <Zap size={14} className="text-amber-500" /> Registros Recentes
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 items-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="flex-1">
                    <p className="text-xs font-bold">Novo investidor de Angola</p>
                    <p className="text-[10px] text-slate-500">Há {i * 12} min</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'dev' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <section className={`p-6 rounded-[32px] border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-2">
              <Terminal size={14} className="text-emerald-500" /> Developer Environment
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-sm font-bold">Modo de Manutenção</p>
                  <p className="text-[10px] text-slate-500 italic">Desativa o registro de novos membros</p>
                </div>
                <div className="w-12 h-6 bg-slate-200 dark:bg-slate-800 rounded-full relative p-1 cursor-not-allowed opacity-50">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-sm font-bold">Experimental Dark Theme</p>
                  <p className="text-[10px] text-slate-500 italic">Força OLED Dark Mode em todos os módulos</p>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full relative p-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm ml-auto" />
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Monetiza Core v2.4.5</p>
            <p className="text-[10px] text-slate-400 mt-2 italic">Copyright 2026 AI System Labs</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function BusinessView({ theme }: { theme: 'light' | 'dark' }) {
  const { profile, toggleFavorite } = usePersistence();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedIdea, setSelectedIdea] = useState<BusinessIdea | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const categories = ['Todos', ...new Set(businessIdeas.map(i => i.category))];

  const filtered = businessIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || idea.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isFavorite = (id: string) => profile?.favorites?.businessIdeas?.includes(id);

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ideias de Negócio</h2>
        <button 
          onClick={() => setShowGuide(true)}
          className="flex items-center gap-2 bg-amber-500/20 text-amber-500 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider"
        >
          <Info size={14} /> Guia Mestre
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`} size={20} />
          <input 
            type="text" 
            placeholder="Procurar ideias..." 
            className={`w-full border rounded-2xl p-4 pl-12 outline-none focus:ring-2 ring-emerald-500/20 transition-all font-medium ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                  : theme === 'dark' ? 'bg-slate-900 text-slate-400 border border-slate-800' : 'bg-white text-slate-500 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.map(idea => (
          <motion.div 
            key={idea.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-5 rounded-3xl border cursor-pointer transition-all active:scale-[0.98] ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
            onClick={() => setSelectedIdea(idea)}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
                {idea.category}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite('businessIdeas', idea.id);
                  }}
                  className={`p-2 rounded-xl border transition-all ${
                    isFavorite(idea.id) 
                      ? 'bg-rose-500 border-rose-500 text-white' 
                      : theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}
                >
                  <Heart size={16} fill={isFavorite(idea.id) ? "currentColor" : "none"} />
                </button>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${
                  idea.investment === 'Baixo' ? 'bg-blue-500/10 text-blue-400' :
                  idea.investment === 'Médio' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  Invest. {idea.investment}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{idea.title}</h3>
            <p className={`text-sm line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {idea.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Guide Overlay */}
      <AnimatePresence>
        {showGuide && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-slate-950 text-white overflow-y-auto"
          >
            <div className="sticky top-0 p-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button onClick={() => setShowGuide(false)} className="flex items-center gap-1 p-2 -ml-2 text-slate-500 font-bold hover:text-white transition-colors">
                  <ChevronLeft size={24} /> <span>Voltar</span>
                </button>
                <h2 className="text-xl font-bold">Guia do Empreendedor</h2>
              </div>
            </div>
            <div className="p-6 space-y-8 max-w-md mx-auto">
              {businessGuide.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-xl font-black italic uppercase tracking-tighter text-emerald-400">{item.title}</h3>
                  </div>
                  <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl leading-relaxed text-slate-300">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Idea Detail Overlay */}
      <AnimatePresence>
        {selectedIdea && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="fixed inset-0 z-50 bg-slate-950 text-white overflow-y-auto"
          >
            <div className="sticky top-0 p-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={() => setSelectedIdea(null)} className="p-2 -ml-2 text-slate-500 flex items-center gap-1">
                  <ChevronLeft size={24} /> <span className="text-sm font-bold">Voltar</span>
                </button>
                <h2 className="text-lg font-bold truncate max-w-[200px] ml-2">{selectedIdea.title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => toggleFavorite('businessIdeas', selectedIdea.id)}
                  className={`p-2 rounded-xl ${isFavorite(selectedIdea.id) ? 'text-rose-500' : 'text-slate-500'}`}
                >
                  <Heart size={20} fill={isFavorite(selectedIdea.id) ? "currentColor" : "none"} />
                </button>
                <button className="p-2 text-emerald-500"><Share2 size={20} /></button>
              </div>
            </div>

            <div className="p-6 space-y-8 max-w-md mx-auto pb-20">
              <section className="space-y-4">
                <div className="flex gap-2">
                  <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ring-1 ring-emerald-500/20">
                    {selectedIdea.category}
                  </span>
                  <span className="bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ring-1 ring-blue-500/20">
                    Inv. {selectedIdea.investment}
                  </span>
                </div>
                <p className="text-xl font-medium leading-relaxed text-slate-200">{selectedIdea.description}</p>
              </section>
              {/* Steps and other content remain... */}
              <section className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                  <Trophy size={14} className="text-emerald-500" /> Passo a Passo
                </h3>
                <div className="space-y-3">
                  {selectedIdea.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-medium text-slate-300">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                  <Rocket size={14} className="text-amber-500" /> Como Começar Hoje
                </h3>
                <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-3xl">
                  <p className="text-amber-200 font-medium leading-relaxed">{selectedIdea.howToStart}</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                  <TrendingUp size={14} className="text-blue-500" /> Como Crescer (Escala)
                </h3>
                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl">
                  <p className="text-blue-200 font-medium leading-relaxed">{selectedIdea.howToScale}</p>
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
