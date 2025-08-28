import { jwtService } from "@/lib/jwt/index";
import { COOKIES_KEYS } from "@/utils/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const cookieStore = cookies();
  const getCookiesToken = cookieStore.get(COOKIES_KEYS.TOKEN);
  const userToken = getCookiesToken?.value;
  const isTokenValid = jwtService.isExpired(userToken!);
  // const token = await getToken({ req });

  if (!isTokenValid) {
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
              total_leave_granted: 200,
              pending_leave: 100,
              required_leave: 50,
            },
            budget: {
              weekly_budget: 40000,
              monthly_budget: 60000,
              yearly_budget: 90000,
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
