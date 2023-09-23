import React from "react";

const MobileTimeLine = () => {
  return (
    <div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-8">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-fuchsia-500 rounded-full -left-3 ring-8 ring-fuchsia-500 dark:ring-fuchsia-500 dark:bg-fuchsia-500">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-fuchsia-500">
          Hackathon Announcement
            
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-fuchsia-500 dark:text-gray-500">
            January 13th, 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500  text-white">
          Interested teams can now show their interest 
in the getlinked tech hackathon 1.0 2023 by 
proceeding to register
          </p>
       
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-fuchsia-500 rounded-full -left-3 ring-8 ring-fuchsia-500 dark:ring-fuchsia-500 dark:bg-fuchsia-500">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold  dark:text-white text-fuchsia-500">
          Teams Registration begins
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-fuchsia-500 dark:text-gray-500">
            December 7th, 2021
          </time>
          <p className="text-base font-normal text-gray-500 text-white">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-fuchsia-500 rounded-full -left-3 ring-8 ring-fuchsia-500 dark:ring-fuchsia-500 dark:bg-fuchsia-500">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg text-fuchsia-500 font-semibold  ">
          Teams Registration ends
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-fuchsia-500 dark:text-gray-500">
            Released on December 2nd, 2021
          </time>
          <p className="text-base font-normal text-gray-500 text-white">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default MobileTimeLine;
