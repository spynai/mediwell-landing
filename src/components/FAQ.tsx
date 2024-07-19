'use client';

import Data from "../data.json";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Content = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    active === index ? setActive(null) : setActive(index);
  };

  return (
    <main className='bg-white rounded-3xl flex m-0 w-3/4 flex-col items-center md:flex-row md:justify-around'>
        <div className='flex flex-col gap-6 relative m-[2rem]'>
          {Data.map((item, index) => {
            return (
              <div key={index} className='m-0 p-0'>
                <div className='flex flex-col'>
                  <div className='flex justify-between items-center gap-3 my-2'>
                    <p
                      className={
                        active === index
                          ? "text-darkBlue text-xl font-montserrat font-bold cursor-pointer"
                          : "text-DarkGrayishBlue text-xl font-montserrat cursor-pointer"
                      }
                      onClick={() => handleToggle(index)}>
                      {item.title}
                    </p>

                    <IoIosArrowDown 
                        onClick={() => handleToggle(index)}
                        className={
                            active === index
                            ? "cursor-pointer size-[18px] rotate-180"
                            : "cursor-pointer size-[18px]"
                        }
                    />

                  </div>
                  <hr
                    className={
                      active === index
                        ? "invisible max-h-0"
                        : "border-b-1 border-LightGrayishBlue relative"
                    }></hr>
                </div>
                <p
                  onClick={() => handleToggle(index)}
                  className={
                    active === index
                      ? "text-DarkGrayishBlue text-lg font-montserrat p-0 m-0 cursor-pointer"
                      : "invisible max-h-0 font-montserrat"
                  }>
                  {item.content}
                </p>
                <hr
                    className={
                      active === index
                        ? "border-b-1 border-LightGrayishBlue relative"
                        : "invisible max-h-0"
                    }></hr>
              </div>
            );
          })}
        </div>
    </main>
  );
};

export default Content;