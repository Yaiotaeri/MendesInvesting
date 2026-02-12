import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pxeaxqydkyoomaaqvduv.supabase.co";
const supbaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ZWF4cXlka3lvb21hYXF2ZHV2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDc1MjA4NywiZXhwIjoyMDg2MzI4MDg3fQ.yInQEGwSvVXW0IcDqhO-bmA-3EhmwZx7D-P-U23aDsQ";

export const supabase = createClient(supabaseUrl,supbaseAnonKey);