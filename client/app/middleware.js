import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware"

export default function middleware(request) {
  return withAuth(request);
}

export const config = {
  matcher: ["/site/dashboard"]
}