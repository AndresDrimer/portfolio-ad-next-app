import Image from "next/image";
import React from "react";

function NewSkills(props) {
  
    const createSkills = props.data.skills.map( skill => {
        return (
            <div className="p-0 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center justify-center" key={skill.id}>
            <div className="grid grid-rows-2 gap-0 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="stack img"
                  src={skill.icon}
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="uppercase text-gray-600 text-bold">{skill.tech}</p>
                
              </div>
            </div>
          </div>

        )
    })


    return (
    <div id="stack" className="w-full  p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h3 className="text-xl tracking-widest uppercase text-[#22c4c7] pl-2 pb-2 font-normal">
          Stack
        </h3>
     
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {createSkills}
       


        </div>
      </div>
    </div>
  );
};

export default NewSkills;
