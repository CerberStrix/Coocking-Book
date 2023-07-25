import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Header from './components/Header';

import Footer from './components/Footer';
import Main from './Pages/Main';
import NotFound from './Pages/NotFound';

function App(): JSX.Element {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
