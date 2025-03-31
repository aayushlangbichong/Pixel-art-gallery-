import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="w-8 h-8 flex">
      <Image src={"/logo.png"} height={100} width={100} alt="logo" />
      <Image src={"/logoL.png"} height={100} width={100} alt="logo" />
    </div>
  );
}

export default Logo;
