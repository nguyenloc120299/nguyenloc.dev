import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export async function middleware(request: NextRequest) {
    const handleI18nRouting = createIntlMiddleware({
      locales: ["en", "ko", "vi"],
      defaultLocale: "en",
      localePrefix: "never",
    });
  

  
    const i18nResponse = handleI18nRouting(request);
    return i18nResponse || NextResponse.next();
  }

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
  
      "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
  };