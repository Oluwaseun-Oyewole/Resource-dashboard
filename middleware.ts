import { withAuth } from "next-auth/middleware";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtService } from "./lib/jwt/index";
import { apiAuthPrefix, routes } from "./routes";
import { COOKIES_KEYS } from "./utils/constants";

export default withAuth(
  async function middleware(req) {
    const { nextUrl } = req;
    // const github_token = await getToken({ req });
    const cookieStore = cookies();
    const getCookiesToken = cookieStore.get(COOKIES_KEYS.TOKEN);
    const token = getCookiesToken?.value;
    const isTokenExpired = await jwtService.isExpired(token!);
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    if (isApiAuthRoute) {
      return NextResponse.next();
    }

    // Allow auth pages to be accessed without token
    if (nextUrl.pathname.startsWith("/auth/")) {
      if (token && !isTokenExpired) {
        return NextResponse.redirect(new URL(routes.dashboard, req.url));
      }
      return NextResponse.next();
    }

    if (!token || isTokenExpired) {
      return NextResponse.redirect(new URL(routes.login, req.url));
    }
    if (nextUrl.pathname.startsWith(routes.dashboard)) {
      if (!token || isTokenExpired) {
        return NextResponse.redirect(new URL(routes.login, req.url));
      }
      try {
        return NextResponse.next();
      } catch (error) {
        return NextResponse.redirect(new URL(routes.login, req.url));
      }
    }
    // For authenticated users accessing other protected routes
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/auth/")) {
          return true;
        }
        // For all other routes, require token
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
