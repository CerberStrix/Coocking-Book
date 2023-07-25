import React from 'react';

const Header = (): JSX.Element => {
  return (
    <header className="text-gray-900 body-font bg-yellow-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">

        <a className="flex lg:w-3/5 title-font font-bold items-center text-gray-800 lg:items-center lg:justify-start mb-4 md:mb-0">
          <img src="/assets/cooking.png" alt="" />
          <span className="ml-3 text-xl text-gray-700 font-bold">Cooking Book</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end lg:ml-0 space-x-1">
          <button className="inline-flex text-gray-900 items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl text-base font-light mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <span className='ml-1'>Войти</span>

          </button>
          <button className="inline-flex text-gray-900 items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl text-base font-light mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            <span className='ml-1'>Зарегистрироваться</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
