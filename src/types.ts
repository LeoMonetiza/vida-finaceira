export type Difficulty = 'Básico' | 'Médio' | 'Avançado';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Quiz {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface StoryChoice {
  id: string;
  text: string;
  consequence: string;
  points: number;
  outcome: 'positive' | 'negative' | 'neutral';
}

export interface Story {
  id: string;
  title: string;
  character: {
    name: string;
    role: string;
    avatar: string;
  };
  context: string;
  choices: StoryChoice[];
}

export interface Theme {
  id: string;
  title: string;
  content: string;
  story: Story;
  quizzes: Quiz[];
}

export interface Module {
  id: string;
  title: string;
  difficulty: Difficulty;
  themes: Theme[];
  unlocked: boolean;
}

export interface UserProgress {
  points: number;
  level: number;
  completedThemes: string[]; // theme IDs
  unlockedModules: string[]; // module IDs
}

export interface UserFavorites {
  businessIdeas: string[];
  tips: string[];
  books: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  joinedAt: string;
  role?: 'admin' | 'user';
  favorites?: UserFavorites;
}

export interface AppSettings {
  siteName: string;
  siteDescription: string;
  socialLinks: {
    instagram: string;
    linkedin: string;
    twitter: string;
  };
  termsContent: string;
  privacyContent: string;
  adsContent: {
    enabled: boolean;
    text: string;
    link: string;
  };
}

export interface DictionaryEntry {
  term: string;
  explanation: string;
  example: string;
  application: string;
}

export interface Book {
  title: string;
  author: string;
  summary: string;
  lessons: string[];
  coverUrl?: string;
}

export interface BusinessIdea {
  id: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  investment: 'Baixo' | 'Médio' | 'Alto';
  description: string;
  steps: string[];
  tips: string[];
  howToStart: string;
  howToScale: string;
}

export interface BusinessGuide {
  title: string;
  content: string;
  icon: string;
}
