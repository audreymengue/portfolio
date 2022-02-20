import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-300">

    <div className="container px-5 py-10 mx-auto">

      <div className="text-center mb-10">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-slate-900 mb-4">
          Technologies I work with
        </h1>
        <p className="text-slate-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Below is the list of the technoloies I use on daily basis on personal as well as client projects.
        </p>
      </div>
      
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center">
        
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                <p>JavaScript </p>
              </span>
            </div>
          </div>
        
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                <p>React</p>
              </span>
            </div>
          </div>
        
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                <p>Azure </p>
              </span>
            </div>
          </div>
       
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                <p>Tailwinds </p>
              </span>
            </div>
          </div>

        </div>

    </div>
  </section>
  );
}