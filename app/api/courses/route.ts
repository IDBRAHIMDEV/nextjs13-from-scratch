import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Course {
    id?: number;
    title: string;
    image: string;
    body: string;
    active: string;
}

export async function GET(request: NextRequest) {

    const courses = await prisma.course.findMany()

    return NextResponse.json(courses)
}


export async function POST(request: NextRequest) {


    const body: Course  = await request.json()
    
    try {
        
        const course = await prisma.course.create({
            data: {
                title: body.title,
                body: body.body,
                image: body.image
            }
        })

        return NextResponse.json(course, {status: 201})

    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }

    // if(body.name == '') {
    //     return NextResponse.json({error: 'name is required !'}, { status: 400})
    // }


}