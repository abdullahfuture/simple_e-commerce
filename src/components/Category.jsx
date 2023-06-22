import React from "react";

function Category({item}) {
  return (
    <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
      <img src={item.src} alt="category_image" className="w-full" />
      <div className="flex absolute w-full h-full left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white font-medium text-3xl">{item.title}</h2>
        <button className="btn">See more</button>
      </div>
    </div>
  );
}

export default Category;
