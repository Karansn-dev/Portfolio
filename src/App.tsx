import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code,
  Palette,
  Zap,
  ArrowRight,
  Star,
  Award,
  Target,
  Rocket,
  Heart,
  Menu,
  X,
  Trophy,
  TrendingUp,
  Blocks,
  Smile,
  BadgeCheck,
  TerminalSquare,
  Send,
  Instagram
} from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollFloat from './components/ScrollFloat';
import Dock from './components/Dock';
import AchievementCard from './components/AchievementCard';
import ShinyText from './components/ShinyText';
import { motion, AnimatePresence, easeInOut } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Krishnav Talukdar",
    role: "ML Developer",
    image: "/krishnav.jpeg",
    bio: "Passionate Machine Learning Developer with expertise in AI/ML algorithms, data science, and building intelligent systems that solve real-world problems.",
    skills: ["ML", "Python", "TensorFlow", "Data Science"],
    social: {
      github: "https://github.com/CYBERCONQUEROR",
      linkedin: "https://www.linkedin.com/in/krishnav-talukdar-360059264/"
    }
  },
  {
    id: 2,
    name: "Karan Singh Negi",
    role: "UI/UX Designer & Frontend Developer",
    image: "/karan.jpeg",
    bio: "Creative UI/UX Designer and Frontend Developer specializing in creating beautiful, user-centered digital experiences with modern web technologies.",
    skills: ["UI/UX Design", "React", "Figma", "Frontend Development"],
    social: {
      github: "https://github.com/karansinghnegi",
      linkedin: "https://www.linkedin.com/in/karan-singh-negi-25816b338/"
    }
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Backend Developer",
    image: "priya singh.jpeg",
    bio: "Experienced Backend Developer focused on building scalable server-side applications and robust API architectures for modern web solutions.",
    skills: ["Node.js", "Python", "Database Design", "API Development"],
    social: {
      github: "https://github.com/Priya-995",
      linkedin: "https://www.linkedin.com/in/priya-singh-bb4a09303/"
    }
  }
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies and best practices.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that provide exceptional user experiences.",
    color: "from-pink-400 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description: "Comprehensive digital solutions to help your business thrive online.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast websites optimized for speed, SEO, and user engagement.",
    color: "from-yellow-400 to-orange-500"
  }
];

const achievements = [
  { 
    icon: Trophy, 
    number: "7+", 
    label: "Hackathons", 
    color: "text-cyan-400",
    bgColor: "from-cyan-400 to-blue-500",
    description: "Participated in major hackathons"
  },
  { 
    icon: Award, 
    number: "4", 
    label: "Wins", 
    color: "text-pink-400",
    bgColor: "from-pink-400 to-purple-500",
    description: "Championship victories achieved"
  },
  { 
    icon: Blocks, 
    number: "15+", 
    label: "Projects Built", 
    color: "text-yellow-400",
    bgColor: "from-yellow-400 to-orange-500",
    description: "Successful projects delivered"
  },
  { 
    icon: Smile, 
    number: "100+", 
    label: "Happy Clients", 
    color: "text-green-400",
    bgColor: "from-green-400 to-emerald-500",
    description: "Satisfied customers worldwide"
  }
];

