"use server"; // This directive tells Next.js this runs on the server

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  // 1. Initialize Supabase Client (Server Side)
  // We use the standard client here because we are in a server action
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  // 2. Get data from form
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  // 3. Call Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username, // This updates the metadata
      },
    },
  });

  if (error) {
    // Return error to frontend
    return { error: error.message };
  }

  // 4. Optional: Update the profiles table manually if trigger didn't work
  // (Usually the trigger in Step 2 handles this, but you can update username here)
  if (data.user) {
    await supabase.from("profiles").update({ username }).eq("id", data.user.id);
  }

  // 5. Redirect or Revalidate
  revalidatePath("/");
  redirect("/"); // Redirect to home page after signup
}
