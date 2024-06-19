import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'
import { auth } from '../auth/[...nextauth]/route'

//GET ALL COMMENTS OF THE POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get('postSlug')
  try {
    const comments = await prisma.comments?.findMany({
      where: {
        ...(postSlug && { postSlug })
      },
      include: { user: true }
    })
    return new NextResponse(JSON.stringify(comments, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    )
  }
}

//CREATE A COMMENT
export const POST = async (req) => {
  const session = await auth()

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Not authenticated!' }, { status: 401 })
    )
  }

  try {
    const body = await req.json()
    const comment = await prisma.comments.create({
      data: { ...body, userEmail: session?.user?.email }
    })
    return new NextResponse(JSON.stringify(comment, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    )
  }
}
