import { NextRequest, NextResponse } from 'next/server'

const RU_COUNTRIES = new Set(['RU', 'BY', 'UA'])

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/ru') || pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  const country = request.headers.get('x-vercel-ip-country') ?? 'US'
  const locale = RU_COUNTRIES.has(country) ? 'ru' : 'en'

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|images|fonts).*)'],
}
