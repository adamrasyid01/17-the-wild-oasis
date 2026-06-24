import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dgxdvkrjkoxmrhkezzle.supabase.co";
const supabaseKey = "sb_publishable_j-VqtV0lSmkTWT84_LK31Q_4eEDAhbd";

export const supabase = createClient(supabaseUrl, supabaseKey);
