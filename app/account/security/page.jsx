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
    old_password: "",
    password: "",
    password2: "",
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

  return (
    <>
      <div className="user-page-heading">
        <h2>User Profile</h2>
        <p>Change your password</p>
      </div>
      <div className="user-page-body">
        <form onSubmit={handleSubmit}>
          <div className="input-group password">
            <input
              type={hidePwd ? "password" : "text"}
              name="old_password"
              placeholder="Old Password"
              value={formData.old_password}
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
              name="password"
              placeholder="New Password"
              value={formData.password}
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
          <div className="input-group password">
            <input
              type={hidePwd3 ? "password" : "text"}
              name="password2"
              placeholder="Confirm New Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div>
              <button
                onClick={() => setHidePwd3((prev) => !prev)}
                type="button"
                className="d-flex"
              >
                {hidePwd3 ? <ClosedEye /> : <Eye />}
              </button>
            </div>
          </div>
          <div className="input-group submit-btn">
            <input type="submit" value="Change Password" />
          </div>
        </form>
      </div>
    </>
  );
}

export default page;
