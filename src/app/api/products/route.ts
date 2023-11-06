import prisma from "@/lib/prima";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const ret = await prisma.product.findMany({
      include: {
        images: true, // Inclua as imagens relacionadas
      },
    });

    return NextResponse.json(ret, {
      status: 200,
    });
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
