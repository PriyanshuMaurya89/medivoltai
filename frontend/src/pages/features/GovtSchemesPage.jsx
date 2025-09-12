import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Building, Search, CheckCircle } from 'lucide-react';

export default function GovtSchemesPage() {
  const [input, setInput] = useState({ age: '', income: '', state: '' });
  const [schemes, setSchemes] = useState([]);

  const find = () => {
    // Mock eligibility
    const results = [
      { name: 'Ayushman Bharat (PM-JAY)', benefit: '₹5 lakh coverage per family', eligibility: 'BPL / SECC list', link: '#' },
      { name: 'State Health Assurance', benefit: '₹2–3 lakh coverage', eligibility: 'State specific criteria', link: '#' },
    ];
    setSchemes(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <Building className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🏛️ Govt Health Scheme Finder</h1>
          <p className="text-gray-600">Check eligibility for Ayushman Bharat, PMJAY and state schemes.</p>
        </div>

        <Card className="mb-6">
          <div className="grid md:grid-cols-4 gap-3">
            <input className="input" placeholder="Age" value={input.age} onChange={(e)=>setInput({...input, age:e.target.value})} />
            <input className="input" placeholder="Annual Income (₹)" value={input.income} onChange={(e)=>setInput({...input, income:e.target.value})} />
            <input className="input" placeholder="State" value={input.state} onChange={(e)=>setInput({...input, state:e.target.value})} />
            <Button onClick={find}><Search className="h-4 w-4 mr-2"/>Check</Button>
          </div>
        </Card>

        <div className="space-y-3">
          {schemes.map((s, i)=> (
            <Card key={i} className="p-4 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-gray-600">Benefit: {s.benefit}</div>
                <div className="text-sm text-gray-600">Eligibility: {s.eligibility}</div>
                <div className="mt-2">
                  <a href={s.link} className="text-primary text-sm">Apply/Know More →</a>
                </div>
              </div>
            </Card>
          ))}

          {schemes.length === 0 && (
            <div className="text-sm text-gray-500">Fill details to see schemes.</div>
          )}
        </div>
      </div>
    </div>
  );
}
