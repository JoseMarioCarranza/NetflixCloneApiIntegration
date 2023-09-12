import React from 'react'
import NavComponet from '../nav/Nav.jsx';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer.jsx';
import './Home.css'

export default function Home() {
  return (
    <>
      <NavComponet />
      <Outlet />
      <Footer />
    </>
  )
}