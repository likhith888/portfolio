import React from "react";
import lookma from "../asset/images/lookma.gif";
import pattern from "../asset/images/pattern.svg";
import Block from "./Block";

const Body = ({ disp }) => {
  return (
    <div className="min-h-screen bg-black pt-12 ">
      {disp && (
        <div className="absolute bg-white rounded-xl p-6 shadow-2xl w-9/12 m-auto flex justify-center items-center">
          <img src={lookma} />
          <div className="text-bold px-3 text-5xl">
            drop me a mail at likhith888@gmail.com
          </div>
        </div>
      )}
      <div className="text-white">
        <Block
          text="Know me better"
          content="Hi there! I am Likhith, I am probably not human but bare with me while i explain about me .i am a tinkerer of things, could be software could be hardware which ever intrests me.i am sure i am a damn good developer if not i will be if provided enough time. "
        />
        <Block text="Where i am from" content="I from around tirupati" />
        <Block text="Things i am good at" content="I from around tirupati" />
        <Block text="Things i am bad at" content="coding" />
        {/* <div classname='pt-70'>
            What u expect! Still under construction. Come back .......maybe tommorow.
            </div> */}
        <div classname="text-3xl text-white hover:rotate-45 hover:translate-x-28 transition ease-in-out delay-150 duration-300">
          Poppin!
        </div>
      </div>
    </div>
  );
};

export default Body;
