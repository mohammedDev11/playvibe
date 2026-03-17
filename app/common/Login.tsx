import React, { use, useState } from "react";
import Input from "./Input";
import { MdDomainVerification, MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Stepper, { Step } from "./Steeper";
import FloatingInput from "./FloatingInput";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AUTH_PROVIDERS } from "@/data/Index";
import ExpandedButton from "./ExpandedButton";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const handleSeePassword = () => {
    setSeePassword((prev) => !prev);
  };
  return (
    <form className="flex flex-col gap-3 ">
      <Stepper
        className="w-full p-0 flex items-stretch justify-stretch" // overrides the built-in centered/aspect wrapper
        initialStep={1}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        {/* Step 1:  Email + Password */}
        <Step>
          <div className="py-3 flex flex-col gap-3">
            {/* Email */}
            <FloatingInput
              icon={<MdOutlineMailOutline size={20} />}
              type="email"
              name="email"
              id="login-email"
              label="Email"
            />

            {/* Password */}
            <div className="relative ">
              <FloatingInput
                icon={<RiLockPasswordLine size={20} />}
                type={seePassword ? "text" : "password"}
                name="password"
                id="login-password"
                label="Password"
                autoComplete="current-password"
              />

              <button
                type="button"
                onClick={handleSeePassword}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
                aria-label={seePassword ? "Hide password" : "Show password"}
              >
                {seePassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
            </div>
            <a href="#" className="text-right">
              <span
                className="border border-t-transparent border-l-transparent border-r-transparent border-b-foreground
              hover:border-b-transparent duration-300
              "
              >
                Forgot password?
              </span>
            </a>

            {/* or Use... */}
            <div className="flex items-center gap-2 justify-center text-muted">
              <div className="w-20 h-0.5 rounded-2xl bg-muted" />
              <span> Or sign in with </span>
              <div className="w-20 h-0.5 rounded-2xl bg-muted" />
            </div>
            {/* <div className="w-full flex items-center justify-center gap-5 ">
              {AUTH_PROVIDERS.map((way) => {
                const Icon = way.icon;
                return (
                  <ExpandedButton
                    key={way.id}
                    id={way.id}
                    label={way.label}
                    icon={way.icon}
                    color={way.color}
                    onClick={() => console.log("Login with", way.id)}
                  />
                );
              })}
            </div> */}
            <div className="w-full flex items-center justify-center gap-5">
              {AUTH_PROVIDERS.map((way) => (
                <ExpandedButton
                  key={way.id}
                  id={way.id}
                  label={way.label}
                  icon={way.icon}
                  className={way.className}
                  onClick={() => console.log("Login with", way.id)}
                />
              ))}
            </div>
          </div>
        </Step>

        {/* Step 2: Verification */}
        <Step>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Verify Your Email</h2>

            <p className="text-sm text-neutral-400">
              We sent a verification code to your email.
            </p>

            {/* verification */}
            <FloatingInput
              icon={<MdDomainVerification size={20} />}
              type="text"
              name="verification"
              id="login-email"
              label="Enter 6-digit code"
            />

            <button className="cursor-pointer text-right">
              <span
                className="border border-t-transparent border-l-transparent border-r-transparent border-b-foreground
              hover:border-b-transparent duration-300
              "
              >
                Resend code
              </span>
            </button>
          </div>
        </Step>
        {/* ??? */}
        <Step>
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-xl font-semibold">You’re In</h2>

            <p className="text-muted text-sm">
              Your account has been successfully created.
            </p>
          </div>
        </Step>
      </Stepper>
    </form>
  );
};

export default Login;
