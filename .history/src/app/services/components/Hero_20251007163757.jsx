"use client"
import React from 'react';

    export default function Hero = () (
    <section
      className="relative bg-cover bg-center text-white py-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Empowering Brands with <br /> Impactful Digital Services
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          From strategy to execution, we deliver modern digital solutions that
          accelerate your business growth and brand impact.
        </p>
      </div>
    </section>
  );
