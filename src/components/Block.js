import React, { useState } from "react";

const Block = (props) => {
  
  return (
    <div className="">
      <div className="transition ease-in-out delay-150 duration-300 hover:translate-x-0 flex justify-start  -translate-x-74p p-3">
      <div className="text-3xl text-white order-2 w-3/12 text-left py-3" >{props.text}</div>
      <div className="order-1 w-9/12">{props.content}</div>
      
      </div>
      
    </div>
  );
};

export default Block;
