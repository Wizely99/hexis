import React from "react";

function LoggedUser() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 flex justify-center items-center bg-blue-800 rounded-full p-2">
        SB
      </div>
      <div className="text-xl ">Sarah Brown</div>
    </div>
  );
}

export default LoggedUser;
