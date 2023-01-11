import Image from "next/image";
import React from "react";

const Aside = () => {
  return (
    <div className="d-flex w-250px bg-black p-3">
      <div className="d-flex align-items-center justify-content-center w-100">
        <Image alt="logo" src="/spotify.png" width={40} height={40} />
        <h1 className="fs-2 ms-2 text-white mb-0">Spotify</h1>
      </div>
    </div>
  );
};

export default Aside;
