import React from 'react';

const Card = () => {
  return (

    <div className="w-[692px] h-[494px] left-[691px] top-[5839px] absolute bg-red-500">
    <div className="w-[212px] h-[380px] left-0 top-[97px] absolute">
      <div className="w-[212px] h-[296px] left-0 top-[84px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
      <img
        className="w-[179px] h-[180px] left-[16px] top-0 absolute"
        src="https://via.placeholder.com/179x180"
      />
      <div className="left-[70px] top-[195px] absolute text-white text-4xl font-bold font-['Montserrat'] leading-[77.90px]">
        2nd
      </div>
      <div className="left-[60px] top-[243px] absolute text-white text-2xl font-semibold font-['Montserrat'] leading-[51.94px]">
        Runner
      </div>
      <div className="left-[25px] top-[278px] absolute text-fuchsia-500 text-[32px] font-bold font-['Montserrat'] leading-[69.25px]">
        N300,000
      </div>
    </div>
    <div className="w-[212px] h-[369px] left-[480px] top-[108px] absolute">
      <div className="w-[212px] h-[296px] left-0 top-[73px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
      <img
        className="w-[179px] h-[180px] left-[17px] top-0 absolute"
        src="https://via.placeholder.com/179x180"
      />
      <div className="left-[75px] top-[184px] absolute text-white text-4xl font-bold font-['Montserrat'] leading-[77.90px]">
        3rd
      </div>
      <div className="left-[60px] top-[232px] absolute text-white text-2xl font-semibold font-['Montserrat'] leading-[51.94px]">
        Runner
      </div>
      <div className="left-[30px] top-[267px] absolute text-fuchsia-500 text-[32px] font-bold font-['Montserrat'] leading-[69.25px]">
        N150,000
      </div>
    </div>
    <div className="w-[296px] h-[494px] left-[200px] top-0 absolute">
      <div className="w-[212px] h-[347px] left-[42px] top-[147px] absolute bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600" />
      <img
        className="w-[296px] h-[296px] left-0 top-0 absolute"
        src="https://via.placeholder.com/296x296"
      />
      <div className="left-[121px] top-[296px] absolute text-white text-[40px] font-bold font-['Montserrat'] leading-[86.56px]">
        1st
      </div>
      <div className="left-[102px] top-[352px] absolute text-white text-2xl font-semibold font-['Montserrat'] leading-[51.94px]">
        Runner
      </div>
      <div className="left-[66px] top-[404px] absolute text-purple-600 text-[32px] font-bold font-['Montserrat'] leading-[69.25px]">
        N400,000
      </div>
    </div>
  </div>













    // <div className={`max-w-sm rounded overflow-hidden shadow-lg relative `}>
    //   {/* Medals positioned slightly outside the content card */}
    //   <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
    //     {/* Place your medal icons or images here */}
    //     {/* Example:
    //     <img src="medal.png" alt="Medal 1" className="w-8 h-8 ml-2" />
    //     <img src="medal.png" alt="Medal 2" className="w-8 h-8 ml-2" />
    //     */}
    //   </div>
    //   <img src={imageUrl} alt={title} className="w-full  object-cover" />
    //   <div className="px-6 py-4 bg-red-500 relative z-0">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <p className="text-gray-700 text-base">{description}</p>
    //   </div>
    // </div>
  );
};

export default Card;
