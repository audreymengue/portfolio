import React from "react"
import image from "../image.png";

export default function About() {
        return (
          <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Hi there and welcome! 
                  <br className="hidden lg:inline-block" /> I'm Audrey. A software engineer.
                </h1>
                <p className="mb-8 leading-relaxed">
                I am based in Accra, Ghana and hold a Bsc in Information Technology as well as <br/>  a certification in Microsoft Azure. 
                During my spare time, I volunteer with local and <br/>  international communities as a speaker.
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:massoumeharmonie@gmail.com"
                    className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Email me today
                  </a>
                  <a
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    View projects
                  </a>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={image}
                />
              </div>
            </div>
          </section>
        );
}