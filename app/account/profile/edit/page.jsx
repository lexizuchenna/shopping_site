"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import CloudinaryUploadWidget from "@/lib/upload";

import { useMainContext } from "@/context/Context";

function page() {
  const [info, setInfo] = useState({});
  const { user } = useMainContext();

  const profile = {
    gender: "male",
    dob: "22-12-2003",
  };

  const [formData, setFormData] = useState({
    username: user?.username,
    gender: profile?.gender,
    dob: profile?.dob,
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, username: user?.username }));
  }, [user]);
  useEffect(() => {
    setFormData((prev) => ({ ...prev, username: user?.username }));
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };
  return (
    <>
      <div className="user-page-heading">
        <h2>User Profile</h2>
        <p>Manage and protect your account</p>
      </div>
      <div className="user-page-body d-flex">
        <div className="user-details">
          <div className="account-picture d-flex">
            <div className="placeholder">
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon tHTenE icon-headshot"
              >
                <g>
                  <circle
                    cx="7.5"
                    cy="4.5"
                    fill="none"
                    r="3.8"
                    strokeMiterlimit="10"
                  ></circle>
                  <path
                    d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                  ></path>
                </g>
              </svg>
            </div>
            <CloudinaryUploadWidget
              setInfo={setInfo}
              uwConfig={{
                cropping: true,
                uploadPreset: "xr6q7qsj",
                sources: ["local", "url"],
                multiple: false,
                clientAllowedFormats: ["jpg", "png"],
              }}
            >
              <div className="input-group submit-btn">
                <input type="submit" value="Save" />
              </div>
            </CloudinaryUploadWidget>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="user-detail d-flex">
              <label className="detail-title">Username</label>
              <div className="input-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="user-detail d-flex">
              <label className="detail-title" htmlFor="gender">
                Gender
              </label>
              <div className="input-group d-flex radio">
                <label htmlFor="male">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={formData.gender === "male"}
                  />
                  Male
                </label>
                <label htmlFor="female">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={formData.gender === "female"}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="user-detail d-flex">
              <p className="detail-title">Date of birth</p>
              <div className="input-group">
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of birth"
                  value={new Date(formData.dob)}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group submit-btn">
              <input type="submit" value="Edit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
