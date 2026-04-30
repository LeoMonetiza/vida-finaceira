import { createClient } from '@supabase/supabase-js';

const getEnvVar = (name: string) => {
  return (import.meta as any).env[name] || '';
};

const supabaseUrlEnv = getEnvVar('VITE_SUPABASE_URL');
const supabaseAnonKeyEnv = getEnvVar('VITE_SUPABASE_ANON_KEY');

// Credentials provided by the user
const PROVIDED_URL = 'https://eqqxmpjxfxeaewwrzyto.supabase.co';
const PROVIDED_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxcXhtcGp4ZnhlYWV3d3J6eXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMzkyMzEsImV4cCI6MjA5MjkxNTIzMX0.84IN8Ymip0MxZpETxQTdhaR0nwUahDzrHvOXYrVOEgo';

const supabaseUrl = (supabaseUrlEnv || PROVIDED_URL).replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
const supabaseAnonKey = supabaseAnonKeyEnv || PROVIDED_KEY;

if (!supabaseUrlEnv || !supabaseAnonKeyEnv) {
  console.info('Using provided Supabase credentials. For production, set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in settings.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
