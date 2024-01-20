"use client";

import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

import { useMainContext } from "@/context/Context";
import Eye from "@/components/icons/Eye";
import ClosedEye from "@/components/icons/ClosedEye";

function page() {
  const [hidePwd, setHidePwd] = useState(true);
  const [hidePwd2, setHidePwd2] = useState(true);
  const [hidePwd3, setHidePwd3] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    "zip-code": "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).includes(""))
      return toast.error("Fill all fields!", { duration: 2000 });

    try {
      toast.loading("Loading...", { id: "load" });
      setIsLoading(true);
      const { data } = await axios.post("/api/account/security", formData);

      if (data) {
        toast.remove("load");
        toast.success("Redirecting...", { duration: 3000 });

        handleLogin(true, data.user);

        const redirect = query.get("redirect_url");

        if (redirect) router.push(`/${redirect}`);
        else router.push("/");
      }
    } catch (error) {
      toast.remove("load");
      console.log(error);
      toast.error(error.response.data, { duration: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const address = [
    {
      name: "Alexander Ukwueze",
      phonenumber: "+2347043696226",
      street: "24 Bank Street, Mainland, EMene",
      city: "Enugu",
      state: "Enugu",
      country: "Nigeria",
      "zip-code": "410001",
      default: true,
    },
    {
      name: "Alexander Uchenna",
      phonenumber: "+2347043696226",
      street: "14 Bank Street, Mainland, EMene",
      city: "Abuja",
      state: "Kaduna",
      country: "Nigeria",
      "zip-code": "410001",
      default: false,
    },
    {
      name: "Alexander Onoh",
      phonenumber: "+2347043696226",
      street: "29 Bank Street, Mainland, EMene",
      city: "Kaduna",
      state: "Kaduna",
      country: "Nigeria",
      "zip-code": "410001",
      default: false,
    },
  ];

  return (
    <>
      <div className="user-page-heading">
        <h2>User Profile</h2>
        <p>Manage your addresses</p>
      </div>
      <div className="user-page-body d-flex">
        <div className="address-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone number"
                value={formData.phonenumber}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <select
                name="country"
                id=""
                onChange={handleChange}
                value={formData.country}
              >
                <option value="nigeria">Nigeria</option>
                <option value="china">China</option>
                <option value="ghana">Ghana</option>
              </select>
            </div>
            <div className="input-group submit-btn">
              <input type="submit" value="Add address" />
            </div>
          </form>
        </div>
        <div className="address-panel">
          {address.map((add) => (
            <div className="address-container">
              <p className="name">
                <b>{add.name}</b>
              </p>
              <p>{add.phonenumber}</p>
              <p>{add.street}</p>
              <p>{add.city}</p>
              <p>{add.state} State</p>
              <p>{add.country} State</p>
              <p>{add["zip-code"]}</p>
              <button className="set-default-address" disabled={add.default}>
                Set Default
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
