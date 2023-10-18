import { NextResponse } from "next/server";

import { Prisma } from "@prisma/client";
import prisma from "@/lib/prima";

import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { COOKIE_NAME } from "@/constants";

import { compare } from "bcrypt";

// var MAX_AGE = 60 * 60 * 24;

export async function POST(req: NextResponse) {
  const body = await req.json();
  const email = body.email;
  const password = body.password;
  const isChecked = body.isChecked;

  const existAccount = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existAccount) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  const isPasswordValid = await compare(password, existAccount.password);

  if (!isPasswordValid) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  const secret = process.env.JWT_SECRET || "";

  const token = sign(
    {
      email,
    },
    secret,
    {
      expiresIn: isChecked ? "30d" : "1d",
    }
  );

  const serialized = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: isChecked ? 60 * 60 * 24 * 30 : 60 * 60 * 24,
  });

  const response = {
    message: "Authenticated!",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": serialized },
  });
}
