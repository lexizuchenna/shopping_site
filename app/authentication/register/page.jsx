"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import Eye from "@/components/icons/Eye";
import ClosedEye from "@/components/icons/ClosedEye";
import { checkEmail } from "@/utils";

function page() {
  const query = useSearchParams();
  const router = useRouter();

  const [hidePwd, setHidePwd] = useState(true);
  const [hidePwd2, setHidePwd2] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).includes(""))
      return toast.error("Fill all fields!", { duration: 2000 });

    if (checkEmail(formData.email) === "Invalid Email")
      return toast.error("Incorrect email address!", { duration: 2000 });

    if (formData.phonenumber.length < 11)
      return toast.error("Phone number incorrect!");

    if (formData.password !== formData.password2)
      return toast.error("Passwords dont't match!");
    try {
      toast.loading("Creating an account...", { id: "load" });
      const { data } = await axios.post(
        "/api/authentication/register",
        formData
      );

      toast.remove("load");
      toast.success(data);

      const redirect = query.get("redirect_url");

      if (redirect) {
        const nextUrl = `/authentication/login?redirect_url=${redirect}`;
        router.push(nextUrl);
      } else {
        router.push("/authentication/login");
      }
    } catch (error) {
      toast.remove("load");
      toast.error(error.response.data, { duration: 3000 });
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "phonenumber") value = value.slice(0, 11);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="phonenumber"
          placeholder="Phone number"
          value={formData.phonenumber}
          onChange={handleChange}
        />
      </div>

      <div className="input-group password">
        <input
          type={hidePwd ? "password" : "text"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div>
          <button
            onClick={() => setHidePwd((prev) => !prev)}
            type="button"
            className="d-flex"
          >
            {hidePwd ? <ClosedEye /> : <Eye />}
          </button>
        </div>
      </div>
      <div className="input-group password">
        <input
          type={hidePwd2 ? "password" : "text"}
          name="password2"
          placeholder="Confirm password"
          value={formData.password2}
          onChange={handleChange}
        />
        <div>
          <button
            onClick={() => setHidePwd2((prev) => !prev)}
            type="button"
            className="d-flex"
          >
            {hidePwd2 ? <ClosedEye /> : <Eye />}
          </button>
        </div>
      </div>
      <div className="input-group submit-btn">
        <input type="submit" value="submit" />
      </div>
    </form>
  );
}

export default page;
