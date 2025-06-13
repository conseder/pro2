import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Building2,
  Users,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">
              <Code2 className="inline w-8 h-8 mr-2" />
              DevPortfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Software Engineer
              <span className="block text-emerald-400">& Business Innovator</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Specializing in business portals and automation solutions that transform 
              how companies operate and scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Transforming Business Through Technology
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a solid foundation in software engineering, I specialize in creating 
                sophisticated business portals and automation systems that streamline 
                operations and drive growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise lies in understanding complex business requirements and 
                translating them into elegant, scalable software solutions that make 
                a real impact on productivity and efficiency.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-50 p-4 rounded-lg flex-1">
                  <Building2 className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Business Portals</h4>
                  <p className="text-sm text-gray-600">Custom enterprise solutions</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg flex-1">
                  <Settings className="w-8 h-8 text-emerald-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Automation</h4>
                  <p className="text-sm text-gray-600">Process optimization</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Education & Expertise</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Software Engineering Degree</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Business Process Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Enterprise Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">System Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 mb-4">
                <Code2 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <div className="space-y-3">
                {['React', 'TypeScript', 'Vue.js', 'Angular', 'Tailwind CSS'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-emerald-600 mb-4">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <div className="space-y-3">
                {['Node.js', 'Python', 'C#/.NET', 'Java', 'PostgreSQL'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-amber-600 mb-4">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Tools</h3>
              <div className="space-y-3">
                {['Process Mining', 'Workflow Design', 'API Integration', 'Cloud Platforms', 'DevOps'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Portal Suite</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Comprehensive business portal integrating HR, Finance, and Operations modules 
                with real-time analytics and automated workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Node.js', 'PostgreSQL', 'Redis'].map((tech) => (
                  <span key={tech} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>500+ Users</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>40% Efficiency Gain</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-emerald-600 rounded-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation Platform</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                AI-powered workflow automation system that eliminates manual processes 
                and integrates with existing business tools seamlessly.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'FastAPI', 'Docker', 'Azure'].map((tech) => (
                  <span key={tech} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <BarChart3 className="w-4 h-4" />
                  <span>80% Time Savings</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-amber-600 rounded-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Integration Hub</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Centralized data management system connecting multiple business applications 
                with real-time synchronization and advanced reporting capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['C#', 'SQL Server', 'Apache Kafka', 'Power BI'].map((tech) => (
                  <span key={tech} className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>Multi-Platform</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Settings className="w-4 h-4" />
                  <span>Auto-Scaling</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Executive-level business intelligence platform with predictive analytics, 
                custom KPI tracking, and automated report generation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Vue.js', 'D3.js', 'MongoDB', 'AWS'].map((tech) => (
                  <span key={tech} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Real-time Data</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Executive Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Business Portal Development',
                description: 'Custom enterprise portals that unify your business operations and improve team collaboration.',
                color: 'blue'
              },
              {
                icon: Settings,
                title: 'Process Automation',
                description: 'Streamline workflows and eliminate manual tasks with intelligent automation solutions.',
                color: 'emerald'
              },
              {
                icon: Database,
                title: 'System Integration',
                description: 'Connect disparate systems and ensure seamless data flow across your organization.',
                color: 'amber'
              },
              {
                icon: BarChart3,
                title: 'Business Intelligence',
                description: 'Transform data into actionable insights with custom analytics and reporting platforms.',
                color: 'purple'
              },
              {
                icon: Shield,
                title: 'Security & Compliance',
                description: 'Implement robust security measures and ensure regulatory compliance in all solutions.',
                color: 'red'
              },
              {
                icon: Users,
                title: 'Consulting & Strategy',
                description: 'Strategic guidance on digital transformation and technology roadmap planning.',
                color: 'indigo'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`text-${service.color}-600 mb-4`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? 
              Let's discuss how we can optimize your operations and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              {[
                { icon: Mail, label: 'Email', value: 'hello@developer.com', href: 'mailto:hello@developer.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-blue-800 rounded-lg group-hover:bg-emerald-600 transition-colors duration-300">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">{contact.label}</div>
                    <div className="text-lg font-semibold">{contact.value}</div>
                  </div>
                </a>
              ))}
              
              <div className="flex space-x-4 pt-8">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-800 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-8 h-8 mr-2 text-emerald-400" />
            <span className="text-2xl font-bold">DevPortfolio</span>
          </div>
          <p className="text-gray-400 mb-6">
            Transforming businesses through innovative software solutions
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              &copy; 2025 DevPortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;