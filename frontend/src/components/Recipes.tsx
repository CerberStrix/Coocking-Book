import React from 'react';
import RecipeItem from './RecipeBlock';

const Recipes = (): JSX.Element => {
  return (
    <div className="container px-2 py-2 mx-auto">

      <div className="flex flex-wrap -m-4">
        <RecipeItem />

      </div>
    </div>
  );
};

export default Recipes;
