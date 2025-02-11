import React from 'react';
import Navbar from '../components/Navbar'
import img1 from '../assets/aboutHero.png'

const AboutHero = () => {
  return (
    <div 
    
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-b from-slate-800 to-slate-700"
      style={{ 
        backgroundImage: `url(${img1})`
      }}
    >
      appversal
      <Navbar />
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="pt-20 lg:pt-28 max-w-[600px]">
          <h1 className="text-[3.5rem] lg:text-[65px] font-normal leading-[1.1] text-[#FFFFFF] mb-6">
            We're changing App 
            <br />
            Marketing. Forever.
          </h1>
          
          <p className="text-[1.1rem] text-gray-300 leading-[1.6] mb-8 max-w-[520px] font-normal">
            Breaking all conventional marketing trends, AppVersal offers 
            advanced AI focused app marketing solutions. We help 
            engage, interact, soar to the heights of building your app's 
            core metrics in the most advanced way.
          </p>

          <button className="bg-[#D4F771] text-slate-900 px-8 py-2.5 rounded-full  mb-2
            text-sm font-medium uppercase tracking-wide hover:bg-[#b4e600] transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;