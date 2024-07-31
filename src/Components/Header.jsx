import React from "react";

function Header() {
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black w-full z-10">
      <div className="flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
        <div>
          {/* <button className="bg-regal-red text-white px-4 py-1 rounded-md">
            Sign in
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;