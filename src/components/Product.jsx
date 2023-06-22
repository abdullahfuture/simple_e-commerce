import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React, {useState} from "react";

function Product({item}) {
  const [hoverEffect, setHoverEffect] = useState(" opacity-0");
  const handleHoverEffect = () => {
    setHoverEffect(" opacity-1 hover:bg-[rgba(0,0,0,0.2)]");
  };
  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };
  const iconStyle =
    "h-10 w-10 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  return (
    <div
      className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEffect}
      onMouseLeave={handleHoverExit}>
      <img src={item.src} alt="product_image" />
      <div
        className={`flex items-center justify-center w-full h-full absolute ease-in duration-100 ${hoverEffect}`}>
        <div className={iconStyle}>
          <ShoppingBagOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
