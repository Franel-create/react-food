import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Category from "./pages/Category";
import Recipe from "./components/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='/meal/:id' element={<Recipe />} />
          <Route element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
