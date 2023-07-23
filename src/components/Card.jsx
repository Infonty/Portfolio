
import React from 'react';

const VerticalCard = ({ imageUrl, link,title,description,college }) => {
  return (
    <a href={link} target='_blank' className="block bg-gray-300 hover:bg-gray-400 rounded-lg overflow-hidden  mb-4">
      <div className="w-30 h-full bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="p-4">
        <h2 className="text-xl text-black font-semibold">{title}</h2>
        <h1 className='text-lg text-blue-500 font-semibold'>{college} </h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default VerticalCard;
