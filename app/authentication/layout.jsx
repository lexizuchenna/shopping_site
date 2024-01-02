"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function layout({ children }) {
  const path = usePathname();
  const last = path.split("/").pop();
  return (
    <div
      className=""
      style={{ backgroundColor: "#ebebeb", paddingTop: "120px" }}
    >
      <div
        className="main-container d-flex"
        style={{ paddingTop: "0", justifyContent: "center" }}
      >
        <div className="auth-card">
          <div className="auth-title">
            <h2>{last === "register" ? "Sign Up" : "Log In"}</h2>
          </div>
          {children}
          <div className="change-page">
            <p>
              {last === "register" ? "Already" : "Don't"} have an account?{" "}
              {last !== "register" ? (
                <Link href="/authentication/register">Sign up</Link>
              ) : (
                <Link href="/authentication/login">Log in</Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
