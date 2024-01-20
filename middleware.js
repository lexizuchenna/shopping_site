import { NextResponse } from "next/server";
import { headers } from "next/headers";

export function middleware(request) {
  const cookie = request.cookies.get("user-token");
  const headersList = headers();

  if (request.nextUrl.pathname.startsWith("/account")) {
    const redirect = `/${headersList.get("host")}${request.nextUrl.pathname}`;
    // console.log(headersList.get());

    if (!cookie)
      return NextResponse.redirect(
        new URL(`/authentication/login?redirect_url=${redirect}`, request.url)
      );
  }

  if (request.nextUrl.pathname.startsWith("/authentication")) {
    if (cookie) return NextResponse.redirect(new URL(`/`, request.url));
  }
}
