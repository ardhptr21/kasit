import { withAuthApi } from "@/middleware/api-middleware";
import { calculateIncomeAndExpense } from "@/repositories/trackers";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export const GET = withAuthApi(async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const monthly = searchParams.get("monthly");

  if (!monthly) {
    return Response.json({
      meta: {
        code: 400,
        success: false,
        message: "Monthly parameter is required",
      },
    });
  }

  const data = await calculateIncomeAndExpense(new Date(monthly));

  return Response.json({
    meta: {
      code: 200,
      success: true,
      message: "Success",
    },
    data,
  });
});
