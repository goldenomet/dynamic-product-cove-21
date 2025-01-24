import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { 
  FileText, 
  AlertCircle, 
  Activity, 
  Calendar, 
  ClipboardList,
  Download,
  BarChart2,
  Gauge,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const mockSensorData = [
  { name: 'Engine 1', value: 85, status: 'normal' },
  { name: 'Engine 2', value: 92, status: 'normal' },
  { name: 'APU', value: 78, status: 'warning' },
  { name: 'Landing Gear', value: 95, status: 'normal' },
  { name: 'Hydraulics', value: 65, status: 'critical' },
];

const mockMaintenanceData = [
  { month: 'Jan', incidents: 4, maintenance: 8 },
  { month: 'Feb', incidents: 3, maintenance: 6 },
  { month: 'Mar', incidents: 5, maintenance: 9 },
  { month: 'Apr', incidents: 2, maintenance: 7 },
  { month: 'May', incidents: 3, maintenance: 5 },
];

const InteractiveDemo = () => {
  const { toast } = useToast();
  const [selectedReport, setSelectedReport] = useState('maintenance');

  const generateReport = () => {
    toast({
      title: "Report Generated",
      description: "Your report has been generated and is ready for download.",
    });
  };

  const simulateAlert = () => {
    toast({
      variant: "destructive",
      title: "Alert Detected",
      description: "High pressure detected in hydraulic system.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-secondary p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white mb-8">Interactive Training Dashboard</h1>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="dashboard" className="text-white">Main Dashboard</TabsTrigger>
            <TabsTrigger value="reports" className="text-white">Reports</TabsTrigger>
            <TabsTrigger value="training" className="text-white">Training Modules</TabsTrigger>
            <TabsTrigger value="alerts" className="text-white">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Real-time Monitoring */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Real-time Sensor Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockSensorData.map((sensor) => (
                      <div key={sensor.name} className="flex items-center justify-between">
                        <span>{sensor.name}</span>
                        <div className="flex items-center gap-2">
                          <span>{sensor.value}%</span>
                          <div 
                            className={`h-3 w-3 rounded-full ${
                              sensor.status === 'normal' ? 'bg-green-400' :
                              sensor.status === 'warning' ? 'bg-yellow-400' :
                              'bg-red-400'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Analytics */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5" />
                    Performance Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockMaintenanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="incidents" fill="#FF4444" />
                        <Bar dataKey="maintenance" fill="#44FF44" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Report Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    variant="secondary" 
                    className="flex items-center gap-2"
                    onClick={() => {
                      setSelectedReport('maintenance');
                      generateReport();
                    }}
                  >
                    <ClipboardList className="h-4 w-4" />
                    Generate Maintenance Report
                  </Button>
                  <Button 
                    variant="secondary"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setSelectedReport('performance');
                      generateReport();
                    }}
                  >
                    <Gauge className="h-4 w-4" />
                    Generate Performance Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Emergency Procedures",
                  icon: AlertTriangle,
                  description: "Learn standard emergency protocols"
                },
                {
                  title: "Maintenance Best Practices",
                  icon: CheckCircle2,
                  description: "Study industry-leading maintenance procedures"
                },
                {
                  title: "Quality Control",
                  icon: ClipboardList,
                  description: "Master quality assurance processes"
                }
              ].map((module, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <module.icon className="h-5 w-5" />
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{module.description}</p>
                    <Button variant="secondary" className="w-full">
                      Start Module
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alerts">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Alert Simulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Test your response to various alert scenarios:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      variant="destructive"
                      onClick={simulateAlert}
                      className="flex items-center gap-2"
                    >
                      <AlertCircle className="h-4 w-4" />
                      Simulate Critical Alert
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={() => toast({
                        title: "Maintenance Required",
                        description: "Scheduled maintenance due for Engine 2",
                      })}
                      className="flex items-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Simulate Maintenance Alert
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InteractiveDemo;