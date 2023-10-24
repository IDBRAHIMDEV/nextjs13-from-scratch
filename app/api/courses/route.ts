import { db } from "@/app/lib/db";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

interface Course {
  id?: number;
  title: string;
  image: string;
  content: string;
  active: string;
}

export async function GET(request: NextRequest) {
  const courses = await db.course.findMany();

  return NextResponse.json(courses);
}

export async function POST(request: NextRequest) {

  const body = await request.formData()
  const image = body.get('file') as File

  if(!image) {
    return NextResponse.json({error: "file not exist !"}, { status: 400})
  }

  const bytes = await image.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const filePath = path.join(process.cwd(), 'public', 'courses', image.name )
  await writeFile(filePath, buffer)

  return NextResponse.json({success: "file is uploaded "})

  // const body: Course = await request.json();

  // try {
  //   const course = await db.course.create({
  //     data: {
  //       title: body.title,
  //       content: body.content,
  //       image: body.image,
  //       categoryId: 1,
  //       userId: 1,
  //     },
  //   });

  //   return NextResponse.json(course, { status: 201 });
  // } catch (error) {
  //   return NextResponse.json(error, { status: 500 });
  // }

  // if(body.name == '') {
  //     return NextResponse.json({error: 'name is required !'}, { status: 400})
  // }
}
