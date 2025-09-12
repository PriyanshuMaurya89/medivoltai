import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AlertTriangle, MapPin, PhoneCall, Shield } from 'lucide-react';

export default function EmergencySOSPage() {
  const [status, setStatus] = useState(null);

  const triggerSOS = () => {
    // Mock location fetch
    setStatus({
      sent: true,
      location: '28.6139° N, 77.2090° E',
      timestamp: new Date().toLocaleString(),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🚨 Emergency SOS</h1>
          <p className="text-gray-600">Send live GPS + health details to family/doctors.</p>
        </div>

        <Card className="text-center p-8">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg" onClick={triggerSOS}>
            SEND SOS NOW
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm text-gray-700">
            <div className="p-3 bg-white border rounded flex items-center gap-2"><MapPin className="h-4 w-4"/> Live Location</div>
            <div className="p-3 bg-white border rounded flex items-center gap-2"><PhoneCall className="h-4 w-4"/> Notify Contacts</div>
            <div className="p-3 bg-white border rounded flex items-center gap-2"><Shield className="h-4 w-4"/> Share Medical History</div>
          </div>
          {status && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded text-left">
              <div className="font-semibold text-green-800">SOS Sent</div>
              <div className="text-sm text-green-700">Location: {status.location}</div>
              <div className="text-sm text-green-700">Time: {status.timestamp}</div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
