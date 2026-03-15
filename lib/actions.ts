"use server";

import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("Attempting signup for:", email); // Debug log

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Supabase Signup Error:", error); // Server-side log
  }

  redirect("/");
}
