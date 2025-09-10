//
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Lightbulb, Link as LinkIcon, BarChart3, Rocket } from 'lucide-react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import MetricChip from '../components/ui/MetricChip';

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
      <Section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative">
        {/* Red gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
        <Container className="relative">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-3xl opacity-20 scale-150"></div>
              <h1 className="relative text-fluid-h1 font-bold text-white leading-tight">
                <span className="text-red-500">AI Agents</span> & Automations
                <span className="block text-white">
                  That Transform Your Business
                </span>
              </h1>
            </div>
            
            <p className="text-fluid-body text-white mb-8 sm:mb-10 max-w-prose mx-auto">
              From AI-powered assistants to full-scale workflow automation, 
              The Brainy Agency helps you achieve more with less.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
              <Link
                to="/contact"
                className="group bg-red-500 text-white px-6 sm:px-8 py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-red-500 text-red-400 px-6 sm:px-8 py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-red-500/10 transition-all duration-200 flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>

            {/* Floating AI Illustration with explicit aspect to avoid CLS */}
            <div className="relative mx-auto mb-12 sm:mb-16" style={{ width: 256, height: 256 }}>
              <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-red-500 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute inset-8 bg-red-500 rounded-full flex items-center justify-center">
                <Zap className="h-16 w-16 text-white animate-bounce" />
              </div>
            </div>
            {/* Trust row / logo cloud placeholder */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-80">
              {['Trusted by leaders', 'Fortune 500', 'YC-backed', 'SaaS founders'].map((t) => (
                <span key={t} className="text-xs sm:text-sm text-white/80 border border-white/10 rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gray-900/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-fluid-h2 font-bold text-white mb-3">
              Why Choose <span className="text-red-500">The Brainy Agency?</span>
            </h2>
            <p className="text-fluid-body text-white max-w-prose mx-auto">
              We don't just build AI solutions - we transform how your business operates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
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
        </Container>
      </Section>

      {/* Case study highlight */}
      <Section>
        <Container>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-red-500/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-fluid-h3 text-black font-bold mb-2">Recent results</h3>
                <p className="text-gray-700 max-w-prose">Teams cut manual work by hours each week after adopting agentic automations across sales and support.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['-43% CAC', '+28% MQLs', 'NPS 9.1', 'TTV 2 weeks'].map((m) => (
                  <MetricChip key={m} label={m} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white border border-red-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-fluid-h2 font-bold text-black mb-4">
              Ready to Transform Your Business?
              </h2>
              <p className="text-fluid-body text-gray-700 mb-6">
              Join forward-thinking companies that are already leveraging AI to scale faster and work smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-red-500 text-white px-6 sm:px-8 py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-xl"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-red-500 text-red-500 px-6 sm:px-8 py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-red-500/10 transition-all duration-200"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;