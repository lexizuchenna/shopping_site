import { hash, genSalt } from "bcryptjs";

import DBConnect from "@/lib/database";
import User from "@/models/User";
import { generateNum, checkEmail } from "@/utils";

export const POST = async (req) => {
  try {
    const body = await req.json();

    if (Object.values(body).includes(""))
      return new Response(JSON.stringify("Empty values"), { status: 400 });

    if (checkEmail(body.email) === "Invalid Email")
      return new Response(JSON.stringify("Invalid email"), { status: 400 });

    if (body.phonenumber.length < 11)
      return new Response(JSON.stringify("Invalid phone number"), {
        status: 400,
      });

    if (body.password !== body.password2)
      return new Response(JSON.stringify("Check passwords"), { status: 400 });

    await DBConnect();

    const user = await User.findOne({ email: body.email, role: "buyer" });

    if (user)
      return new Response(JSON.stringify("Email used"), { status: 400 });

    const phone = await User.findOne({
      phonenumber: body.phonenumber,
      role: "buyer",
    });

    if (phone)
      return new Response(JSON.stringify("Phone number used"), { status: 400 });

    const getUid = async () => {
      let uid = generateNum(10);
      let id = await User.findOne({ uid });

      while (id) {
        uid = generateNum(10);
        id = await User.findOne({ uid });
      }

      return uid;
    };

    const getUsername = async () => {
      let username = `${body.firstname}${body.lastname.slice(
        0,
        1
      )}`.toLowerCase();
      let user = await User.findOne({ username });

      while (user) {
        username = `${body.firstname.toLowerCase()}${body.lastname
          .toLowerCase()
          .slice(0, 1)}${generateNum(4)}`;
        user = await User.findOne({ username });
      }

      return username;
    };

    const salt = await genSalt();
    const hashedPwd = await hash(body.password, salt);

    await User.create({
      ...body,
      role: "buyer",
      type: "local",
      uid: await getUid(),
      username: await getUsername(),
      password: hashedPwd,
    });

    return new Response(JSON.stringify("Profile created"), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(`Internal server error`), {
      status: 400,
    });
  }
};
