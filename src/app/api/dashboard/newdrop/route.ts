import prisma from "@/lib/prima";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = body.name;
    const url = body.url;

    // console.log("body", body);

    const ret = await prisma.newDrop.create({
      data: {
        name,
        url,
      },
    });

    console.log("ret", ret);

    return NextResponse.json(
      {
        message: "Drop criado com sucesso!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Algo deu errado" + error,
      },
      {
        status: 500,
      }
    );
  }
}
