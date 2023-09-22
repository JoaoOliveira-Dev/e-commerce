import prisma from "@/lib/prima";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  const body = await req.formData();

  const name = body.get("name")?.toString();
  const email = body.get("email")?.toString();
  const password = body.get("senha")?.toString();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return NextResponse.json({ user }, { status: 200 });
}
