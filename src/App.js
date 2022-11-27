import React, { useContext } from 'react';
import Footer from './compnents/Footer';
import Navbar from './compnents/Navbar';
import Home from './Pages/Home';
import { AppStates } from './Store/States';
import {AnimatePresence} from 'framer-motion';

function App() {
  const {state}=useContext(AppStates);
  return (
    <>
    <AnimatePresence>{(state>216)?<Navbar/>:""}</AnimatePresence>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;