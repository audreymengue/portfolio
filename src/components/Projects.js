import React from "react";
import { CodeIcon} from "@heroicons/react/solid";


export default function Projects() {
    return (
      <section id="projects" className="bg-slate-300">
        <div className="container px-5 py-10 mx-auto ">

            <div className="text-center mb-10">
              <CodeIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-slate-900 mb-4">
                Projects portfolio
              </h1>
              <p className="text-slate-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Here is the list of my top four(4) projects. You can view the hosted projects and access the code on github.
              </p>
           </div>

            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center">

                 <div class="p-2 sm:w-1/2 w-full ">
  <div class="px-6 bg-gray-800 py-4 rounded-lg ">
    <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">Touch by Kren</h4>
    <p class="leading-normal text-white">Touch by Kren is a hairdressing website built with React and Tailwind CSS to showcase the different hairsyles to potential clients.</p>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="https://touchbykren.netlify.app" target="_blank" rel="noreferrer">View project</a>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="https://github.com/audreymengue/touchbykren" target="_blank" rel="noreferrer">View code</a>
  </div>
</div>

<div class="p-2 sm:w-1/2 w-full">
  <div class="px-6 py-4 bg-gray-800 rounded-lg ">
    <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">Microsoft User Group Gabon site</h4>
    <p class="leading-normal text-white">This site helps volunteers and participants to keep up with the activities.</p>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="https://github.com/audreymengue/portfolio" target="_blank" rel="noreferrer">View project</a>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="https://github.com/audreymengue/portfolio" target="_blank" rel="noreferrer">View code</a>
  </div>
</div>

<div class="p-2 sm:w-1/2 w-full">
  <div class="px-6 py-4 bg-gray-800 rounded-lg">
    <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">Ecommerce</h4>
    <p class="leading-normal text-white">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="link to projects" target="_blank" rel="noreferrer">View project</a>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="link to projects" target="_blank" rel="noreferrer">View code</a>
  </div>
</div>

<div class="p-2 sm:w-1/2 w-full ">
  <div class="px-6 py-4 bg-gray-800 rounded-lg">
    <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">Restaurant </h4>
    <p class="leading-normal text-white">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="link to projects" target="_blank" rel="noreferrer">View project</a>
    <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" href="link to projects" target="_blank" rel="noreferrer">View code</a>
  </div>
</div>


               
            </div>
        </div>
      </section>
   );

}