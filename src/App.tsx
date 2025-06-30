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
  Hammer,
  ExternalLink,
  ChevronDown,
  Play,
  Calendar,
  BookOpen
} from 'lucide-react';

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

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Krishnav Talukdar",
    role: "ML Developer",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Passionate Machine Learning Developer with expertise in AI/ML algorithms, data science, and building intelligent systems that solve real-world problems.",
    skills: ["Machine Learning", "Python", "TensorFlow", "Data Science", "PyTorch", "Computer Vision"],
    social: {
      github: "https://github.com/CYBERCONQUEROR",
      linkedin: "https://www.linkedin.com/in/krishnav-talukdar-360059264/"
    }
  },
  {
    id: 2,
    name: "Karan Singh Negi",
    role: "UI/UX Designer & Frontend Developer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Creative UI/UX Designer and Frontend Developer specializing in creating beautiful, user-centered digital experiences with modern web technologies.",
    skills: ["UI/UX Design", "React", "Figma", "Frontend Development", "TypeScript", "Tailwind CSS"],
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
    skills: ["Node.js", "Python", "Database Design", "API Development", "MongoDB", "PostgreSQL"],
    social: {
      github: "https://github.com/alexrivera",
      linkedin: "https://linkedin.com/in/alexrivera"
    }
  }
];

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive analytics platform with machine learning insights, real-time data visualization, and predictive modeling capabilities.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced filtering, payment integration, and inventory management system.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Unified social media management platform with analytics, scheduling, and multi-platform posting capabilities.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "Redis", "Social APIs", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Comprehensive LMS with course creation, progress tracking, interactive quizzes, and student analytics.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies and best practices for optimal performance.",
    features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Cross-Browser Compatible"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that provide exceptional user experiences and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive digital solutions to help your business thrive in the modern online landscape.",
    features: ["Market Analysis", "Brand Strategy", "Digital Marketing", "Growth Planning"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast websites optimized for speed, SEO, and exceptional user engagement.",
    features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Analytics Setup"]
  }
];

const achievements = [
  { 
    icon: Trophy, 
    number: "7+", 
    label: "Hackathons", 
    description: "Participated in major hackathons"
  },
  { 
    icon: Award, 
    number: "4", 
    label: "Wins", 
    description: "Championship victories achieved"
  },
  { 
    icon: Hammer, 
    number: "15+", 
    label: "Projects Built", 
    description: "Successful projects delivered"
  },
  { 
    icon: Users, 
    number: "100+", 
    label: "Happy Clients", 
    description: "Satisfied customers worldwide"
  }
];

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 group cursor-pointer transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Team CyberConqueror
                </span>
                <div className="text-xs text-gray-500 font-medium">Digital Innovators</div>
              </div>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Team', 'Projects', 'Services', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Team', 'Projects', 'Services', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
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
      <section id="home" className="pt-24 pb-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Welcome to Our Digital Universe</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Team CyberConqueror
              </span>
              <br />
              <span className="text-gray-800 text-3xl md:text-4xl">Digital Innovators</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're a passionate team of developers, designers, and innovators creating extraordinary digital experiences that drive success and inspire growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  Start Your Project
                  <Rocket className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                <span className="flex items-center">
                  View Our Work
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-gray-700 font-semibold mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {achievement.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 font-medium text-sm">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence
              <span className="block text-purple-600">Since 2025</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe that exceptional design and flawless execution can transform businesses and create meaningful connections with users.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We're dedicated to creating digital solutions that not only meet today's needs but anticipate tomorrow's challenges. Our team combines technical expertise with creative vision to deliver products that make a real difference.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  From concept to launch, we pour our passion into every project, ensuring that each solution is tailored to our clients' unique goals and challenges.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "Excellence", subtitle: "In every detail" },
                  { icon: Target, title: "Focus", subtitle: "On your goals" },
                  { icon: Star, title: "Quality", subtitle: "Above all else" },
                  { icon: Users, title: "Collaboration", subtitle: "Every step" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-600 mb-3" />
                      <div className="text-gray-900 font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.subtitle}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600 text-sm">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-gray-600 text-sm">Team Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-gray-600 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our
              <span className="block text-blue-600">Talented Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate professionals united by a shared vision of creating exceptional digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-2xl object-cover mx-auto ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-4">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-4">
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors transform hover:scale-110">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-green-600" />
              <span className="text-green-700 font-medium text-sm">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured
              <span className="block text-green-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our portfolio of successful projects that showcase our expertise and creativity
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'featured', label: 'Featured' },
                { key: 'recent', label: 'Recent' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 hover:bg-white transition-colors">
                          <ExternalLink className="w-3 h-3" />
                          <span>Live</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 hover:bg-white transition-colors">
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 font-medium text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We
              <span className="block text-purple-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to help your business succeed in the modern landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Work
              <span className="block text-blue-600">Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Us", info: "hello@teamcyberconqueror.com", color: "bg-blue-100 text-blue-600" },
                { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", color: "bg-green-100 text-green-600" },
                { icon: MapPin, title: "Visit Us", info: "San Francisco, CA", color: "bg-purple-100 text-purple-600" }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className={`w-16 h-16 ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-xl mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Fast turnaround times",
                    "Dedicated project management",
                    "Post-launch support",
                    "Competitive pricing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Team CyberConqueror</span>
                <div className="text-xs text-gray-400 font-medium">Digital Innovators</div>
              </div>
            </button>
            
            <div className="flex space-x-6">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2025 Team CyberConqueror. All rights reserved. 
              <span className="text-blue-400 ml-2">Made with ❤️ for the digital world</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;