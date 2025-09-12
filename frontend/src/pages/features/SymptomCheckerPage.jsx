import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Stethoscope, Send, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SymptomCheckerPage() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const check = () => {
    setLoading(true);
    setTimeout(()=>{
      setResult({
        possibilities: [
          { name: 'Viral Fever', urgency: 'low', next: 'Hydration, rest, monitor 3 days' },
          { name: 'COVID-19', urgency: 'medium', next: 'Consider test if persistent 3+ days' },
        ],
        advice: 'If fever > 101°F for more than 3 days, see a doctor.',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-teal-100 rounded-full">
              <Stethoscope className="h-12 w-12 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🩺 AI Symptom Checker</h1>
          <p className="text-gray-600">Describe your symptoms. Get possible causes and next steps.</p>
        </div>

        <Card>
          <textarea className="input h-32" placeholder="e.g., Cough + fever + tiredness for 2 days" value={text} onChange={(e)=>setText(e.target.value)} />
          <Button className="mt-3" onClick={check} disabled={!text.trim() || loading}>{loading ? 'Checking...' : 'Check'}</Button>
        </Card>

        {result && (
          <div className="mt-6 space-y-3">
            {result.possibilities.map((p,i)=> (
              <Card key={i} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{p.name}</div>
                  <span className={`text-xs px-2 py-1 rounded ${p.urgency==='high'?'bg-red-100 text-red-700':p.urgency==='medium'?'bg-yellow-100 text-yellow-700':'bg-green-100 text-green-700'}`}>{p.urgency.toUpperCase()}</span>
                </div>
                <div className="text-sm text-gray-600 mt-2">Next: {p.next}</div>
              </Card>
            ))}
            <div className="flex items-start gap-2 text-sm text-gray-700 p-3 bg-blue-50 border border-blue-200 rounded">
              <AlertTriangle className="h-4 w-4 mt-0.5" />
              <p>{result.advice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
