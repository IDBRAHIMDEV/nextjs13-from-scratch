import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface User {
    id?: number;
    name: string;
    email: string;
}

export async function GET(request: NextRequest) {

    const users = await prisma.user.findMany()

    return NextResponse.json(users)
}


export async function POST(request: NextRequest) {

    const body: User  = await request.json()

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })

    if(body.name == '') {
        return NextResponse.json({error: 'name is required !'}, { status: 400})
    }

    return NextResponse.json(user, {status: 201})

}