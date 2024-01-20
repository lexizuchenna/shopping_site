"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Context = createContext();

export const MainContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let total = 0;

    checkoutItems.forEach((item) => {
      if (item.discount) {
        const totalItem = (item.price - item.discountPrice) * item.quantity;
        total += totalItem;
      } else {
        const totalItem = item.price * item.quantity;
        total += totalItem;
      }
    });

    setTotalAmount(() => total);
  }, [checkoutItems]);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("/api/authentication/get-token");
        if (data.user) {
          setUser(() => data.user);
          setIsLogin(() => true);

          const { data: cartItems } = await axios.get(`/api/cart/get/`);

          if (cartItems) {
            setCartItems(() => cartItems);
          }
        }
      } catch (error) {
        toast.error(error.response.data);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  const handleSyncCart = async (item, quantity, type) => {
    try {
      setIsLoading(true);
      switch (type) {
        case "add":
          await axios.post("/api/cart/add", {
            ...item,
            bid: user.uid,
            quantity,
          });
          break;
        case "update":
          await axios.post("/api/cart/update", {
            pid: item.pid,
            bid: user.uid,
            quantity,
          });
          break;
        case "remove":
          await axios.post("/api/cart/remove", {
            pid: item.pid,
            bid: user.uid,
          });
          break;
      }
    } catch (error) {
      console.lo(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCartItem = async (item, quantity) => {
    // if (!user) return toast.error("Signin to add items to cart");
    const cartIndex = cartItems.findIndex(
      (product) => item.pid === product.pid
    );
    const checkoutIndex = checkoutItems.findIndex(
      (product) => item.pid === product.pid
    );

    if (cartIndex !== -1) {
      if (quantity > 1) {
        const newCartItems = cartItems;
        newCartItems[cartIndex].quantity = quantity;

        await handleSyncCart(item, quantity, "update");
        setCartItems(() => [...newCartItems]);
        toast.success(`${quantity} ${item.name} added to cart`, {
          duration: 2000,
        });
      } else {
        const newCartItems = cartItems;
        newCartItems[cartIndex].quantity = newCartItems[cartIndex].quantity + 1;

        await handleSyncCart(item, item.quantity + 1, "update");
        setCartItems(() => [...newCartItems]);
        toast.success(`${item.name} added to cart`, {
          duration: 2000,
        });
      }
    } else {
      if (user) await handleSyncCart(item, quantity, "add");

      setCartItems((prev) => [...prev, { ...item, quantity }]);
      toast.success(`${item.name} added to cart`, {
        duration: 2000,
      });
    }

    if (checkoutIndex != -1) {
      if (quantity > 1) {
        const newCheckItems = checkoutItems;
        newCheckItems[checkoutIndex].quantity = quantity;

        setCheckoutItems(() => [...newCheckItems]);
      } else {
        const newCheckItems = checkoutItems;
        newCheckItems[checkoutIndex].quantity =
          newCheckItems[checkoutIndex].quantity;

        setCheckoutItems(() => [...newCheckItems]);
      }
    }
  };

  const handleRemoveCartItem = async (item) => {
    const newCartItems = cartItems.filter(
      (product) => product.pid !== item.pid
    );
    const newCheckoutItems = checkoutItems.filter(
      (product) => product.pid !== item.pid
    );

    await handleSyncCart(item, "", "remove");
    setCartItems(() => [...newCartItems]);
    setCheckoutItems(() => [...newCheckoutItems]);
  };

  const handleSelectCheckoutItem = (e, item, type) => {
    const isFound = checkoutItems.find((product) => product.pid === item.pid);

    switch (type) {
      case "add":
        !isFound && setCheckoutItems((prev) => [...prev, item]);
        break;
      case "remove":
        isFound &&
          setCheckoutItems((prev) =>
            prev.filter((product) => product.pid !== item.pid)
          );
        break;
    }
  };

  const handleCartItemQty = async (item, type) => {
    const checkoutIndex = checkoutItems.findIndex(
      (product) => item.pid === product.pid
    );
    const cartIndex = cartItems.findIndex(
      (product) => item.pid === product.pid
    );
    if (type === "inc") {
      const newCartItems = cartItems;
      newCartItems[cartIndex].quantity = newCartItems[cartIndex].quantity + 1;
      await handleSyncCart(item, newCartItems[cartIndex].quantity, "update");
      setCartItems(() => [...newCartItems]);

      if (checkoutIndex != -1) {
        const newCheckOut = checkoutItems;
        newCheckOut[checkoutIndex] = item;
        setCheckoutItems(() => [...newCheckOut]);
      }
    }

    if (type === "dec") {
      const newCartItems = cartItems;
      const qty = newCartItems[cartIndex].quantity;
      if (qty < 2) {
        newCartItems[cartIndex].quantity = 1;
        await handleSyncCart(item, 1, "update");
      } else {
        newCartItems[cartIndex].quantity = newCartItems[cartIndex].quantity - 1;
        await handleSyncCart(item, newCartItems[cartIndex].quantity, "update");
      }
      setCartItems(() => [...newCartItems]);

      if (checkoutIndex != -1) {
        const newCheckOut = checkoutItems;
        newCheckOut[checkoutIndex] = item;
        setCheckoutItems(() => [...newCheckOut]);
      }
    }
  };

  const handleLogin = async (type, user) => {
    if (!type || !user) return null;

    if (user?.uid) {
      const { data } = await axios.get(`/api/cart/get/`);
      if (data) setCartItems(() => data);
    }

    setUser(() => user);
    setIsLogin(() => type);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/api/authentication/logout");
      if (data?.msg === "success") {
        setUser(() => null);
        setIsLogin(false);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        checkoutItems,
        setCheckoutItems,
        handleSelectCheckoutItem,
        handleAddCartItem,
        handleRemoveCartItem,
        totalAmount,
        setTotalAmount,
        handleCartItemQty,
        user,
        setUser,
        handleLogin,
        handleLogout,
        isLogin,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMainContext = () => useContext(Context);
