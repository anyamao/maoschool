import { createClient } from "@supabase/supabase-js";
import Register from "./../ui/register";
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
    <div className="bg-white w-screen h-screen flex justify-center ">
      <Register />
    </div>
  );
}
