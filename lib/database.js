import { connect } from "mongoose";

let isConnected = false;

const DBConnect = async () => {
  if (isConnected) {
    console.log("DB Running...");
    return;
  }

  if (!process.env.MONGO_URI) throw new Error("No db uri");

  try {
    const { connection } = await connect(process.env.MONGO_URI, {
      dbName: "ecommerce",
    });

    if (connection.host) {
      isConnected = true;
      console.log(`DB Connectd to ${connection.host}`);
      return;
    }

    throw new Error("Cannot connect, check uri");
  } catch (error) {
    console.log("DB Error: ", error);
    throw new Error(error);
  }
};

export default DBConnect;
