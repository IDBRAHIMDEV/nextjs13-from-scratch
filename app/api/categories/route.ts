import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";

interface Category {
  id?: number;
  name: string;
  active: boolean;
}

export async function GET(request: NextRequest) {
  const categories = await db.category.findMany();

  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  const body: Category = await request.json();

  const currentCategory = await db.category.findFirst({
    where: {
      name: body.name,
    },
  });

  if (currentCategory) {
    return NextResponse.json(
      {
        error: `category already Exist with this name: ${body.name}`,
      },
      { status: 400 }
    );
  }

  const category = await db.category.create({
    data: {
      name: body.name,
    },
  });

  if (body.name == "") {
    return NextResponse.json({ error: "name is required !" }, { status: 400 });
  }

  return NextResponse.json(category, { status: 201 });
}
