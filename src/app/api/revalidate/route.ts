import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  
  if (tag) {
    // Ép kiểu any để Next.js 16 không bắt bẻ tham số thứ 2
    (revalidateTag as any)(tag)
  }

  return Response.json({ revalidated: !!tag, now: Date.now() })
}