// Custom hook for reveal-on-scroll
function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // For each section, use the hook
  const [heroRef, heroVisible] = useRevealOnScroll();
  const [aboutRef, aboutVisible] = useRevealOnScroll();
  const [teamRef, teamVisible] = useRevealOnScroll();
  const [servicesRef, servicesVisible] = useRevealOnScroll();
  const [contactRef, contactVisible] = useRevealOnScroll();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo3.jpg"
              alt="Team CyberConqueror Logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent select-none">CyberConqueror</span>
          </div>
          <nav className="hidden md:flex gap-8 text-white/80 font-medium text-base">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          {/* Hamburger button for mobile */}
          <button
            className="flex flex-col justify-center items-center w-12 h-12 md:hidden focus:outline-none transition-all duration-300 hover:scale-105 ml-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <motion.span
              className="block w-5 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded mb-1 shadow-lg shadow-pink-400/40 border border-white"
              animate={mobileMenuOpen ? "openTop" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0, opacity: 1, transition: { duration: 0.18, ease: easeInOut } },
                openTop: { rotate: 45, y: 8, transition: { duration: 0.18, ease: easeInOut } },
              }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded mb-1 shadow-lg shadow-pink-400/40 border border-white"
              animate={mobileMenuOpen ? "openMid" : "closed"}
              variants={{
                closed: { opacity: 1, transition: { duration: 0.18, ease: easeInOut } },
                openMid: { opacity: 0, transition: { duration: 0.12, ease: easeInOut } },
              }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded shadow-lg shadow-pink-400/40 border border-white"
              animate={mobileMenuOpen ? "openBot" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0, opacity: 1, transition: { duration: 0.18, ease: easeInOut } },
                openBot: { rotate: -45, y: -8, transition: { duration: 0.18, ease: easeInOut } },
              }}
            />
          </button>
        </div>
      </header>
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          ref={heroRef}
          className={`pt-16 pb-10 px-2 sm:pt-24 sm:pb-20 sm:px-4 min-h-[70vh] flex items-center transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto text-center w-full">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:brightness-125 hover:scale-105 cursor-pointer">
                  Team CyberConqueror
                </span>
                <br />
                <span className="text-white text-4xl md:text-5xl">Digital Innovators</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                A passionate team of cyber warriors, developers, and innovators conquering the digital realm with extraordinary experiences that transcend boundaries
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <button className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Launch Your Vision
                    <Rocket className="inline-block w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group border-2 border-cyan-400/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center">
                    Explore Our Universe
                    <ArrowRight className="inline-block w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Enhanced Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index}
                      className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {/* Animated border */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-sm`}></div>
                      
                      <div className="relative z-10">
                        <div className="mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${achievement.bgColor} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 mx-auto`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        
                        <div className={`text-3xl font-bold ${achievement.color} mb-2 group-hover:text-white transition-colors duration-300`}>
                          {achievement.number}
                        </div>
                        <div className="text-white font-semibold text-lg mb-2">
                          {achievement.label}
                        </div>
                        <div className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                          {Array.isArray(achievement.description) ? (
                            <ul className="list-disc pl-5 space-y-1">
                              {achievement.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            achievement.description
                          )}
                        </div>
                        
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`h-1 bg-gradient-to-r ${achievement.bgColor} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className={`py-10 px-2 sm:py-20 sm:px-4 transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                    <Heart className="w-4 h-4 text-pink-400" />
                    <span className="text-purple-300 font-medium text-sm">Our Story</span>
                  </div>
                  <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                    Conquering Excellence
                    <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Since 2025
                    </span>
                  </h2>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed">
                  We're Team CyberConqueror - a dedicated team of digital warriors who believe that great design and flawless execution can transform businesses and delight users. Our mission is to conquer the digital realm with innovative solutions and remarkable digital products.
                </p>
                
                <p className="text-white/70 leading-relaxed">
                  From concept to launch, we pour our passion into every pixel, every line of code, and every user interaction. We don't just build websites and apps – we create digital experiences that inspire, engage, and conquer the competition.
                </p>

                {/* Mobile: 2x2 grid */}
                <div className="grid grid-cols-2 gap-2 mt-4 items-stretch justify-center text-center w-full max-w-md mx-auto overflow-visible md:hidden">
                  {['Innovation', 'Victory', 'Creativity', 'Excellence'].map((value) => (
                    <ShinyText
                      key={value}
                      text={value}
                      speed={4}
                      className="text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2 rounded-full flex-shrink-0 text-center min-h-[2.5rem]"
                    />
                  ))}
                </div>
                {/* Desktop: horizontal flex row */}
                <div className="hidden md:flex flex-row gap-8 mt-4 items-center justify-between text-center w-full overflow-visible">
                  {['Innovation', 'Victory', 'Creativity', 'Excellence'].map((value) => (
                    <ShinyText
                      key={value}
                      text={value}
                      speed={4}
                      className="text-xl lg:text-2xl px-6 py-3 rounded-full flex-shrink-0 text-center min-h-[2.5rem] lg:min-h-[3rem]"
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Award, title: "Excellence", subtitle: "In every detail", color: "text-purple-400" },
                      { icon: Target, title: "Focus", subtitle: "On your goals", color: "text-pink-400" },
                      { icon: Star, title: "Quality", subtitle: "Above all else", color: "text-yellow-400" },
                      { icon: Users, title: "Team", subtitle: "Collaboration", color: "text-cyan-400" }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                          <Icon className={`w-10 h-10 ${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                          <div className="text-white font-bold text-lg mb-1">{item.title}</div>
                          <div className="text-white/60 text-sm">{item.subtitle}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          ref={teamRef}
          className={`py-10 px-2 sm:py-20 sm:px-4 transition-all duration-700 ${
            teamVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-medium text-sm">
                  Our Team
                </span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Meet Our
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Teammates
                </span>
              </h2>
              <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
                Elite digital conquerors united by a shared passion for creating extraordinary digital experiences that dominate the digital battlefield
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 justify-center">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`group relative transition-all duration-500 transform hover:-translate-y-4 h-full cursor-pointer ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 overflow-hidden transition-all duration-500 group-hover:border-teal-400/50 group-hover:shadow-2xl group-hover:shadow-teal-500/30 h-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 text-center flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="relative mb-6 inline-block">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-slate-700/50 transition-all duration-500 group-hover:ring-teal-400 mx-auto"
                          />
                          <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center border-2 border-slate-800 badge-pulse">
                            <BadgeCheck className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-1 font-['Poppins',_sans-serif]">
                          {member.name}
                        </h3>
                        <p className="text-teal-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                          {member.role}
                        </p>
                        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {member.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="relative px-4 py-1 rounded-full bg-white/10 border border-cyan-400/30 text-cyan-100 font-semibold text-xs shadow-md backdrop-blur-md transition-all duration-300 cursor-pointer select-none
                                hover:bg-gradient-to-r hover:from-cyan-400/80 hover:to-purple-500/80 hover:text-white hover:shadow-[0_0_12px_2px_rgba(56,189,248,0.25)]"
                              style={{ boxShadow: '0 1.5px 4px 0 rgba(168,85,247,0.08)' }}
                            >
                              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/40 to-transparent opacity-30 blur-sm pointer-events-none"></span>
                              <span className="relative z-10">{skill}</span>
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center space-x-5">
                          {member.social.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white transition-colors duration-300 social-icon-glow"
                            >
                              <Github className="w-6 h-6" />
                            </a>
                          )}
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white transition-colors duration-300 social-icon-glow"
                            >
                              <Linkedin className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          ref={servicesRef}
          className={`py-10 px-2 sm:py-20 sm:px-4 transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 font-medium text-sm">Our Services</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                What We
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Conquer
                </span>
              </h2>
              <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
                We offer comprehensive digital solutions to help your business dominate in the modern cyber landscape
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;
                return (
                  <div 
                    key={index}
                    className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                      isActive 
                        ? 'border-purple-400/50 bg-white/10 shadow-2xl shadow-purple-500/20' 
                        : 'border-white/10 hover:bg-white/10 hover:border-purple-400/30'
                    }`}
                  >
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-8">
                        <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                        {service.description}
                      </p>
                      
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Achievements Section */}
        <section id="achievements" className="py-10 px-2 sm:py-20 sm:px-4 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center float-animate">
                Our Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <AchievementCard
                title="Navonmesh: AIdea Challenge 2025"
                event="Innovation Hub, Dr A.P.J. Abdul Kalam Technical University, Lucknow."
                date="9th-10th June 2025"
                image="achievement 1.jpg"
                prize="₹21,000 Cash Prize"
                participants="280+"
                description={[
                  "Honoured by Hon'ble Governor Smt. Anandiben Patel.",
                  "Developed in a 24-hour hackathon during the Grand Finale.",
                  "Real-time ISL translator converting gestures to text & speech.",
                  "Built with Mediapipe, TensorFlow, and Python.",
                  "Designed for Indian deaf and mute community."
                ]}
              />
              <AchievementCard
                title="1ST PLACE – TECHTRIX 2025"
                event="ITS Engineering College, Greater Noida"
                date="13th-14th May 2025"
                image="achievement 2.jpg"
                prize="₹20,000 Cash Prize"
                participants="100+"
                description={[
                  "Built in a 24-hour hackathon to public complaint management.",
                  "Flutter, Firebase, Cloudinary, Google Gemini API.",
                  "Enabled Ai issue detection from (image/voice/text).",
                  "Integrated auto-location and seamleass complaint workflow."
                ]}
              />
              <AchievementCard
                title="2ND PLACE – ACE TECH 2025"
                event="RKGIT Engineering College, Ghaziabad"
                date="16th May 2025"
                image="achievement 3.jpg"
                prize=""
                participants=""
                description={[
                  "We built an AI tool translating ISL gestures to speech/text.",
                  "It helps India's deaf-mute community communicate more easily.",
                  "We used machine learning for accurate, real-time gesture recognition.",
                  "Our goal was to make services inclusive and accessible for all."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center float-animate">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Project 1 */}
              <ProjectCard
                title="Real-Time ISL Translator"
                description="An AI-powered real-time sign language translator Specially for Indian People.
                Uses computer vision and deep learning to recognize gestures and converts signs into text and speech instantly.
                Ensures privacy and security."
                technologies={[
                  'Python','OpenCV','YOLOv8','CNN','React','Mediapipe'
                ]}
                imageAlt="Smart City Dashboard Screenshot"
                github="https://github.com/CYBERCONQUEROR/ISHARA"
              />
              {/* Project 2 */}
              <ProjectCard
                title="ESP8266 RFID Access Control System "
                description="A smart, Wi-Fi-enabled door access system . Authorized users can unlock the door by scanning an RFID card or using a secure web interface. All access attempts are logged and notified via Telegram."
                technologies={[
                  'ESP8266','RC522 RFID Reader','L298N','Solenoid Lock',
                ]}
                imageAlt="ISRO Space App Screenshot"
                github="https://github.com/CYBERCONQUEROR/ESP8266-RFID-Telegram-Door-Lock-main"
              />
              {/* Project 3 */}
              <ProjectCard
                title="Student Data Viewer App"
                description=" It is a simple and efficient desktop app built with Kivy and Python, designed to view student data from a CSV file in an interactive and user-friendly way. This project is ideal for managing small student databases where real-time access or filtering is needed."
                technologies={[
                 'Python','Kivy','Pandas','Custom fonts',' DLL files',
                ]}
                imageAlt="HealthAI Chatbot Screenshot"
                github="https://github.com/CYBERCONQUEROR/Student-Data-Viewr-App"
              />
              {/* Project 4 */}
              <ProjectCard
                title="voice Auction"
                description="A real-time auction system that allows users to bid live via phone calls while monitoring updates on a web interface. It merges voice bidding with web technology for an interactive experience, featuring live bid tracking and real-time updates."
                technologies={[
                'Type Script','HTML','CSS', 'WebRTC', 'Firebase',
                ]}
                imageAlt="HealthAI Chatbot Screenshot"
                github="https://github.com/Karansn-dev/voice-auction-landing"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className={`py-20 pb-32 px-4 transition-all duration-700 ${
            contactVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-medium text-sm">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-[1.15]">
                Let's Conquer
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>
              <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to dominate the digital realm? Let's embark on this cyber conquest together
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    info: 'hello@teamcyberconqueror.com',
                    color: 'from-cyan-500 to-blue-500',
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    info: '+1 (555) 123-4567',
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    icon: Instagram,
                    title: 'Instagram',
                    info: '@_cyberconqueror_',
                    color: 'from-pink-500 to-yellow-500',
                  },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-6 group"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-300 transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-white/70 text-lg group-hover:text-white/90 transition-colors">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

                {/* White Glassmorphism Form Card */}
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl shadow-black/20">
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name Input */}
                      <div className="input-wrapper">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input-underlined"
                        />
                        <span className="input-focus-line"></span>
                      </div>
                      {/* Email Input */}
                      <div className="input-wrapper">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="input-underlined"
                        />
                        <span className="input-focus-line"></span>
                      </div>
                    </div>
                    {/* Subject Input */}
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="Project Subject"
                        className="input-underlined"
                      />
                      <span className="input-focus-line"></span>
                    </div>
                    {/* Message Textarea */}
                    <div className="input-wrapper">
                      <textarea
                        placeholder="Tell us about your cyber conquest vision..."
                        className="input-underlined"
                      />
                      <span className="input-focus-line"></span>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-gradient-to-r from-blue-700 via-teal-600 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300 flex items-center justify-center group">
                      Send Message
                      <Send className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                    <img
                      src="/logo3.jpg"
                      alt="Team CyberConqueror Logo"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow animate-pulse"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-md opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                    Team CyberConqueror
                  </span>
                  <div className="text-xs text-cyan-300/70 font-medium group-hover:text-cyan-300/90 transition-colors duration-300">Digital Innovators</div>
                </div>
              </button>
              
              <div className="flex space-x-6">
                {[Github, Linkedin].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-white/60 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/60">
                © 2025 Team CyberConqueror. All rights reserved. 
                <span className="text-cyan-400 ml-2">Made with ❤️ in the digital realm</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* Hamburger Button for mobile, in header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Team", href: "#team" },
              { label: "Services", href: "#services" },
              { label: "Achievements", href: "#achievements" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-semibold text-slate-800 hover:text-purple-600 transition-colors duration-200 px-6 py-2 rounded-xl bg-white/40 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 shadow-md backdrop-blur-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ProjectCard component (to be placed above App or in a separate file)
interface ProjectCardProps {
  title: string;
  description: string | string[] | React.ReactNode;
  technologies: string[];
  imageAlt: string;
  github: string;
  showImage?: boolean;
}

function ProjectCard({ title, description, technologies, imageAlt, github, showImage = false }: ProjectCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!cardRef.current) return;
    // GSAP animation: fade-in and slide-up on scroll
    if (window.gsap && 'ScrollTrigger' in window) {
      window.gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={cardRef}
      className="relative bg-[rgba(0,0,0,0.18)] backdrop-blur-md border border-white/10 rounded-[20px] shadow-lg p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out hover:scale-[1.045] hover:shadow-[0_0_32px_8px_rgba(56,189,248,0.18)]"
      style={{}}
    >
      {showImage && (
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-cyan-700/30 to-purple-700/30 rounded-2xl flex items-center justify-center overflow-hidden border border-cyan-500/20 mr-0 md:mr-8 mb-6 md:mb-0">
          {/* TODO: Insert project image here */}
          <img
            src="/project-placeholder.png"
            alt={imageAlt}
            className="object-cover w-full h-full rounded-2xl opacity-60"
          />
        </div>
      )}
      <div className="flex-1 w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
        <div className="text-white/80 text-base md:text-lg mb-4">
          {Array.isArray(description) ? (
            <ul className="list-disc pl-5 space-y-1">
              {description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : typeof description === 'string' ? (
            <span style={{ whiteSpace: 'pre-line' }}>{description}</span>
          ) : (
            description
          )}
        </div>
        <div>
          <div className="text-cyan-400 font-semibold mb-2">Technologies Used</div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="relative px-4 py-1 rounded-full bg-white/10 border border-cyan-400/30 text-cyan-100 font-semibold text-xs shadow-md backdrop-blur-md transition-all duration-300 cursor-pointer select-none
                  hover:bg-gradient-to-r hover:from-cyan-400/80 hover:to-purple-500/80 hover:text-white hover:shadow-[0_0_12px_2px_rgba(56,189,248,0.25)]"
                style={{ boxShadow: '0 1.5px 4px 0 rgba(168,85,247,0.08)' }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/40 to-transparent opacity-30 blur-sm pointer-events-none"></span>
                <span className="relative z-10">{tech}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-medium text-sm">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// Mini project card component
function ProjectMiniCard({ title, description, github }: { title: string; description: string | React.ReactNode; github: string }) {
  return (
    <div className="bg-[rgba(0,0,0,0.18)] backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-4 flex flex-col gap-2 min-w-[220px] max-w-xs transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/30">
      <div className="font-semibold text-white text-base mb-1">{title}</div>
      <div className="text-gray-300 text-sm mb-2">{description}</div>
      <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-medium text-sm mt-auto">
        <Github className="w-4 h-4" /> GitHub
      </a>
    </div>
  );
}

export default App;