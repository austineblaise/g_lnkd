import React from 'react';

const Card = ({ imageUrl, title, description, isSpecial, customStyles }: any) => {
  const cardClasses = `bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-50 p-4 ${
    isSpecial
      ? 'bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600'
      : ''
  }`;

  return (
    <div className={`${cardClasses} ${customStyles} mt-[100px]`}>
      <img
        src={imageUrl}
        alt={title}
        className="w-[100px] h-[100px] mx-auto -mt-[80px]"
      />

      <h2 className="text-white text-4xl font-bold font-['Montserrat'] leading-[10.90px] text-center text-center mt-10">
        {title}
      </h2>
      <div className=" text-center text-white text-2xl font-semibold font-['Montserrat'] leading-[51.94px]">
        Runner
      </div>
      <p className="text-fuchsia-500 text-[20px] font-bold font-['Montserrat'] text-center mb-4">
        {description}
      </p>
    </div>
  );
};

export default Card;















// import React from 'react';

// const Card = ({ imageUrl, title, description, isSpecial, customStyles }: any) => {
//   const cardClasses = `bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-50 p-4  ${
//     isSpecial ? 'bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600' : ''
//   }`;

//   return (
//     <div className={`${cardClasses} ${customStyles} mt-[100px]`}>
//       <img
//         src={imageUrl}
//         alt={title}
//         className="w-[100px] h-[100px] mx-auto -mt-[80px]" 
//       />
     
//       <h2 className="text-white text-4xl font-bold font-['Montserrat'] leading-[10.90px] text-center text-center mt-10">{title}</h2>
//       <div className=" text-center text-white text-2xl font-semibold font-['Montserrat'] leading-[51.94px]">Runner</div>
//       <p className="text-fuchsia-500 text-[20px] font-bold font-['Montserrat'] text-center mb-4">{description}</p>
//     </div>
//   );
// };

// export default Card;
