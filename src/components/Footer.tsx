import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-background to-deep-blue py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Aircraft Maintenance?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join leading airlines in revolutionizing their maintenance operations with AI-powered solutions.
              </p>
              <Link to="/contact">
                <Button variant="secondary" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/20 to-transparent rounded-lg" />
              <img 
                src="/placeholder.svg" 
                alt="Aircraft Maintenance" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-deep-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-secondary" />
                <span className="text-xl font-bold">ReliabilityIQ</span>
              </div>
              <p className="text-gray-300">
                Leading the future of aircraft maintenance with AI-powered solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
                <li><Link to="/product" className="text-gray-300 hover:text-secondary transition-colors">Product</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="text-gray-300">info@reliabilityiq.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-gray-300">+234 906 539 4605</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Stay updated with our latest news and updates.</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button 
                  type="submit"
                  variant="secondary"
                  className="w-full"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ReliabilityIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;