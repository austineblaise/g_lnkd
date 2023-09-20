import React from 'react';

const Card = ({ imageUrl, title, description }: any) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg relative `}>
      {/* Medals positioned slightly outside the content card */}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        {/* Place your medal icons or images here */}
        {/* Example:
        <img src="medal.png" alt="Medal 1" className="w-8 h-8 ml-2" />
        <img src="medal.png" alt="Medal 2" className="w-8 h-8 ml-2" />
        */}
      </div>
      <img src={imageUrl} alt={title} className="w-full  object-cover" />
      <div className="px-6 py-4 bg-red-500 relative z-0">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
