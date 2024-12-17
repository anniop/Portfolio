import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full flex flex-col items-center">
      <h1 className="heading text-center mb-12">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-4 md:px-12">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex flex-col items-center justify-between text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
          >
            <div className="flex flex-col justify-between items-center p-6 gap-4">
              <img
                src={card.thumbnail}
                alt={`${card.title} thumbnail`} // More descriptive alt text
                className="w-32 h-32 object-cover rounded-full shadow-md"
              />
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-semibold text-white">
                  {card.title}
                </h1>
                <p className="mt-3 text-lg font-semibold text-gray-300">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

