"use client";

import Link from "next/link";

import { useMainContext } from "@/context/Context";
import { maskEmail } from "@/utils";

function page() {
  const { user } = useMainContext();
  const profile = {
    gender: "",
    dob: "1st August, 2000",
  };

  const userDetails = [
    { key: "First Name", value: "firstname", type: "user" },
    { key: "Last Name", value: "lastname", type: "user" },
    { key: "Userame", value: "username", type: "user" },
    { key: "Email", value: "email", type: "user" },
    { key: "Phone number", value: "phonenumber", type: "user" },
    { key: "Gender", value: "gender", type: "profile" },
    { key: "Date of birth", value: "dob", type: "profile" },
  ];
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
          </div>
          {userDetails.map((detail, i) => (
            <div className="user-detail d-flex" key={i}>
              <p className="detail-title">{detail.key}</p>
              <p className="detail-text">
                {detail.type === "user" && user
                  ? detail.value === "phonenumber"
                    ? `${user[detail.value]} (default)`
                    : detail.value === "email"
                    ? maskEmail(user[detail.value])
                    : user[detail.value]
                  : ""}

                {detail.type === "profile" && profile ? (
                  profile[detail.value] ? (
                    profile[detail.value]
                  ) : (
                    <Link href="/account/profile/edit">Set</Link>
                  )
                ) : (
                  ""
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
