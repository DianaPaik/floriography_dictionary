import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL =
  process.env.EXPO_PUBLIC_SUPABASE_URL ||
  'https://tbhxkuxbexnezqkrarhc.supabase.co';
const SUPABASE_ANON_KEY =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiaHhrdXhiZXhuZXpxa3JhcmhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NTkxNzksImV4cCI6MjA1NzMzNTE3OX0.JgZ1-Xq_g6Qpr5CmknMYapfWlcuPTfmhRElWupMVWRU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
