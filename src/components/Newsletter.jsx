import {Send} from "@mui/icons-material";
import React from "react";

function Newsletter() {
  return (
    <div className="flex justify-center items-center h-[300px] w-full flex-col bg-[#c4a4f9]">
      <h1 className="text-5xl font-bold">BESTLETTER</h1>
      <h2 className="text-[20px] mt-2 mobile:p-3 mobile:text-center">
        Always in touch with use, for your favorite products
      </h2>
      <div className="flex mt-12 items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        <input
          type="email"
          placeholder="email"
          className="border-none pl-5 flex-[7] outline-none"
        />
        <button className="bg-[#4caf50] flex-1 h-full">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
