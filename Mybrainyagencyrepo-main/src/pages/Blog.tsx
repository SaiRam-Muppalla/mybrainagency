//
import { Calendar, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Agentic AI Case Studies",
      description: "Real-world examples of successful AI agent implementations",
      category: "Case Study"
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
            Stay tuned for expert insights on AI, agentic systems, workflow automation, and enterprise AI adoption.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full font-semibold mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-red-500">Our Blog</span> is Under Development
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12">
              We're preparing thought leadership articles, AI case studies, and practical guides 
              to help businesses understand and adopt automation. Here's what you can expect:
            </p>
          </div>

          {/* Upcoming Topics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {upcomingTopics.map((topic, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-red-500/20 rounded-xl p-6 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all flex-shrink-0">
                    <div className="text-white">
                      {topic.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-red-500 bg-red-500/20 px-2 py-1 rounded-full">
                        {topic.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-red-500 transition-colors">{topic.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{topic.description}</p>
                  </div>
                </div>
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
              Be the <span className="text-red-500">First to Know</span>
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
            While our blog is in development, we're always available for consultations
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