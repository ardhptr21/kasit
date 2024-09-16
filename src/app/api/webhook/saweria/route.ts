import { createTransaction } from "@/repositories/transactions";
import { findUserByNRP } from "@/repositories/user";
import { saweriaHookScheme } from "@/schemes/hook/saweria-hook-scheme";
import { NextRequest } from "next/server";

const SAWERIA_SECRET_HOOK = process.env.SAWERIA_SECRET_HOOK;

export const POST = async (req: NextRequest) => {
  if (!SAWERIA_SECRET_HOOK) {
    return Response.json(
      {
        meta: {
          status: 500,
          success: false,
          message: "Internal Server Error",
        },
      },
      { status: 500 }
    );
  }

  const searchParams = req.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  if (!secret || secret !== SAWERIA_SECRET_HOOK) {
    return Response.json(
      {
        meta: {
          status: 401,
          success: false,
          message: "Forbidden",
        },
      },
      { status: 500 }
    );
  }

  const json = await req.json();
  const result = saweriaHookScheme.safeParse(json);

  if (!result.success) {
    return Response.json(
      {
        meta: {
          status: 400,
          success: false,
          message: "Bad Request",
        },
      },
      { status: 400 }
    );
  }

  const data = result.data;

  const user = await findUserByNRP(data.donator_name.trim());
  if (!user) {
    return Response.json(
      {
        meta: {
          status: 404,
          success: false,
          message: "Not Found",
        },
      },
      { status: 404 }
    );
  }

  const inc = Math.floor((data.amount_raw + data.cut) / 15000);
  if (inc < 1) {
    return Response.json(
      {
        meta: {
          status: 400,
          success: false,
          message: "Bad Request",
        },
      },
      { status: 400 }
    );
  }
  const amount = 15000 * inc;

  await createTransaction(user.id, {
    amount,
    type: "SAWERIA",
    createdAt: new Date().toISOString(),
  });

  return Response.json(
    {
      meta: {
        status: 200,
        success: true,
        message: "OK",
      },
    },
    { status: 200 }
  );
};
