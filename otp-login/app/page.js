"use client";

import { useState } from "react";
import Otp from "./components/otp";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert("invalid phone");
    } else {
      setIsOtpVisible(true);
    }
  };

  return (
    <div className="grid bg-black grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {!isOtpVisible ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="phone number"
            type="tel"
            className="col-span-2 h-12 rounded-xl text-black pl-4 focus:outline-none"
          />
          <button type="submit" className="bg-green-600 p-2 rounded-xl">
            submit
          </button>
        </form>
      ) : (
        <Otp
          length={4}
          onSubmit={() => {
            setIsOtpVisible(false);
          }}
        />
      )}
    </div>
  );
}
