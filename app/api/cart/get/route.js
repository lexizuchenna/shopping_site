import { cookies } from "next/headers";

// import User from "@/models/User";
import Cart from "@/models/Cart";
import DBConnect from "@/lib/database";

export const GET = async () => {
  try {
    await DBConnect();

    const token = cookies().get("user-token");

    if (!token)
      return new Response(JSON.stringify("Invalid user"), { status: 400 });

    const userToken = JSON.parse(token.value);

    const cartItems = await Cart.find({ bid: userToken.uid });

    return new Response(JSON.stringify(cartItems), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Internal server error"), {
      status: 500,
    });
  }
};
