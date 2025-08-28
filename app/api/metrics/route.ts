import { COOKIES_KEYS } from "@/utils/constants";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const cookieStore = cookies();
  const getCookiesToken = cookieStore.get(COOKIES_KEYS.TOKEN);
  const userToken = getCookiesToken?.value;
  // const isTokenValid = jwtService.isExpired(userToken!);
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized users" },
      { status: 401 }
    );
  }

  try {
    return NextResponse.json(
      {
        message: "success",
        data: {
          analytics: {
            leave: {
              total_leave_granted: 10,
              pending_leave: 20,
              required_leave: 30,
            },
            budget: {
              weekly_budget: 4000000,
              monthly_budget: 20000000,
              yearly_budget: 240000000,
            },
            attendance: {
              total_workforce: 200,
              present_workforce: 100,
              absent_workforce: 50,
              late_arrivals: 40,
              on_leave: 10,
            },
            absent: {
              total_absent: 2,
              total_monthly_absent: 20,
              total_weekly_absent: 5,
            },
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "oops, something went wrong" },
      { status: 501 }
    );
  }
};
