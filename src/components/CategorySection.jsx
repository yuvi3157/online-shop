import React from 'react';
import Mancategory from '../assets/Images/man.png';
import Womancategory from '../assets/Images/woman.png';
import Kidcategory from '../assets/Images/kid.png';

const Categories = [
  {
    title: 'Men',
    imageUrl: Mancategory,
  },
  {
    title: 'Women',
    imageUrl: Womancategory,
  },
  {
    title: 'Kids',
    imageUrl: Kidcategory,
  },
];

export const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer py-8">
    
     
        {Categories.map((category, index) => (
          <div key={index} className="relative h-64  transform transition duration-300 hover:scale-105 cursor-pointer">
            <img src={category.imageUrl} alt={category.title} className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute top-20 left-12">
            <p className='text-xl font-bold'>{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
          </div>
        ))}
   
    </div>
  );
};
