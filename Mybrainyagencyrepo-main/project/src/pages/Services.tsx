import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Cog, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "AI Agentic Systems",
      description: "GPT-powered AI agents for customer support, knowledge retrieval, lead qualification, and operations.",
      features: [
        "Custom AI agents tailored to your business",
        "Multi-modal capabilities (text, voice, vision)",
        "Integration with existing systems",
        "24/7 autonomous operation",
        "Advanced reasoning and decision-making"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "LLM Chatbots",
      description: "Custom conversational AI built on LangChain, LangGraph, and AutoGen for enterprise-grade use cases.",
      features: [
        "Enterprise-grade conversational AI",
        "Built with LangChain & LangGraph",
        "Multi-turn conversation handling",
        "Context-aware responses",
        "Scalable architecture"
      ]
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Business Process Automation",
      description: "End-to-end workflow automation across HR, finance, sales, and customer success with cloud-native tools.",
      features: [
        "Complete workflow automation",
        "Cross-department integration",
        "Cloud-native solutions",
        "Real-time monitoring",
        "Scalable infrastructure"
      ]
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "AI Consulting & Deployment",
      description: "AI strategy workshops, proof-of-concept builds, and enterprise scaling roadmaps.",
      features: [
        "Strategic AI planning",
        "Proof-of-concept development",
        "Enterprise scaling roadmaps",
        "Technology assessment",
        "Implementation guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What <span className="text-red-500">We Do</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto">
            Comprehensive AI and automation solutions designed to transform your business operations
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-red-500 rounded-xl group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all flex-shrink-0">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-500 transition-colors">{service.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-red-500">Process</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              How we deliver exceptional AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
              { step: "02", title: "Strategy", description: "Developing a tailored AI implementation roadmap" },
              { step: "03", title: "Development", description: "Building and testing your custom AI solutions" },
              { step: "04", title: "Deployment", description: "Launching and optimizing for maximum impact" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-500 opacity-30"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-2 border-red-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's discuss how our AI solutions can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-xl flex items-center justify-center"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;