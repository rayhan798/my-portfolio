import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SupportFooter from "../components/SupportFooter";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToWhatsAppButton from "../components/ScrollToWhatsAppButton";


const MainLayout = () => {
  return (
    <>
      <Header />
    
    
      <main className="min-h-screen">
        <Outlet />
      </main>
      <ScrollToWhatsAppButton />
      <ScrollToTopButton />
      <ScrollProgress />
      <SupportFooter />
      <Footer />
    </>
  );
};

export default MainLayout;
