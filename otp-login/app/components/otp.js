import React, { useEffect, useState, useRef } from "react";

function Otp({ length = 4, onSubmit = () => {} }) {
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const handleChange = (e, i) => {
    const newOtp = [...otp];
    newOtp[i] = e.target.value;
    setOtp(newOtp);
    if (i <= 2) inputRefs.current[i + 1].focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && i > 0 && !otp[i]) {
      inputRefs.current[i - 1].focus();
      const newOtp = [...otp];
      newOtp[i - 1] = "";
      setOtp(newOtp);
      e.preventDefault();
    }
  };

  const handleGO = (e) => {
    e.preventDefault();
    const ip = otp.join("");
    const regex = /[^0-9]/g;
    if (ip.length == length) {
      alert("otp submitted successfully");
      onSubmit();
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {otp.map((value, index) => {
        return (
          <input
            value={value}
            onChange={(e) => {
              handleChange(e, index);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e, index);
            }}
            maxLength={1}
            ref={(ip) => {
              inputRefs.current[index] = ip;
            }}
            key={index}
            className="focus:outline-none border-blue-600 focus:border-4 rounded-md w-14 h-14 text-black flex flex-wrap items-center justify-center text-center"
            type="text"
          />
        );
      })}
      <button
        onClick={handleGO}
        className="bg-green-600 rounded-md p-4 text-white"
      >
        GO
      </button>
    </div>
  );
}

export default Otp;
