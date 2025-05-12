import { withAuthApi } from "@/middleware/api-middleware";
import { isTransactionExistsByDate } from "@/repositories/transactions";
import { NextRequest } from "next/server";

export const GET = withAuthApi(
  async (req: NextRequest, { params }: { params: { userId: string } }) => {
    const { userId } = params;
    const searchParams = new URL(req.url).searchParams;
    const date = searchParams.get("date");

    const status = await isTransactionExistsByDate(userId, new Date(date!));

    return Response.json(
      {
        meta: {
          success: true,
          message: "Successfully fetched the status",
          status: 200,
        },
        data: { status },
      },
      { status: 200 }
    );
  }
);
