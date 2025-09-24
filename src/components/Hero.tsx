import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
   
    const link = document.createElement('a');
    link.href = '/Afifa_Husna_Resume_Updated_.pdf'; 
    link.download = 'Afifa_Husna_Resume_Updated_.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-500 rounded-full blur-3xl opacity-15 animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-violet-400 rounded-full blur-2xl opacity-25 animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent animate-fade-in">
          Hi, I'm Afifa Husna 
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
          A Creative Developer Turning Ideas into Interactive Experiences
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto animate-fade-in-delay-2">
          Welcome to my universe of creativity. I specialize in crafting beautiful, functional digital experiences using modern web and mobile technologies. From eye-catching UIs to full-stack applications, I bring a touch of innovation and a lot of passion into everything I build.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Explore My Work
          </button>
          <button
            onClick={downloadResume}
            className="border-2 border-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full text-purple-400 font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>

        <div 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;