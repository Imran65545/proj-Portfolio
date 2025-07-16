import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
      style={{ minHeight: '100vh' }}
    >
      {/* 3D Spline Visual as background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {inView && (
          <Spline scene="https://prod.spline.design/EvFTY6Ozr84hTdhB/scene.splinecode" />
        )}
        {/* Overlay to cover Spline watermark */}
        <div className="absolute bottom-5 right-5 bg-black rounded-xl w-[140px] h-[44px] md:w-[140px] md:h-[44px] w-[110px] h-[36px] md:bottom-4 md:right-4 bottom-2 right-2 pointer-events-none z-10"></div>
      </div>

      {/* Overlay Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          <span>Hi, I'm </span>
          <span className="bg-gradient-to-r from-emerald-400 to-pink-500 bg-clip-text text-transparent">Imran</span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-8 drop-shadow-lg">
          <span className="typewriter">Full-Stack Web Developer</span>
        </div>
        <p className="text-lg sm:text-xl text-white mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 drop-shadow-lg font-medium">
          I craft beautiful, functional web experiences using modern technologies. 
          From responsive frontends to robust backends, I bring ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-900">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-pink-500 text-white font-semibold rounded-lg 
                     hover:from-emerald-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 
                     shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Imran65545/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform drop-shadow-lg"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/imran-choudhary-a73398250/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform drop-shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:cimran3@gmail.com"
              className="p-3 text-white hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform drop-shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-200 hover:text-emerald-400 
                   transition-colors duration-300 animate-bounce z-20"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;