'use client';
import Image from "next/image";
import Progress from "./component/progress";
import { useEffect, useState } from "react";

export default function Home() {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 10);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Progress value={value} onComplete={()=>{}} />
    </div>
  );
}
