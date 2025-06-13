import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  TrendingUp,
  Book,
  Heart,
  Moon,
  Sun
} from 'lucide-react';
import GitHubActivity from './components/GitHubActivity';
import { supabase } from './lib/supabase';
import { useTheme } from './context/ThemeContext';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) throw error;

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later or contact me on my email.'
      });
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              <Code2 className="inline w-8 h-8 mr-2" />
              Mohammad Alarabiat
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['About', 'Skills', 'AI', 'Portfolio', 'GitHub', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
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
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Transforming Business Through Technology
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With a solid foundation in software engineering, I specialize in creating 
                sophisticated business portals and automation systems that streamline 
                operations and drive growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My expertise lies in understanding complex business requirements and 
                translating them into elegant, scalable software solutions that make 
                a real impact on productivity and efficiency.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg flex-1">
                  <Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Business Portals</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Custom enterprise solutions</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg flex-1">
                  <Settings className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Automation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Process optimization</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-800/30 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Education & Expertise</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Software Engineering Degree</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Business Process Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Enterprise Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">System Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Code2 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Custom Frameworks</h3>
              <div className="space-y-3">
                {['Custom Web Framework', 'Flask', 'Python', 'JavaScript', 'HTML/CSS'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-emerald-600 dark:text-emerald-400 mb-4">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend & Integration</h3>
              <div className="space-y-3">
                {['Google Sheets API', 'Google Drive API', 'OCR Processing', 'REST APIs', 'WebSocket'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-amber-600 dark:text-amber-400 mb-4">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Business Solutions</h3>
              <div className="space-y-3">
                {['SaaS Development', 'Process Automation', 'Data Analytics', 'System Integration', 'Project Management'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Expertise Section */}
      <section id="ai-expertise" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">AI & Automation</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Harnessing AI for Business Innovation
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Specializing in prompt engineering and AI system development to create 
                intelligent automation solutions that transform business operations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Prompt Engineering</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                      <span>Custom AI Workflows</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                      <span>Context Optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Integration</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                      <span>Business Automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                      <span>Process Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-800/30 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">AI Solutions</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Custom AI Assistants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Automated Workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Intelligent Data Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Business Process Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Portfolio</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Corporate Management Portal (SaaS)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Enterprise-grade SaaS solution offering comprehensive business management with project tracking, 
                contract management, and IoT integration. Features include multi-branch operations, staff management, 
                advanced analytics, custom reporting, and real-time IoT data visualization. Available as a subscription-based 
                service with tiered pricing plans.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Supabase', 'TypeScript', 'IoT', 'Analytics', 'Stripe'].map((tech) => (
                  <span key={tech} className="bg-blue-200 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Project & Contract Management</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>IoT & Analytics</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-emerald-600 rounded-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Invoice Approval System</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Advanced invoice processing system with OCR capabilities for supervisors. 
                Features automated data extraction, approval workflows, and integration with Google Drive for document management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Custom Framework', 'Flask', 'OCR', 'Google Sheets'].map((tech) => (
                  <span key={tech} className="bg-emerald-200 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <BarChart3 className="w-4 h-4" />
                  <span>Automated Processing</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Google Drive Integration</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-amber-600 rounded-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise Portal System</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Integrated portal system for suppliers, drivers, and supervisors with real-time tracking, 
                data visualization, and comprehensive reporting capabilities using Google Sheets for data management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Custom Framework', 'Flask', 'Google Sheets', 'Google Drive'].map((tech) => (
                  <span key={tech} className="bg-amber-200 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>Multi-role Access</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Settings className="w-4 h-4" />
                  <span>Google Integration</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <ExternalLink className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Form System</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Custom form management system with Flask backend for professional client data collection. 
                Features dynamic form generation, data validation, and seamless Google Sheets integration for data storage.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Custom Framework', 'Flask', 'Google Sheets', 'Google Drive'].map((tech) => (
                  <span key={tech} className="bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Dynamic Forms</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Google Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Under Progress Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Under Progress</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Exciting projects in development</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Coming Soon</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Web-Based POS System</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Cloud-based Point of Sale system requiring no software installation or dedicated hardware. 
                Features comprehensive inventory management, transaction processing, and advanced business analytics 
                with interactive visualizations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Web-Based', 'Cloud Storage', 'Real-time Analytics', 'Inventory Management'].map((tech) => (
                  <span key={tech} className="bg-blue-200 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-emerald-600 rounded-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Coming Soon</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Small Business Management App</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Integrated business management solution for small businesses. Features staff management, 
                transaction tracking, and seamless integration with existing POS systems. Includes advanced 
                data visualization for business insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['POS Integration', 'Staff Management', 'Data Analytics', 'Business Intelligence'].map((tech) => (
                  <span key={tech} className="bg-emerald-200 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-amber-600 rounded-lg">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-amber-600 dark:text-amber-400">Coming Soon</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Learning Platform</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                User-friendly platform for hosting and accessing online courses. Features intuitive course 
                management, progress tracking, and interactive learning tools. Designed for both course 
                creators and learners.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Course Management', 'Progress Tracking', 'Interactive Learning', 'Content Delivery'].map((tech) => (
                  <span key={tech} className="bg-amber-200 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400">Coming Soon</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Medical Connection Platform</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Comprehensive platform connecting patients with healthcare providers. Features full clinic 
                management capabilities, appointment scheduling, patient records, and secure communication 
                channels.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Clinic Management', 'Patient Portal', 'Appointment System', 'Medical Records'].map((tech) => (
                  <span key={tech} className="bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GitHubActivity />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Services</h2>
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
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`
                  ${service.color === 'red' ? 'text-red-600 dark:text-red-400' : ''}
                  ${service.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' : ''}
                  ${service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                  ${service.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' : ''}
                  ${service.color === 'amber' ? 'text-amber-600 dark:text-amber-400' : ''}
                  ${service.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : ''}
                  mb-4
                `}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.description}</p>
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
                { icon: Mail, label: 'Email', value: 'mohammad@alarabyat.com', href: 'mailto:mohammad@alarabyat.com' },
                { icon: Phone, label: 'Phone', value: '+962796437884', href: 'tel:+962796437884' },
                { icon: MapPin, label: 'Location', value: 'Amman, Jordan' }
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
                  { icon: Github, href: 'https://github.com/conseder', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammad-arabiat-487612329/', label: 'LinkedIn' }
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
              {formStatus.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-emerald-500/20 text-emerald-200' : 'bg-red-500/20 text-red-200'
                }`}>
                  {formStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Your Message"
                    required
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
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-8 h-8 mr-2 text-emerald-400" />
            <span className="text-2xl font-bold">Mohammad Alarabiat</span>
          </div>
          <p className="text-gray-400 mb-6">
            Transforming businesses through innovative software solutions
          </p>
          
        </div>
      </footer>
    </div>
  );
}

export default App;