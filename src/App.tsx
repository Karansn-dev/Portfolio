import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code,
  Palette,
  Globe,
  Zap,
  ArrowRight,
  Star,
  Award,
  Target,
  Sparkles,
  Rocket,
  Shield,
  Heart,
  Menu,
  X,
  Trophy,
  Hammer
} from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import Simple3DBackground from './components/Simple3DBackground';
// import ParticleField3D from './components/ParticleField3D';
// import GeometricShapes3D from './components/GeometricShapes3D';
// import InteractiveCard3D from './components/InteractiveCard3D';

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
    // LinkedIn profile photo - using a professional tech-focused image
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Passionate Machine Learning Developer with expertise in AI/ML algorithms, data science, and building intelligent systems that solve real-world problems.",
    skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
    social: {
      github: "https://github.com/CYBERCONQUEROR",
      linkedin: "https://www.linkedin.com/in/krishnav-talukdar-360059264/"
    }
  },
  {
    id: 2,
    name: "Karan Singh Negi",
    role: "UI/UX Designer & Frontend Developer",
    // LinkedIn profile photo - using a creative designer-focused image
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Creative UI/UX Designer and Frontend Developer specializing in creating beautiful, user-centered digital experiences with modern web technologies.",
    skills: ["UI/UX Design", "React", "Figma", "Frontend Development"],
    social: {
      github: "https://github.com/karansinghnegi",
      linkedin: "https://www.linkedin.com/in/karan-singh-negi-25816b338/"
    }
  },
  {
    id: 3,
    name: "Priya",
    role: "Backend Developer",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Experienced Backend Developer focused on building scalable server-side applications and robust API architectures for modern web solutions.",
    skills: ["Node.js", "Python", "Database Design", "API Development"],
    social: {
      github: "https://github.com/alexrivera",
      linkedin: "https://linkedin.com/in/alexrivera"
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
    icon: Globe,
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
    icon: Hammer, 
    number: "15+", 
    label: "Projects Built", 
    color: "text-yellow-400",
    bgColor: "from-yellow-400 to-orange-500",
    description: "Successful projects delivered"
  },
  { 
    icon: Users, 
    number: "100+", 
    label: "Happy Clients", 
    color: "text-green-400",
    bgColor: "from-green-400 to-emerald-500",
    description: "Satisfied customers worldwide"
  }
];

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* 3D Particle Field Background */}
      <Simple3DBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/30 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-md opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                    Team CyberConqueror
                  </span>
                  <div className="text-xs text-cyan-300/70 font-medium group-hover:text-cyan-300/90 transition-colors duration-300">Digital Innovators</div>
                </div>
              </button>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Team', 'Services', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="relative text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20">
              <div className="px-4 py-6 space-y-4">
                {['Home', 'About', 'Team', 'Services', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="block text-white/80 hover:text-cyan-400 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-20 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto text-center w-full">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
                  <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 font-medium">Welcome to the Digital Realm</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                          {achievement.description}
                        </div>
                        
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`h-1 bg-gradient-to-r ${achievement.bgColor} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3D Geometric Shapes */}
              <div className="mt-16 max-w-4xl mx-auto">
                {/* Placeholder for 3D Geometric Shapes */}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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

                <div className="flex flex-wrap gap-4">
                  {['Innovation', 'Victory', 'Creativity', 'Excellence'].map((value, index) => (
                    <span 
                      key={value}
                      className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 text-cyan-300 font-medium"
                    >
                      {value}
                    </span>
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
        <section id="team" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-medium text-sm">Our Team</span>
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    
                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className="w-32 h-32 mx-auto relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full rounded-2xl object-cover ring-4 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all duration-500"
                          />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-400/20 to-transparent group-hover:from-cyan-400/40 transition-all duration-500"></div>
                          
                          {/* Professional Badge */}
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center border-2 border-white/20">
                            <Star className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-cyan-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-cyan-300 text-center font-semibold mb-4 text-sm uppercase tracking-wider">
                        {member.role}
                      </p>
                      <p className="text-white/70 text-sm text-center mb-6 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {member.skills.slice(0, 2).map((skill) => (
                          <span key={skill} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-center space-x-4">
                        {member.social.github && (
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors transform hover:scale-110">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors transform hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            {/* 3D Interactive Cards */}
            <div className="mt-20">
              {/* Placeholder for Interactive Cards */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-medium text-sm">Get In Touch</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Let's Conquer
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>
              <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to dominate the digital realm? Let's embark on this cyber conquest together
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                {[
                  { icon: Mail, title: "Email Us", info: "hello@teamcyberconqueror.com", color: "from-cyan-500 to-blue-500" },
                  { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", color: "from-purple-500 to-pink-500" },
                  { icon: MapPin, title: "Visit Us", info: "San Francisco, CA", color: "from-green-500 to-emerald-500" }
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-6 group">
                      <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Your Email" 
                          className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Project Subject" 
                        className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Tell us about your cyber conquest vision..." 
                        rows={6}
                        className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>
                    <button className="group w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center">
                        Launch Conquest
                        <Rocket className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
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
    </div>
  );
}

export default App;