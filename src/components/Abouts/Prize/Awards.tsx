// pages/index.js or any other page
import React from 'react';
import Card from './Card';


const cardsData = [
  {
    imageUrl: '/assets/medal1.png',
    title: 'Card 1',
    description: 'Description for Card 1',
  },
  {
    imageUrl: '/assets/medal2.png',
    title: 'Card 2',
    description: 'Description for Card 2',
  },
  {
    imageUrl: '/assets/medal3.png',
    title: 'Card 3',
    description: 'Description for Card 3',
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
        />
      ))}
    </div>
  );
};

export default Awards;
