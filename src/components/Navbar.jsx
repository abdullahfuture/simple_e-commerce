import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import {Badge} from "@mui/material";
import React from "react";

function Navbar() {
  const style = "text-sm cursor-pointer ml-6 mobile:ml-[11px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        {/* search */}
        <div className="flex flex-1 items-center">
          <div className="language cursor-pointer mobile:hidden">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lightgray rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="input outline-none mobile:w-12" />
            <Search style={{fontSize: "16px"}} />
          </div>
        </div>
        {/* logo */}
        <div className="flex-1 text-center">
          <div className="logo font-bold text-lg mobile:text-sm">New Shop</div>
        </div>
        {/* reg, login, cart */}
        <div className="flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center">
          <div className={style}>Register</div>
          <div className={style}>Sign in</div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
