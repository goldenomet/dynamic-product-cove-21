import { useState } from 'react';
import { Gauge, Thermometer, Activity, Droplet } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const InteractiveDemo = () => {
  const [engineHealth, setEngineHealth] = useState(100);
  const [maintenanceStatus, setMaintenanceStatus] = useState('Good');
  const [metrics, setMetrics] = useState({
    temperature: 120,
    pressure: 2.4,
    vibration: 0.15,
    oilLevel: 95
  });

  const simulateWear = () => {
    setEngineHealth(prev => Math.max(prev - 15, 0));
    setMetrics(prev => ({
      ...prev,
      temperature: prev.temperature + 10,
      vibration: +(prev.vibration + 0.05).toFixed(2),
      oilLevel: prev.oilLevel - 5
    }));
    if (engineHealth < 50) {
      setMaintenanceStatus('Maintenance Required');
    }
  };

  const performMaintenance = () => {
    setEngineHealth(100);
    setMaintenanceStatus('Good');
    setMetrics({
      temperature: 120,
      pressure: 2.4,
      vibration: 0.15,
      oilLevel: 95
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Engine Health Monitor */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">Engine Health Monitor</h3>
          <div className="relative h-4 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
              style={{ width: `${engineHealth}%` }}
            />
          </div>
          <div className="text-white">Health: {engineHealth}%</div>
          
          <div className="space-y-2">
            <h4 className="text-xl text-white">Maintenance Status</h4>
            <div className={`text-lg ${maintenanceStatus === 'Good' ? 'text-green-400' : 'text-red-400'}`}>
              {maintenanceStatus}
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              variant="destructive"
              onClick={simulateWear}
              className="bg-red-500 hover:bg-red-600"
            >
              Simulate Wear
            </Button>
            <Button 
              variant="default"
              onClick={performMaintenance}
              className="bg-green-500 hover:bg-green-600"
            >
              Perform Maintenance
            </Button>
          </div>
        </div>

        {/* System Metrics */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">System Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-white mb-2">
                <Thermometer className="h-5 w-5 text-blue-400" />
                <span>Temperature</span>
              </div>
              <div className="text-2xl font-bold text-white">{metrics.temperature}°C</div>
            </Card>

            <Card className="bg-white/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-white mb-2">
                <Gauge className="h-5 w-5 text-yellow-400" />
                <span>Pressure</span>
              </div>
              <div className="text-2xl font-bold text-white">{metrics.pressure} Bar</div>
            </Card>

            <Card className="bg-white/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-white mb-2">
                <Activity className="h-5 w-5 text-purple-400" />
                <span>Vibration</span>
              </div>
              <div className="text-2xl font-bold text-white">{metrics.vibration} mm/s</div>
            </Card>

            <Card className="bg-white/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-white mb-2">
                <Droplet className="h-5 w-5 text-cyan-400" />
                <span>Oil Level</span>
              </div>
              <div className="text-2xl font-bold text-white">{metrics.oilLevel}%</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;