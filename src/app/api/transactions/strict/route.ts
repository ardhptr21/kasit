import { findTransactionsStrictWithDate } from "@/repositories/transactions";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("q");
  const monthly = searchParams.get("monthly");

  if (!monthly) {
    return Response.json(
      {
        meta: {
          status: 400,
          message: "Monthly is required",
        },
      },
      { status: 400 }
    );
  }

  const transactions = await findTransactionsStrictWithDate({
    date: new Date(monthly!),
    search: q,
  });

  return Response.json({
    meta: {
      status: 200,
      message: "Success",
    },
    data: transactions,
  });
};
