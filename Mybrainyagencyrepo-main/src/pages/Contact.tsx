import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Bangalore, India", "(serving globally)"],
      color: "text-red-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 79958 02361"],
      color: "text-red-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["mahendra@thebrainy.agency"],
      color: "text-red-500"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website",
      details: ["thebrainy.agency"],
      color: "text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in Touch with{' '}
            <span className="text-red-500">
              The Brainy Agency
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto">
            We're here to help you explore how AI can transform your workflows and scale your business.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-red-500">Contact</span> Details
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                  >
                    <div className={`flex items-center mb-4 ${info.color}`}>
                      {info.icon}
                      <h3 className="text-lg font-semibold text-black ml-3">{info.title}</h3>
                    </div>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 mb-1">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Global Presence */}
              <div className="bg-white border-2 border-red-500 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <Globe className="h-6 w-6 text-red-500 mr-3" />
                  <span className="text-red-500">Global</span> Presence
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <span className="text-2xl mr-3">🌍</span>
                    <span>Headquartered in Bangalore, India</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-2xl mr-3">🌎</span>
                    <span>Supporting businesses across the US, Europe & worldwide</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 text-red-500 mr-3" />
                    <span>Available across IST & PST business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-2 border-red-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Start Your <span className="text-red-500">AI Journey?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Choose the best way to connect with our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-xl"
              >
                Book a Free Consultation
              </Link>
              <a
                href="mailto:mahendra@thebrainy.agency"
                className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-200"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;