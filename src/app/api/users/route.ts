import { withAuthApi } from "@/middleware/api-middleware";
import { listUsers } from "@/repositories/user";

export const dynamic = "force-dynamic";

export const GET = withAuthApi(async (req: Request) => {
  const users = await listUsers();

  return Response.json(
    {
      meta: {
        status: 200,
        success: true,
        message: "OK",
      },
      data: users,
    },
    { status: 200 }
  );
});
