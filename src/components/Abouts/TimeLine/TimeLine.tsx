import React from "react";

const VerticalLine = () => {
  return (
    <div className="h-screen w-1 bg-gray-400 flex flex-col items-center container mx-auto">
      {[1, 2, 3, 4, 5, 6, 7].map((number) => (
        <div
          key={number}
          className="my-4 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold"
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default VerticalLine;
