//
import { CheckCircle, Award, Globe, Target, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    "16+ years in AI and engineering",
    "$180M+ in business impact delivered",
    "IIT Madras alumnus",
    "Former leader at Walmart and PayPal",
    "Expert in LangChain, LangGraph, MCP, AutoGen"
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We're passionate about building scalable systems that drive measurable growth"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation First",
      description: "Combining deep technical expertise with cutting-edge AI frameworks"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Serving businesses worldwide with cloud-native solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Who <span className="text-red-500">We Are</span>
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Brainy Agency is an <span className="text-red-500 font-semibold">AI and automation consultancy</span> specializing in agentic systems, 
                  LLM-powered chatbots, and workflow automation using advanced frameworks like 
                  <span className="text-red-500 font-semibold"> LangChain, LangGraph, MCP, and AutoGen</span>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We help businesses transform workflows, reduce operational costs, and scale faster 
                  through <span className="text-red-500 font-semibold">intelligent automation</span> and cloud-native solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team is passionate about building <span className="text-red-500 font-semibold">scalable systems</span> and AI solutions that drive measurable growth.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white border-2 border-red-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-12 w-12 text-red-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-black">Founded by Excellence</h3>
                    <p className="text-red-500 font-semibold">Hemanth Garlapati</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-red-500">Core Values</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              What drives us to deliver exceptional AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-6 mx-auto group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-red-500 transition-colors">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border-2 border-red-500/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Technical <span className="text-red-500">Expertise</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Deep technical knowledge combined with proven business impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "AI Consultancy",
                "Automation Agency", 
                "LLM Chatbots",
                "LangChain Developers",
                "Workflow Automation",
                "AI Systems",
                "Intelligent Automation",
                "Enterprise AI Solutions"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 border border-red-500/30 rounded-lg p-4 text-center hover:border-red-500 hover:bg-red-50 transition-all duration-200"
                >
                  <span className="text-red-500 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;