import { NextRequest, NextResponse } from "next/server";

interface User {
    id?: number;
    name: string;
    email: string;
}

export function GET(request: NextRequest) {

    return NextResponse.json([
        {id: 1, name: "Mohamed IDBRAHIM", email: "moh.idbrahim@gmail.com"},
        {id: 2, name: "Sbai Issam", email: "issam@gmail.com"},
        {id: 3, name: "Khalid Jillali", email: "jillali@gmail.com"},
    ])
}


export async function POST(request: NextRequest) {

    const body: User  = await request.json()

    if(body.name == '') {
        return NextResponse.json({error: 'name is required !'}, { status: 400})
    }

    return NextResponse.json({id: 12, name: body.name, email: body.email}, {status: 201})

}