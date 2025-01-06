import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Plane, Shield, Cpu, BarChart2, MessageSquare, Settings, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Product = () => {
  const [pilotMessage, setPilotMessage] = useState('');
  const [aiResponses, setAiResponses] = useState<string[]>([
    'Systems operational. All parameters within normal range.',
    'Engine performance at optimal levels.',
  ]);
  const [systemStatus, setSystemStatus] = useState({
    engineTemp: 85,
    fuelEfficiency: 92,
    altitude: 35000,
    speed: 540,
  });

  const handlePilotMessage = () => {
    if (!pilotMessage.trim()) return;
    
    // Simulate AI response
    const newResponse = `Analyzing request: "${pilotMessage}". Adjusting systems accordingly.`;
    setAiResponses(prev => [...prev, newResponse]);
    setPilotMessage('');
    
    // Simulate system parameter changes
    setSystemStatus(prev => ({
      ...prev,
      engineTemp: Math.min(100, prev.engineTemp + Math.random() * 5),
      fuelEfficiency: Math.max(80, prev.fuelEfficiency - Math.random() * 3),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-secondary animate-gradient">
      {/* Product Hero */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Advanced Aircraft Engine Monitoring
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Next-generation reliability monitoring and autonomous flight control systems
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Interaction Panel */}
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="text-secondary" />
                  AI Communication Interface
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto mb-4 space-y-2">
                  {aiResponses.map((response, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg animate-fade-up" style={{
                      animationDelay: `${index * 0.1}s`
                    }}>
                      {response}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={pilotMessage}
                    onChange={(e) => setPilotMessage(e.target.value)}
                    placeholder="Enter command or query..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button onClick={handlePilotMessage} className="bg-secondary hover:bg-secondary/80">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Controls Panel */}
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="text-secondary" />
                  System Parameters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span>Engine Temp</span>
                      <span className={systemStatus.engineTemp > 90 ? 'text-red-400' : 'text-green-400'}>
                        {systemStatus.engineTemp}°C
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-secondary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${systemStatus.engineTemp}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span>Fuel Efficiency</span>
                      <span className="text-green-400">{systemStatus.fuelEfficiency}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-secondary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${systemStatus.fuelEfficiency}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span>Altitude</span>
                      <span>{systemStatus.altitude} ft</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <Plane className="h-4 w-4" />
                      <span className="text-sm">Cruising</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span>Speed</span>
                      <span>{systemStatus.speed} mph</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Optimal</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane className="w-12 h-12" />,
                title: "Flight Monitoring",
                description: "Real-time engine performance tracking and analysis"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Predictive Maintenance",
                description: "AI-powered maintenance scheduling and risk assessment"
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "Autonomous Systems",
                description: "Advanced flight control and emergency response"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to enhance your aircraft maintenance?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-md hover:scale-105 transition-all duration-300"
          >
            Schedule a Demo <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Product;