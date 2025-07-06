
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-pink-500 bg-clip-text text-transparent mb-2">
              Imran
            </div>
            <p className="text-gray-400">Full-Stack Web Developer</p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Imran65545/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/imran-choudhary-a73398250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:cimran3@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400">
            <p>© 2024 Imran. Made with</p>
            <Heart size={16} className="text-pink-500" />
            <p>and lots of coffee.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;