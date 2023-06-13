import { NextRequest, NextResponse } from 'next/server';

// * Middleware
export async function middleware(req: NextRequest) {
  return NextResponse.next();
}

// * Matcher
export const config = {
  matcher: [],
}; // TSK
