import React, { useEffect, useState } from "react";

function Progress({value, onComplete = ()=> {}}) {

    const [percent, setPercent] = useState(value);
    useEffect(()=>{
        setPercent(Math.min(Math.max(value, 0),100));
        if(value>=100)
            onComplete();
    },[value])

  return (
    <div className="w-64 h-4 overflow-hidden bg-gray-200 rounded-lg flex items-center justify-center relative">
      <p className={`absolute inset-0 flex justify-center items-center  text-xs text-gray-700 z-20 ${percent.toFixed() > 45 ? 'text-white' : 'text-black'}`}>
        {percent.toFixed()} %
      </p>
      <div
        style={{
          transform: `scaleX(${percent/100})`,
          transformOrigin: "left",
        }}
        className={`absolute h-full w-full bg-green-500`}
      ></div>
    </div>
  );
}

export default Progress;
