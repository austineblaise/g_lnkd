// Awards.js
import React from 'react';
import Card from './Card';

const cardsData = [
  {
    imageUrl: '/assets/medal1.png',
    title: '2nd',
    description: 'N300,000',
  },
  {
    imageUrl: '/assets/medal2.png',
    title: '1st',
    description: 'N400,000',
    customStyles: 'scale-125  mr-4 ml-4 text-center',
  },
  {
    imageUrl: '/assets/medal3.png',
    title: '3rd',
    description: 'N150,000',
  },
];

const Awards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          customStyles={card.customStyles ? card.customStyles : ''} 
          isSpecial={card.customStyles ? true : false} 
        />
      ))}
    </div>
  );
};

export default Awards;
