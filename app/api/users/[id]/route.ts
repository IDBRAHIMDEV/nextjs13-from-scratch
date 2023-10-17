import { NextRequest, NextResponse } from "next/server";


interface Props {
    params: {id: number}
}

export function GET(request: NextRequest, {params}: Props) {

    if(params.id >= 5) {
        return NextResponse.json({error: 'user not found'}, {status: 404})
    }
    
    return NextResponse.json({id: params.id, name: 'example'}, {status: 200})
}

export function PUT(request: NextRequest, { params}: Props) {

    if(params.id >= 5) {
        return NextResponse.json({error: 'user not found'}, {status: 404})
    }

    return NextResponse.json({
        id: params.id, name: 'salam'
    }, {status: 202})
}


export function DELETE(request: NextRequest, { params}: Props) {
   
    if(params.id >= 5) {
        return NextResponse.json({error: 'user not found'}, {status: 404})
    }

    return NextResponse.json({message: 'User is deleted'})

}