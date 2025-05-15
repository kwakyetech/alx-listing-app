import React from 'react'

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          ${price} / night
        </span>
      </div>
    </div>
  )
}

export default Card