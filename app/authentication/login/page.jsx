"use client";

import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useMainContext } from "@/context/MainContext";
import Eye from "@/components/icons/Eye";
import ClosedEye from "@/components/icons/ClosedEye";

function page() {
  const { handleLogin } = useMainContext();
  const router = useRouter();
  const query = useSearchParams();

  const [hidePwd, setHidePwd] = useState(true);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).includes(""))
      return toast.error("Fill all fields!", { duration: 2000 });

    try {
      toast.loading("Loading...", { id: "load" });
      const { data } = await axios.post("/api/authentication/login", formData);

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
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="login"
          placeholder="Email/Username/Phone number"
          value={formData.login}
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
      <div className="input-group submit-btn">
        <input type="submit" value="submit" />
      </div>
      <div className="forgot-link">
        <Link href="/authentication/forgot-password">Forgot Password</Link>
      </div>
    </form>
  );
}

export default page;
