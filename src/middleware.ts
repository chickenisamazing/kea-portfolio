import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/easter") {
    const trigger = false;
    const acceptHeader = request.headers.get("accept") || null;
    const isFullPageLoad = acceptHeader?.includes("text/html");
    // console.log(acceptHeader);

    if (isFullPageLoad) {
      // console.log("주소창 접근");
      if (!trigger) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      return NextResponse.next();
    } else {
      // console.log("클라이언트 사이드 내비게이션");
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: "/easter",
};
