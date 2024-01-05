import { cookies } from "next/headers";
import { compare } from "bcryptjs";

import User from "@/models/User";
import DBConnect from "@/lib/database";

export const POST = async (req, res) => {
  const body = await req.json();

  await DBConnect();

  const user = await User.findOne({
    $or: [
      { username: body.login.trim().toLowerCase() },
      { email: body.login.toLowerCase().trim().toLowerCase() },
      { phonenumber: body.login.toLowerCase().trim() },
    ],
  }).select("-_id -type -createdAt -updatedAt -__v");

  if (!user)
    return new Response(JSON.stringify("Account not found"), { status: 400 });

  const isMatch = await compare(body.password, user.password);

  if (!isMatch)
    return new Response(JSON.stringify("Password incorrect"), { status: 400 });

  const remove = ["password"];

  const { password, ...userToken } = user._doc;

  cookies().set("user-token", JSON.stringify(userToken), {
    maxAge: 1728000000,
    httpOnly: true,
    // sameSite: true,
  });

  return new Response(JSON.stringify({ user: userToken }), { status: 200 });
};
