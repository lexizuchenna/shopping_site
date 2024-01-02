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
      const { data } = await axios.get("/api/authentication/get-token");

      if (data.user) {
        setUser(() => data.user);
        setIsLogin(() => true);
      }
    };

    getUser();
  }, []);

  const handleAddCartItem = (item, quantity) => {
    const cartIndex = cartItems.findIndex(
      (product) => item._id === product._id
    );
    const checkoutIndex = checkoutItems.findIndex(
      (product) => item._id === product._id
    );

    if (cartIndex !== -1) {
      if (quantity > 1) {
        const newCartItems = cartItems;
        newCartItems[cartIndex].quantity = quantity;

        setCartItems(() => [...newCartItems]);
        toast.success(`${quantity} ${item.name} added to cart`, {
          duration: 2000,
        });
      } else {
        const newCartItems = cartItems;
        newCartItems[cartIndex].quantity = newCartItems[cartIndex].quantity + 1;

        setCartItems(() => [...newCartItems]);
        toast.success(`${item.name} added to cart`, {
          duration: 2000,
        });
      }
    } else {
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

  const handleRemoveCartItem = (item) => {
    const newCartItems = cartItems.filter(
      (product) => product._id !== item._id
    );
    const newCheckoutItems = checkoutItems.filter(
      (product) => product._id !== item._id
    );

    setCartItems(() => [...newCartItems]);
    setCheckoutItems(() => [...newCheckoutItems]);
  };

  const handleSelectCheckoutItem = (e, item, type) => {
    const isFound = checkoutItems.find((product) => product._id === item._id);

    switch (type) {
      case "add":
        !isFound && setCheckoutItems((prev) => [...prev, item]);
        break;
      case "remove":
        isFound &&
          setCheckoutItems((prev) =>
            prev.filter((product) => product._id !== item._id)
          );
        break;
    }
  };

  const handleCartItemQty = (item, type) => {
    const checkoutIndex = checkoutItems.findIndex(
      (product) => item._id === product._id
    );
    const cartIndex = cartItems.findIndex(
      (product) => item._id === product._id
    );
    if (type === "inc") {
      const newCartItems = cartItems;
      newCartItems[cartIndex].quantity = newCartItems[cartIndex].quantity + 1;

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
      if (qty < 2) newCartItems[cartIndex].quantity = 1;
      else
        newCartItems[cartIndex].quantity = newCartItems[cartIndex].quantity - 1;

      setCartItems(() => [...newCartItems]);

      if (checkoutIndex != -1) {
        const newCheckOut = checkoutItems;
        newCheckOut[checkoutIndex] = item;
        setCheckoutItems(() => [...newCheckOut]);
      }
    }
  };

  const handleLogin = (type, user) => {
    if (!type || !user) return null;

    setUser(() => user);
    setIsLogin(() => type);
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
        isLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMainContext = () => useContext(Context);
