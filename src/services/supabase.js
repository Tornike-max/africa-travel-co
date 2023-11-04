import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://klbmdsduhkkswgqsunoh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYm1kc2R1aGtrc3dncXN1bm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNDU0ODAsImV4cCI6MjAxMzkyMTQ4MH0.7rd0TQD8VGt2DCWWxga_98HODVDYbH26qMDGoxIPs4A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
