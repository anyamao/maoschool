"use server";

import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export interface FormState {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    email?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
  };
}

export async function signUp(formData: FormData) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
      },
    },
  });

  if (error) {
    console.error("Supabase Signup Error:", error); // Server-side log
  }

  redirect("/");
}
