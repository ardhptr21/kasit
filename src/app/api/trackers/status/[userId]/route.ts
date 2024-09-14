import { withAuthApi } from "@/middleware/api-middleware";
import { isTransactionExistsByDate } from "@/repositories/transactions";
import { NextRequest } from "next/server";

export const GET = withAuthApi(
  async (req: NextRequest, { params }: { params: { userId: string } }) => {
    const { userId } = params;

    const status = await isTransactionExistsByDate(userId, new Date());

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
