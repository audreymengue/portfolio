import React from "react"
import { MailIcon} from "@heroicons/react/solid"


export default function Navbar() {
  return (
    <header className="bg-slate-700 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0" href="a banner">
          <a href="#about" className="ml-3 text-xl">
            Audrey Mengue
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Technologies
          </a>
          <a href="#social" className="mr-5 hover:text-white">
            Social
          </a>
        </nav>
        <a
          href="mailto:massoumeharmonie@gmail.com"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Email Me
          <MailIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
    
}