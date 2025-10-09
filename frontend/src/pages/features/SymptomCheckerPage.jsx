import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/button';
import { Stethoscope, Send, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SymptomCheckerPage() {
  const [symptoms, setSymptoms] = useState([]);
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSymptomSubmit = () => {
    if (currentSymptom.trim()) {
      setSymptoms([...symptoms, currentSymptom.trim()]);
      setCurrentSymptom('');
      const newChat = [...chatHistory, { type: 'user', text: currentSymptom.trim() }];
      setChatHistory(newChat);
      setLoading(true);
      setTimeout(() => {
        setChatHistory([...newChat, { type: 'ai', text: `Got it. Besides ${currentSymptom.trim()}, any other symptoms?` }]);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-purple-500/20 rounded-full">
              <Stethoscope className="h-12 w-12 text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">🩺 AI Symptom Checker</h1>
          <p className="text-gray-400">Describe your symptoms for an AI-powered analysis.</p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
          <div className="mb-4">
            <h3 className="font-semibold text-white mb-2">Your Symptoms</h3>
            <div className="flex flex-wrap gap-2">
              {symptoms.map((symptom, index) => (
                <div key={index} className="bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">{symptom}</div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <input 
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
              placeholder="Type a symptom and press Enter..."
              value={currentSymptom}
              onChange={(e) => setCurrentSymptom(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSymptomSubmit()}
            />
            <Button onClick={handleSymptomSubmit} className="bg-purple-600 hover:bg-purple-700">Add</Button>
          </div>

          <div className="h-40 bg-black/20 rounded-lg p-4 overflow-y-auto">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`px-4 py-2 rounded-lg ${chat.type === 'user' ? 'bg-purple-600' : 'bg-gray-700'}`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-center text-gray-400">AI is thinking...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
