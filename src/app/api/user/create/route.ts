import prisma from "@/lib/prima";
import { createUserSchema } from "@/lib/validations/user";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = body.name;
  const email = body.email;
  const password = body.password;
  const confirmPassword = body.confirmPassword;

  const validatedUserInput = createUserSchema.safeParse({
    name,
    email,
    password,
    confirmPassword,
  });

  if (!validatedUserInput.success) {
    return NextResponse.json(
      {
        field: validatedUserInput.error.issues[0].path[0],
        message: validatedUserInput.error.issues[0].message,
      },
      {
        status: 400,
      }
    );
  }

  /* if(validatedSchema.success) validatedSchema.data.name */

  // if (!body.name || !body.email || !body.password) {
  //   return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  // }

  // const user = await prisma.user.create({
  //   data: {
  //     name: body.name,
  //     email: body.email,
  //     password: body.password,
  //   },
  // });

  // return NextResponse.json({ user }, { status: 200 });
}
