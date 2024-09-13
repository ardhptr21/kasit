import { withAuthApi } from "@/middleware/api-middleware";
import { findExpensesStrictWithDate } from "@/repositories/expenses";
import { NextRequest } from "next/server";

export const GET = withAuthApi(async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const monthly = searchParams.get("monthly");

  if (!monthly) {
    return Response.json(
      {
        meta: {
          status: 400,
          success: false,
          message: "Monthly is required",
        },
      },
      { status: 400 }
    );
  }

  const expenses = await findExpensesStrictWithDate(new Date(monthly));

  return Response.json({
    meta: {
      status: 200,
      success: true,
      message: "Success",
    },
    data: expenses,
  });
});
