import React from 'react';

const Search = (): JSX.Element => {
  return (
    <div className='container px-2 mx-auto flex justify-center mt-2'>
      <input type="text" name="" id="" placeholder='поиск..' className='m-2 px-4 py-2 rounded-xl border-2 border-gray-700  bg-gray-200 text-base font-light inline-flex text-orange-950 w-full sm:w-3/5 lg:w-2/5' />
    </div>
  );
};

export default Search;
