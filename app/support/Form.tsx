"use client";

import React, { useMemo, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { TbPhoneRinging } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineAlternateEmail } from "react-icons/md";

import FloatingInput from "../common/FloatingInput";
import MainButton from "../common/MainButton";

const Form: React.FC = () => {
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputWrap =
    "py-3 px-6 rounded-full border-white/25 bg-black/40 focus-within:border-white/60";

  const labelStyle = "text-3xl font-bold text-white";
  const gapBetweenLabelAndInput = "mt-4";

  const iconStyle = "text-white/55 text-lg";

  return (
    <form
      className="
        w-full rounded-3xl border border-white/15 bg-black/40 p-10
      "
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
        {/* First Name */}
        <div>
          <p className={labelStyle}>First Name</p>
          <div className={gapBetweenLabelAndInput}>
            <FloatingInput
              id="firstName"
              label="Enter First Name"
              icon={<HiOutlineUser className={iconStyle} />}
              value={form.firstName}
              onChange={(e) =>
                setForm((p) => ({ ...p, firstName: e.target.value }))
              }
              wrapperClassName={inputWrap}
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <p className={labelStyle}>Last Name</p>
          <div className={gapBetweenLabelAndInput}>
            <FloatingInput
              id="lastName"
              label="Enter Last Name"
              icon={<HiOutlineUser className={iconStyle} />}
              value={form.lastName}
              onChange={(e) =>
                setForm((p) => ({ ...p, lastName: e.target.value }))
              }
              wrapperClassName={inputWrap}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className={labelStyle}>Email</p>
          <div className={gapBetweenLabelAndInput}>
            <FloatingInput
              id="email"
              label="Enter your Email"
              type="email"
              icon={<MdOutlineAlternateEmail className={iconStyle} />}
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              wrapperClassName={inputWrap}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <p className={labelStyle}>Phone Number</p>
          <div className={gapBetweenLabelAndInput}>
            <FloatingInput
              id="phone"
              label="Enter Phone Number"
              inputMode="tel"
              icon={<TbPhoneRinging className={iconStyle} />}
              value={form.phone}
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
              wrapperClassName={inputWrap}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-14">
        <p className={labelStyle}>Message</p>

        <div className="mt-4 rounded-2xl border border-white/25 bg-black/40 px-6 py-5 focus-within:border-white/60 transition">
          <textarea
            id="message"
            placeholder="Enter your Message"
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
            rows={7}
            className="w-full bg-transparent text-white outline-none resize-none placeholder:text-white/35"
          />
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <label className="flex items-center gap-4 text-white/50 text-lg">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-6 w-6 rounded-md border border-white/30 bg-black accent-primary"
          />
          <span>I agree with Terms of Use and Privacy Policy</span>
        </label>

        <MainButton
          type="submit"
          label="Send Message"
          icon={<FiSend />}
          iconPosition="right"
          className="px-12 py-4 text-lg rounded-2xl"
        />
      </div>
    </form>
  );
};

export default Form;
