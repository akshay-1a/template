import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Wrapper({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Main content goes here */}
        {children}
      </div>
      <Footer />
    </main>
  );
}
