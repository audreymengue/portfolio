import React from "react";

export default function Social() {
    return (
      <div id="social" className="bg-blue-500">
      <div className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
          Let's connect
        </h1>

      </div>

      <div className="flex justify-center space-x-8">
      <a href="https://twitter.com/la_mengs" className="mb-10" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter"/></a>
      <a href="https://www.linkedin.com/in/audreyhmmengue/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="linkedin"/></a>
      <a href="https://github.com/audreymengue" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/github--v1.png" alt="github"/></a>
      
      
      
    </div>
    </div>
      );
}