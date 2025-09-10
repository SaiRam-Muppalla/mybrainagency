import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, TrendingUp, User, Mail } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';

const Blog = () => {
  const upcomingTopics = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "AI Strategy for Enterprise",
      description: "How to develop a comprehensive AI adoption roadmap for large organizations",
      category: "Strategy"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "LangChain vs LangGraph",
      description: "A detailed comparison of frameworks for building AI applications",
      category: "Technical"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "ROI of AI Automation",
      description: "Measuring and maximizing returns from AI automation investments",
      category: "Business"
    }
  ];

  const categories = [
    { name: "AI Strategy", count: 8, color: "bg-red-500" },
    { name: "Technical Guides", count: 12, color: "bg-red-600" },
    { name: "Case Studies", count: 6, color: "bg-red-700" },
    { name: "Industry Insights", count: 10, color: "bg-red-800" }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-red-500">Insights</span> & Updates from{' '}
            <span className="text-white">The Brainy Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto">
            Expert insights on AI, agentic systems, workflow automation, and enterprise AI adoption.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Blog Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-red-500">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">January 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">5 min read</span>
                </div>
              </div>
              <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
                AI Triage Agents: Your Always-On Helper
              </h1>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every business gets flooded with requests — customer emails, support tickets, IT issues, or sales leads. 
                The challenge is simple: who should handle what, and how fast?
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Traditionally, people had to read each message, decide urgency, and forward it. It works, but it's slow, 
                tiring, and sometimes things get missed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>That's where AI triage agents come in.</strong>
              </p>

              <h2 className="text-2xl font-bold text-black mb-4 mt-8">What is an AI Triage Agent?</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                An AI triage agent works like a smart assistant at your front desk:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>It reads messages the moment they arrive.</li>
                <li>It understands what they mean and how urgent they are.</li>
                <li>It sends them to the right team instantly.</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                All this happens in seconds, without human delays.
              </p>

              <h2 className="text-2xl font-bold text-black mb-4 mt-8">Real-Life Scenarios: Urgent vs. Routine</h2>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Customer Support</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-medium text-gray-800">Urgent:</p>
                      <p className="text-gray-700">"My order hasn't arrived and I need it today." → AI flags it urgent and routes to shipping right away.</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <p className="font-medium text-gray-800">Routine:</p>
                      <p className="text-gray-700">"Can you resend my invoice for last month?" → AI marks it low priority and schedules it for later.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Healthcare</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-medium text-gray-800">Urgent:</p>
                      <p className="text-gray-700">"I'm having chest pain and can't breathe properly." → AI alerts a doctor immediately.</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <p className="font-medium text-gray-800">Routine:</p>
                      <p className="text-gray-700">"What's the best diet for healthy skin?" → AI routes it to self-help resources.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">IT Helpdesk</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-medium text-gray-800">Urgent:</p>
                      <p className="text-gray-700">"The server is down — no one can log in." → AI escalates it to the IT team right away.</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <p className="font-medium text-gray-800">Routine:</p>
                      <p className="text-gray-700">"I forgot my password again." → AI sends an automated reset link.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Sales</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-medium text-gray-800">Urgent:</p>
                      <p className="text-gray-700">"We're a 500-person company looking for a team solution." → AI spots it as a VIP lead and sends it to a senior sales rep.</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <p className="font-medium text-gray-800">Routine:</p>
                      <p className="text-gray-700">"Can you share your brochure?" → AI replies with ready information.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 mt-8">
                This balance is what makes AI triage powerful: urgent issues get handled fast, while smaller requests 
                are not ignored — they're managed smoothly in the background.
              </p>

              <h2 className="text-2xl font-bold text-black mb-4 mt-8">Why It Matters</h2>

              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li><strong>Faster replies</strong> → Nobody waits for hours.</li>
                <li><strong>Less stress</strong> → Your team focuses on solving problems, not sorting them.</li>
                <li><strong>Scales easily</strong> → From 10 to 10,000 requests, AI can handle it.</li>
                <li><strong>Better experience</strong> → Customers, patients, and employees feel taken care of.</li>
                <li><strong>Learns with time</strong> → The more it works, the smarter it gets.</li>
              </ul>

              <h2 className="text-2xl font-bold text-black mb-4 mt-8">Final Thoughts</h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                AI triage agents are like having a 24/7 smart helper who makes sure every request — urgent or routine — 
                goes to the right place at the right time.
              </p>

              {/* Career Section */}
              <div className="bg-red-50 border-2 border-red-500/20 rounded-xl p-6 mt-12">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <User className="h-6 w-6 text-red-500 mr-3" />
                  Opportunities for Freshers
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're a fresher looking for training, internships, or placement, write to:
                </p>
                <a 
                  href="mailto:career@thebrainy.agency"
                  className="inline-flex items-center text-red-500 font-semibold hover:text-red-600 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  career@thebrainy.agency
                </a>
              </div>
            </article>

            {/* Author Info */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-black">The Brainy Agency Team</p>
                  <p className="text-gray-600">AI Automation Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Coming Soon */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More <span className="text-red-500">Articles</span> Coming Soon
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We're preparing more thought leadership articles and practical guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {upcomingTopics.map((topic, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-red-500/20 rounded-xl p-6 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all">
                  <div className="text-white">
                    {topic.icon}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-red-500 bg-red-500/20 px-2 py-1 rounded-full">
                    {topic.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-red-500 transition-colors">{topic.title}</h3>
                <p className="text-gray-700 leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>

          {/* Categories Preview */}
          <div className="bg-white border-2 border-red-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              Content <span className="text-red-500">Categories</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-all duration-200"
                >
                  <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold">{category.count}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">{category.name}</h4>
                  <p className="text-gray-600 text-sm">Articles planned</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-2 border-red-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Stay <span className="text-red-500">Updated</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Subscribe to get notified when we publish new insights and case studies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <NewsletterForm className="w-full" />
            </div>
            <p className="text-gray-500 text-sm mt-4">
              No spam, just valuable insights on AI and automation
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About <span className="text-red-500">AI Implementation?</span>
          </h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how AI triage agents can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;