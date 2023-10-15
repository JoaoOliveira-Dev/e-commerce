import { NextResponse } from "next/server";

import { Prisma } from "@prisma/client";
import prisma from "@/lib/prima";

import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { compare } from "bcrypt";

const MAX_AGE = 60;

export async function POST(req: NextResponse) {
  const body = await req.json();
  const email = body.email;
  const password = body.password;

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
      status: 401,
    });
  }

  // Não esquecer de chegar o .env
  const secret = process.env.JWT_SECRET || "";

  const token = sign(
    {
      email,
    },
    secret,
    {
      expiresIn: "1m",
    }
  );

  const serealized = serialize("OutSiteJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/login",
  });

  const response = {
    message: "Authenticated!",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": serealized },
  });
}

// import express from "express";
// import { authenticate } from "your-authentication-middleware";
// import { generateToken } from "your-jwt-library";

// const router = express.Router();

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Use your authentication middleware to verify the user's credentials
//     const user = await authenticate(email, password);

//     // If the user is authenticated, generate a JWT and send it back to the client
//     const token = generateToken(user);
//     res.json({ token });
//   } catch (error) {
//     // If the user is not authenticated, send an error response
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// });

// export default router;
