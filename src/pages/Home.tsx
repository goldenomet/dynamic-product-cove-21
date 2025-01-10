import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Shield, Cpu, BarChart2, Gauge, AlertCircle, CheckCircle } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import InteractiveDemo from '../components/InteractiveDemo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#1E293B] to-[#334155] animate-gradient">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Next-Generation Aircraft
              <span className="text-secondary block">Engine Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Revolutionary AI-powered engine monitoring and predictive maintenance system
              that transforms aviation safety and efficiency.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-md hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/20"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
            
            <div className="mt-12">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&h=800&q=80"
                alt="Boeing Aircraft"
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Technology in Action</h2>
          <p className="text-xl text-gray-300">Experience the future of aircraft maintenance</p>
        </div>
        <ImageCarousel />
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Experience Our Technology</h2>
          <p className="text-xl text-gray-300">Try our interactive maintenance tracking system demo</p>
        </div>
        <InteractiveDemo />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose ReliabilityIQ</h2>
            <p className="text-xl text-gray-300">Transform your maintenance operations with our cutting-edge solution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "99.9% Accuracy",
                description: "AI-powered predictions with proven accuracy",
                icon: <CheckCircle className="w-12 h-12 text-green-400" />
              },
              {
                title: "24/7 Monitoring",
                description: "Continuous real-time engine performance tracking",
                icon: <Activity className="w-12 h-12 text-blue-400" />
              },
              {
                title: "Instant Alerts",
                description: "Real-time notifications for critical issues",
                icon: <AlertCircle className="w-12 h-12 text-red-400" />
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">Real-Time Engine Monitoring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Engine Performance Card */}
              <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-500">
                <Gauge className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Engine Performance</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Thrust Output</span>
                    <span className="text-secondary">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>
              </div>

              {/* Temperature Monitoring */}
              <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-500">
                <Activity className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Temperature</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Core Temperature</span>
                    <span className="text-red-400">1,240°C</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform duration-500">
                <AlertCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">System Health</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Overall Status</span>
                    <span className="text-green-400">Optimal</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Advanced Features</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {[
                {
                  title: "AI-Powered Analytics",
                  icon: <Cpu className="w-12 h-12 text-secondary" />,
                  description: "Advanced machine learning algorithms for predictive maintenance"
                },
                {
                  title: "Real-time Monitoring",
                  icon: <BarChart2 className="w-12 h-12 text-secondary" />,
                  description: "24/7 engine performance tracking with advanced sensors"
                },
                {
                  title: "Enhanced Safety",
                  icon: <Shield className="w-12 h-12 text-secondary" />,
                  description: "Proactive fault detection and emergency response systems"
                }
              ].map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform duration-500">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/20 to-primary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Aircraft Maintenance?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join leading aviation companies in revolutionizing their maintenance operations
            with ReliabilityIQ's cutting-edge technology.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-md hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/20"
          >
            Schedule a Demo <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer is handled by App.tsx */}
    </div>
  );
};

export default Home;
