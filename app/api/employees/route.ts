import { jwtService } from "@/lib/jwt/index";
import { mongoDBConnection } from "@/lib/mongodb";
import { DashboardModel } from "@/models/dashboard";
import { COOKIES_KEYS } from "@/utils/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = await new URL(req.url);
  const resultsPerPage = Number(searchParams.get("resultsPerPage"))!;
  const page = Number(searchParams.get("page"))!;
  const searchQuery = searchParams.get("searchQuery")!;
  const date = searchParams.get("date");
  const role = searchParams.get("role")!;
  const skip = (page - 1) * resultsPerPage;
  const cookieStore = cookies();
  const getCookiesToken = cookieStore.get(COOKIES_KEYS.TOKEN);
  const userToken = getCookiesToken?.value;
  const isTokenValid = jwtService.isExpired(userToken!);
  // const token = await getToken({ req });

  await mongoDBConnection();

  if (!isTokenValid) {
    return NextResponse.json(
      { message: "Unauthorized users" },
      { status: 401 }
    );
  }

  try {
    const filters: any = {};

    if (searchQuery) {
      const searchRegex = new RegExp(searchQuery, "i");
      filters.$or = [
        { email: searchRegex },
        { employeeName: searchRegex },
        { employeeType: searchRegex },
        { status: searchRegex },
      ];
    }
    if (role) {
      const roleRegex = new RegExp(role, "i");
      filters.$or = [{ role: roleRegex }];
    }
    if (date) {
      filters.createdAt = {
        $gte: new Date(date),
        $lt: new Date(date).setDate(new Date(date).getDate() + 1),
      };
    }

    const employees = await DashboardModel.find(filters)
      .limit(resultsPerPage)
      .skip(skip)
      .sort({ createdAt: "asc" });

    const totalResults = await DashboardModel.countDocuments();
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const total = page > totalPages ? 0 : totalResults;

    return NextResponse.json(
      {
        message: "success",
        data: {
          employees,
          totalResults: page > totalPages ? total : totalResults,
          totalPages: page > totalPages ? 1 : totalPages,
          resultsPerPage,
          page,
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
