import React, { useState } from 'react';
import {
  ArrowLeft,
  Play,
  Image as ImageIcon,
  FileText,
  Code,
  Layout,
  Smartphone,
  Monitor,
  Globe2,
  ShieldCheck,
  Zap as Lightning,
  Clock,
  Calendar,
  Tag,
  ExternalLink,
  BarChart3,
  Database,
  Code2,
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Share2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Feature {
  title: string;
  description: string;
  icon: any;
}

interface TechStack {
  name: string;
  description: string;
  icon: any;
}

interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  color: string;
  link?: string;
  technologies: string[];
  videoUrl?: string;
  heroImage: string;
  completionDate: string;
  duration: string;
  category: string;
  highlights: string[];
  features: Feature[];
  techStack: TechStack[];
  gallery: string[];
}

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onShare: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose, onShare }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [showCopied, setShowCopied] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'features', label: 'Features', icon: Layout },
    { id: 'tech', label: 'Technology', icon: Code },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon }
  ];

  // Modern share handler for fallback
  const handleShareClick = async () => {
    try {
      await onShare();
      // Only show snackbar if fallback (clipboard) is used
      if (!navigator.share) {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }
    } catch {}
  };

  return (
    <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm z-50 overflow-y-auto`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        theme === 'dark' ? 'bg-gray-800/95' : 'bg-white/95'
      } backdrop-blur-sm shadow-lg`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}`}>
              <Code2 className="inline w-8 h-8 mr-2" />
              Mohammad Alarabiat
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors duration-300`}
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
      </header>

      <div className="min-h-screen max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Project Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onClose}
            className={`flex items-center space-x-2 ${
              theme === 'dark' 
                ? 'text-white hover:text-emerald-400' 
                : 'text-gray-900 hover:text-emerald-600'
            } transition-colors duration-300`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShareClick}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
                ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
            >
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-white transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Project</span>
              </a>
            )}
          </div>
        </div>

        {/* Snackbar/Toast for copied message */}
        {showCopied && (
          <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300
            ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
            Project link copied to clipboard!
          </div>
        )}

        {/* Project Content */}
        <div className={`bg-gradient-to-br ${
          theme === 'dark' 
            ? 'from-gray-800 to-gray-900' 
            : 'from-gray-50 to-gray-100'
        } rounded-2xl p-8 mb-8`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 bg-${project.color}-600 rounded-lg`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h1>
              </div>
              <p className={`text-lg mb-6 max-w-3xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`bg-${project.color}-600 text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={`flex space-x-4 mb-8 border-b ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 border-b-2 transition-colors duration-300 ${
                activeTab === tab.id
                  ? `border-${project.color}-500 text-${project.color}-600`
                  : theme === 'dark'
                    ? 'border-transparent text-white hover:text-emerald-400'
                    : 'border-transparent text-gray-700 hover:text-emerald-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`rounded-2xl p-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hero Image/Video */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-700">
                {project.videoUrl ? (
                  <>
                    {!isVideoPlaying ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="p-4 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors duration-300"
                        >
                          <Play className="w-8 h-8 text-white" />
                        </button>
                      </div>
                    ) : (
                      <iframe
                        src={project.videoUrl}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    )}
                  </>
                ) : (
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Project Overview
                  </h2>
                  <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.longDescription}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-emerald-400" />
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        Completed: {project.completionDate}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-emerald-400" />
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        Duration: {project.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Tag className="w-5 h-5 text-emerald-400" />
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        Category: {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Key Highlights
                  </h2>
                  <ul className="space-y-4">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="p-1 bg-emerald-600 rounded-full mt-1">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 hover:bg-opacity-75 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className={`p-3 bg-${project.color}-600 rounded-lg w-fit mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-6 hover:bg-opacity-75 transition-colors duration-300 ${
                      theme === 'dark' ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 bg-${project.color}-600 rounded-lg`}>
                        <tech.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {tech.name}
                      </h3>
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-xl overflow-hidden bg-gray-700 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="min-h-[200px]"></div>

      {/* Footer - Blue Gradient Glassmorphic Design */}
      <footer className="py-20" style={{ background: 'linear-gradient(135deg, #2453e3 0%, #1b2b7d 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Work Together</h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? Let's
              discuss how we can optimize your operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Card */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-10 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'mohammad@alarabyat.com', href: 'mailto:mohammad@alarabyat.com' },
                  { icon: Phone, label: 'Phone', value: '+962796437884', href: 'tel:+962796437884' },
                  { icon: MapPin, label: 'Location', value: 'Amman, Jordan' }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-white/10 rounded-lg">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">{contact.label}</div>
                      <div className="text-lg font-semibold text-white group-hover:underline">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex space-x-6 pt-10">
                {[
                  { icon: Github, href: 'https://github.com/conseder', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammad-arabiat-487612329/', label: 'LinkedIn' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-7 h-7 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Glassmorphic Form Card */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-white">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
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
};

export default ProjectDetails; 