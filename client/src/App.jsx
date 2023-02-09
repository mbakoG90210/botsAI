import React from 'react';
import { BroswerRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages/index';
import { Header, Footer } from './components/index';


export const App = () => (

    <Router>
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <Footer />
    </Router>
);

