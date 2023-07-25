import React from 'react';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import Search from '../components/Search';

const Main = (): JSX.Element => {
  return (
    <main className='flex flex-col grow shrink-0'>
      <Search />
      <section className="text-gray-700 container px-2 mx-auto flex flex-col ">
        <h2 className='py-5 mx-2 text-2xl font-semibold'>Рецепты</h2>
        <Categories />
        <Recipes />
      </section>
    </main>
  );
};

export default Main;
