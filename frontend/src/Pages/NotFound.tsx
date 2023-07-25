import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-28 sm:py-32 lg:px-8 sm:my-60">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Такой страницы пока нет </h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to='/' className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 hover:text-white">Вернуться обратно</Link>

        </div>
      </div>
    </main>
  );
};

export default NotFound;
