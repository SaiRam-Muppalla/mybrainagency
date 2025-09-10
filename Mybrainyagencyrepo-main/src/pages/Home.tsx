import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Lightbulb, Link as LinkIcon, BarChart3, CheckCircle, Rocket } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Faster Execution",
      description: "Zero manual bottlenecks with intelligent automation"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Custom AI Solutions",
      description: "Not generic chatbots - tailored AI agents for your business"
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Works with CRMs, Zapier, HubSpot, Airtable, Google Workspace"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Built for Scale",
      description: "Efficiency and future-readiness at enterprise level"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Red gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-3xl opacity-20 scale-150"></div>
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="text-red-500">AI Agents</span> & Automations
                <span className="block text-white">
                  That Transform Your Business
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
              From AI-powered assistants to full-scale workflow automation, 
              The Brainy Agency helps you achieve more with less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-200 flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>

            {/* Floating AI Illustration */}
            <div className="relative mx-auto w-64 h-64 mb-16">
              <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-red-500 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute inset-8 bg-red-500 rounded-full flex items-center justify-center">
                <Zap className="h-16 w-16 text-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-red-500">The Brainy Agency?</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We don't just build AI solutions - we transform how your business operates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-red-500 transition-colors">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border border-red-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join forward-thinking companies that are already leveraging AI to scale faster and work smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-xl"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/about"
                className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;