-- 1. EXTENSÕES & BASES
-- Nenhuma extensão especial necessária para este setup básico

-- 2. TABELA DE PERFIS (PROFILES)
-- Esta tabela armazena dados adicionais dos utilizadores
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  avatar_url TEXT,
  favorites JSONB DEFAULT '{"businessIdeas": [], "tips": [], "books": []}'::jsonb,
  progress JSONB DEFAULT '[]'::jsonb,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ativar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 3. TABELA DE CONFIGURAÇÕES (APP_SETTINGS)
-- Armazena dados globais que o admin pode editar
CREATE TABLE IF NOT EXISTS public.app_settings (
  id TEXT PRIMARY KEY DEFAULT 'global',
  site_name TEXT DEFAULT 'Investidor PRO',
  site_description TEXT DEFAULT 'Aprende a investir do zero.',
  social_links JSONB DEFAULT '{"instagram": "", "linkedin": "", "twitter": ""}'::jsonb,
  terms_content TEXT DEFAULT 'Termos de serviço em atualização...',
  privacy_content TEXT DEFAULT 'Política de privacidade em atualização...',
  ads_content JSONB DEFAULT '{"enabled": false, "text": "", "link": ""}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inserir linha inicial caso não exista
INSERT INTO public.app_settings (id) 
VALUES ('global') 
ON CONFLICT (id) DO NOTHING;

-- Ativar RLS
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Políticas de Configurações
DROP POLICY IF EXISTS "Public can view settings" ON public.app_settings;
CREATE POLICY "Public can view settings" ON public.app_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Only admins can update settings" ON public.app_settings;
-- Apenas admins podem editar
CREATE POLICY "Only admins can update settings" ON public.app_settings FOR UPDATE USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- 4. AUTOMAÇÃO DE CRIAÇÃO DE PERFIL
-- Esta função cria automaticamente o perfil quando um utilizador se regista
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, role, favorites)
  VALUES (
    new.id, 
    new.email, 
    COALESCE(new.raw_user_meta_data->>'name', 'Investidor'),
    CASE WHEN new.email = 'lemosfaya6@gmail.com' THEN 'admin' ELSE 'user' END,
    '{"businessIdeas": [], "tips": [], "books": []}'::jsonb
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
