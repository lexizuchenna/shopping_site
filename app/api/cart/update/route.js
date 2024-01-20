import Cart from "@/models/Cart";
import DBConnect from "@/lib/database";

export const POST = async (req) => {
  try {
    const product = await req.json();

    await DBConnect();

    if (!product.bid || !product.pid)
      return new Response(JSON.stringify("Invalid product"), { status: 400 });

    const isProduct = await Cart.findOne({
      bid: product.bid,
      pid: product.pid,
    });

    if (!isProduct)
      return new Response(
        JSON.stringify({ msg: "Cannot update product", item: null }),
        { status: 200 }
      );

    await Cart.findOneAndUpdate(
      { pid: product.pid, bid: product.bid },
      { quantity: product.quantity }
    );

    return new Response(
      JSON.stringify({ msg: "Product updated", item: product }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Cart error: ", error);
    return new Response(JSON.stringify("Internal server error"), {
      status: 500,
    });
  }
};
