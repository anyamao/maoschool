import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
// We use the ANON key here because we enabled RLS policy in Step 1
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
interface UserRow {
  users: string; // Matches your column name 'users' which contains text
}

export default async function Home() {
  // Fetch data directly on the server
  const { data, error } = await supabase
    .from("posts") // Your Table Name
    .select("users"); // Your Column Name

  if (error) {
    console.error("Error fetching data:", error);
    return <div>Failed to load data</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Database Content</h1>

      <div className="bg-gray-100 p-6 rounded-lg">
        {data && data.length > 0 ? (
          <ul className="list-disc pl-5">
            {data.map((row: UserRow, index: number) => (
              <li key={index} className="text-lg">
                {row.users}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </main>
  );
}
