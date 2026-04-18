const SUPABASE_URL = 'https://db.vfzxulxauuuqfnomngre.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmenh1bHhhdXV1cWZub21uZ3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NjIwNzUsImV4cCI6MjA5MjAzODA3NX0.-Y7TY2Oh5r49L66vXbak2BdXXKQqbHKt7R3h7nIgQW8';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function saveGuestResponse({ first_name, last_name, accept }) {
  const { data, error } = await supabaseClient
    .from('convidados')
    .insert([{ first_name, last_name, accept }]);

  if (error) {
    throw error;
  }

  return data;
}
