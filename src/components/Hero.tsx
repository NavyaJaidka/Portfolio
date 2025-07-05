import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-yellow-800 relative overflow-hidden">
      <Header />
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/30 rounded-full animate-float animation-delay-2000 blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/25 rounded-full animate-float animation-delay-4000 blur-sm"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-yellow-200/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-yellow-500/30 rounded-full animate-float animation-delay-1000 blur-sm"></div>
        <div className="absolute top-80 right-1/3 w-12 h-12 bg-white/40 rounded-full animate-float animation-delay-3000 blur-sm"></div>
        <div className="absolute bottom-60 left-1/2 w-14 h-14 bg-yellow-300/35 rounded-full animate-float animation-delay-5000 blur-sm"></div>
        <div className="absolute top-32 left-1/2 w-8 h-8 bg-yellow-400/40 rounded-full animate-float animation-delay-1500 blur-sm"></div>
        <div className="absolute top-96 right-1/4 w-6 h-6 bg-white/50 rounded-full animate-float animation-delay-2500 blur-sm"></div>
        <div className="absolute bottom-32 left-3/4 w-10 h-10 bg-yellow-300/30 rounded-full animate-float animation-delay-3500 blur-sm"></div>
        <div className="absolute bottom-80 right-10 w-8 h-8 bg-yellow-200/45 rounded-full animate-float animation-delay-4500 blur-sm"></div>
        <div className="absolute top-24 right-1/3 w-4 h-4 bg-yellow-500/60 rounded-full animate-float animation-delay-500 blur-sm"></div>
        <div className="absolute top-72 left-1/4 w-5 h-5 bg-white/50 rounded-full animate-float animation-delay-6000 blur-sm"></div>
        <div className="absolute bottom-24 right-1/2 w-3 h-3 bg-yellow-400/55 rounded-full animate-float animation-delay-1000 blur-sm"></div>
      </div>

      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-60 h-60 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  Navya Jaidka
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-medium">
                Computer Science Undergraduate 
              </p>

              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  I am passionate about building meaningful, user-first digital solutions at the crossroads of 
                  <span className="font-semibold text-yellow-400"> AI/ML</span> and 
                  <span className="font-semibold text-white"> Web Development</span>. From responsive interfaces to intelligent systems, I strive to create 
                  <span className="font-semibold text-yellow-300"> impactful solutions</span> that address real-world challenges — from <span className="text-white"> healthcare </span> to <span className="text-yellow-400"> smart agriculture</span>. Currently pursuing my B.Tech at Bennett University, I blend creativity and logic to deliver technology that truly serves people.
              </p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/projects"
                  className="group bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300 transform"
                >
                  <span className="flex items-center justify-center">
                    Explore My Projects
                    <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 hover:shadow-2xl hover:shadow-yellow-400/25 hover:scale-105 transition-all duration-300 transform backdrop-blur-sm"
                >
                  More About Me
                </Link>
              </div>


            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Navya0618"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg text-gray-300 hover:text-white hover:bg-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/navya-jaidka-b31731249"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg text-gray-300 hover:text-yellow-400 hover:bg-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:navyajaidka3@gmail.com"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg text-gray-300 hover:text-yellow-400 hover:bg-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+918930118186"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg text-gray-300 hover:text-yellow-400 hover:bg-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
