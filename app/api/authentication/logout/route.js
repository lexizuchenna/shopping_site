import { cookies } from "next/headers";

export const GET = async () => {
  cookies().delete("user-token");
  return new Response(JSON.stringify({ msg: "success" }), { status: 200 });
};
