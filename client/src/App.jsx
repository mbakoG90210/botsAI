import React from "react";
import bot1 from "./assets/bot1.gif";
import logopic from "./assets/logopic.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />  
      <main className="sm:p-8 px-4 py-8 w-full bg-neutral-content min-h-[calc(100vh-73px)]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
