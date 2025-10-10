import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/button.jsx';
import { BookOpen, Search } from 'lucide-react';

export default function HealthLiteracyPage() {
  const [term, setTerm] = useState('');
  const [info, setInfo] = useState(null);

  const search = () => {
    setInfo({
      title: term || 'Diabetes',
      simple: 'High blood sugar, often called hyperglycemia, is a common sign of diabetes. It occurs when your body has too little insulin or when the body cant use insulin properly.',
      english: 'High blood sugar means insulin is not working well. Follow diet and exercise.',
      do: ['Walk 20 mins daily', 'Avoid sugary drinks', 'Eat more veggies'],
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-purple-500/20 rounded-full">
              <BookOpen className="h-12 w-12 text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">📚 AI Health Literacy</h1>
          <p className="text-gray-400">Explain diseases in simple Hindi/English with visuals.</p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-purple-500/30">
          <div className="flex gap-3">
            <input className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none" placeholder="Search disease (e.g., Diabetes)" value={term} onChange={(e)=>setTerm(e.target.value)} />
            <Button onClick={search} className="bg-purple-600 hover:bg-purple-700"><Search className="h-4 w-4 mr-2"/>Search</Button>
          </div>
        </div>

        {info && (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">{info.title}</h3>
            <p className="text-gray-300 mb-4">{info.simple}</p>
            <p className="text-gray-500 text-sm mb-6">{info.english}</p>
            <div>
              <h4 className="font-semibold mb-3 text-white">What to do</h4>
              <ul className="space-y-2">
                {info.do.map((d,i)=>(<li key={i} className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div><span className="text-gray-300">{d}</span></li>))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
