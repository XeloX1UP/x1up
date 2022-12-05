import { NextResponse } from "next/server";

export function middleware(req) {
  const jwt = req.cookies.get("auth");
  const { pathname } = req.nextUrl;
  if (pathname == "/users/login" || pathname == "/users/newuser") {
    if (jwt && jwt.value != "null") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (pathname == "/api/newproduct") {
    if (!jwt) return NextResponse.redirect(new URL("/Nope!", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/api/newproduct", "/users/login", "/users/newuser"],
};
