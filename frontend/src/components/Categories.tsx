import React from 'react';

const Categories = (): JSX.Element => {
  return (
    <div className='m-2 mb-5'>
      <ul className='flex overflow-auto'>
        <li className='px-3 py-2 bg-yellow-300 mr-2 rounded-xl'>Все</li>
        <li className='px-3 py-2  mr-2 rounded-xl bg-slate-700 text-white'>Мучное</li>
        <li className='px-3 py-2 bg-yellow-300 mr-2 rounded-xl'>Сладкое</li>
        <li className='px-3 py-2 bg-yellow-300 mr-2 rounded-xl'>Жаренное</li>
        <li className='px-3 py-2 bg-yellow-300 mr-2 rounded-xl'>Праздничный</li>
      </ul>
    </div>
  );
};

export default Categories;
