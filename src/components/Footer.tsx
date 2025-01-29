import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useState } from "react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail(""); // Reset the email input
  };

  return (
    <>
      {/* Pre-footer Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Partner with ReliabilityIQ</h2>
              <p className="text-lg text-white mb-6">
                Join our network of industry leaders and innovators. We're seeking strategic partnerships 
                to revolutionize aircraft maintenance together. Let's collaborate to shape the future of aviation.
              </p>
              <Link to="/contact">
                <Button variant="secondary" className="group">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/20 to-transparent rounded-lg" />
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                alt="Partnership Opportunities" 
                className="rounded-lg shadow-xl w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-deep-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-300">
                Leading the revolution in aircraft maintenance with AI-powered solutions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@reliabilityiq.com</p>
              <p className="text-gray-300">Phone: +234 906 539 4605</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/product" className="text-gray-300 hover:text-white">Products</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <form 
                onSubmit={handleNewsletterSubmit} 
                className="space-y-4"
                name="newsletter"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <input type="hidden" name="recipient" value="rufusemare66@gmail.com,goldenomet0@gmail.com" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="secondary" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ReliabilityIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;