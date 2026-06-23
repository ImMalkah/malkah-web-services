import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export function getImageUrl(path: string) {
  if (!supabase) return path; // Fallback to local path if no Supabase env is set
  
  const { data } = supabase.storage
    .from('portfolio-images')
    .getPublicUrl(path);
    
  return data.publicUrl;
}
