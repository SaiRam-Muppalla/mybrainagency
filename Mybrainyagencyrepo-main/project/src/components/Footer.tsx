import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-8 w-8 text-red-500" />
              <div>
                <span className="text-xl font-bold text-white">The Brainy Agency</span>
                <div className="text-sm text-red-400">Smart AI Agents. Seamless Automations. Global Impact.</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The Brainy Agency is a global AI automation consultancy specializing in agentic AI and workflow automation, 
              headquartered in India with a worldwide focus.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="max-w-md">
                <NewsletterForm />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-red-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-red-500" />
                <span>+91 79958 02361</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-red-500" />
                <span>mahendra@thebrainy.agency</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Globe className="h-4 w-4 text-red-500" />
                <span>thebrainy.agency</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com/company/thebrainyagency/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 The Brainy Agency. All rights reserved. | 
            <span className="text-red-400"> Serving globally from Bangalore, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;