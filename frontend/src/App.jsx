import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import RatingsList from './pages/RatingsList'
import SubmitRating from './pages/SubmitRating'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ContactList from './pages/ContactList';
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ratings" element={<RatingsList />} />
        <Route path="/submit" element={<SubmitRating />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/contact" element={<ContactList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
