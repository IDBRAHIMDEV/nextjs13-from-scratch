import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";

interface User {
  id?: number;
  name: string;
  email: string;
}

export async function GET(request: NextRequest) {
  const users = await db.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body: User = await request.json();

  const currentUser = await db.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (currentUser) {
    return NextResponse.json(
      { error: `User already Exist with this email address: ${body.email}` },
      { status: 400 }
    );
  }

  const user = await db.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  if (body.name == "") {
    return NextResponse.json({ error: "name is required !" }, { status: 400 });
  }

  return NextResponse.json(user, { status: 201 });
}
