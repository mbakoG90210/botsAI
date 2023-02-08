import React from 'react';
import { BroswerRouter, Route, Routes, Link } from 'react-router-dom';
import { Home, CreatePost } from './pages';
import { Header, Footer } from './components';


const App = () => {


  return (
    <BroswerRouter>
      
      <Header className="w-full flex justify-between items-center sm:px-8 px-4 py-4 border-b border-b-primary-content">
        
      </Header>
    </BroswerRouter>
  )
}

export default App
