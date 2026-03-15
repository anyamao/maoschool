import { NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabase";

export async function GET() {
  try {
    // This uses the service_role key, bypassing RLS
    const { data, error } = await supabaseServer.from("users").select("*");

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}
