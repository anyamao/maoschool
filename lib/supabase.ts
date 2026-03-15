import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// 1. Client for Browser (Frontend)
export const supabaseBrowser = createClient(supabaseUrl, supabaseAnonKey);

// 2. Client for Server (API Routes / Server Actions)
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);
