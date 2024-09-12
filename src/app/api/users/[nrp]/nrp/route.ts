import { findUserByNRP } from "@/repositories/user";

export const GET = async (
  req: Request,
  { params }: { params: { nrp: string } }
) => {
  const { nrp } = params;

  if (!nrp)
    return Response.json(
      {
        meta: {
          status: 400,
          success: false,
          message: "NRP is required",
        },
      },
      { status: 400 }
    );

  const user = await findUserByNRP(nrp);

  if (!user)
    return Response.json(
      {
        meta: {
          status: 404,
          success: false,
          message: "User not found",
        },
      },
      { status: 404 }
    );

  return Response.json(
    {
      meta: {
        status: 200,
        success: true,
        message: "User found",
      },
      data: user,
    },
    { status: 200 }
  );
};
