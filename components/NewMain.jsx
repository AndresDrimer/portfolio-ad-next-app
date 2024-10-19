import Image from "next/image";
import React from "react";
import ContactIcons from "./ContactIcons";

const NewMain = (props) => {
  return (
    <div id="about" className=" w-full  p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-8 items-center">
        <div className="col-span-2">
          <div className="text-center">
       
            <h1 className="text-[#22c4c7] py-2">{props.data.name}</h1>
            <h1 className=" text-gray-700">{props.data.workTitle}</h1>
            <p className="py-4 text-gray-600 max-w-[75%] m-auto">
              {props.data.moto}
            </p>
            <ContactIcons />
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={props.data.aboutPhoto}
            alt="main photo"
            width="300"
            height="60"
            className="rounded-xl"
            priority
            quality={75}
          />
        </div>
      </div>
    </div>
  );
};

export default NewMain;
