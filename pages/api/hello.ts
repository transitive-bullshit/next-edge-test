import { NextRequest, NextResponse } from 'next/server'
import ky from 'ky'

export default async function handler(req: NextRequest) {
  const data = await ky
    .post('https://httpbin.org/post', {
      json: { test: true }
    })
    .json()
  console.log(data)

  return NextResponse.json(data)
}

export const config = {
  runtime: 'experimental-edge'
}
