import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  const store = await cookies();
  store.delete("token");
  store.delete("user");
  const res = NextResponse.json({ message: "Logged out" });
  return res;
}
