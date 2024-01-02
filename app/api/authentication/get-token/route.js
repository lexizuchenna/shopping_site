import { cookies } from "next/headers";

import User from "@/models/User";
import DBConnect from "@/lib/database";

export const GET = async () => {
  try {
    await DBConnect();

    const token = cookies().get("user-token");

    if (!token) return new Response(JSON.stringify("null"), { status: 200 });

    const userToken = JSON.parse(token.value);

    const user = await User.findOne({ uid: userToken.uid });

    if (!user) return new Response(JSON.stringify("null"), { status: 200 });

    return new Response(JSON.stringify({ user: userToken }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Internal server error"), {
      status: 500,
    });
  }
};
