import { calculateIncomeAndExpense } from "@/repositories/transactions";

export const dynamic = "force-dynamic";

export const GET = async (req: Request) => {
  const data = await calculateIncomeAndExpense();

  return Response.json({
    meta: {
      code: 200,
      success: true,
      message: "Success",
    },
    data,
  });
};
