import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Shield, Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function InsuranceExplainerPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [planText, setPlanText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        summary: 'Covers hospitalization up to ₹5L; excludes cosmetic surgery, dental unless accident; 24-month waiting period on pre-existing conditions.',
        coverage: [
          'Inpatient care up to ₹5,00,000',
          'Daycare procedures',
          'Ambulance up to ₹2,000/claim'
        ],
        exclusions: [
          'Cosmetic treatment',
          'Dental (unless accident)',
          'First 30 days non-accidental illnesses'
        ],
        claims: [
          'Cashless at network hospitals',
          'Reimbursement within 15 days',
        ],
        bestFor: 'Family of 3–4 in Tier-2 city, age 25–40',
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-purple-100 rounded-full">
              <Shield className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🛡️ AI Insurance Explainer</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Upload a policy PDF or paste plan details. Get coverage, exclusions, waiting periods, and claim steps in plain words.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold mb-3">Upload Policy</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <Input type="file" accept=".pdf" onChange={(e)=>setSelectedFile(e.target.files?.[0])} />
              {selectedFile && (
                <p className="text-sm text-gray-600 mt-2">Selected: {selectedFile.name}</p>
              )}
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Or paste plan details</h4>
              <textarea className="input h-32" value={planText} onChange={(e)=>setPlanText(e.target.value)} placeholder="Sum insured, premium, inclusions, exclusions..." />
            </div>
            <Button className="w-full mt-4" onClick={analyze} disabled={isAnalyzing || (!selectedFile && !planText.trim())}>
              {isAnalyzing ? 'Analyzing...' : 'Explain My Policy'}
            </Button>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3">Result</h3>
            {result ? (
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-blue-900">{result.summary}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Coverage</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    {result.coverage.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exclusions</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    {result.exclusions.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Claim Process</h4>
                  <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-1">
                    {result.claims.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ol>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-green-800"><strong>Best for:</strong> {result.bestFor}</p>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-sm flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Upload a policy or paste details to analyze.</span>
              </div>
            )}
            <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
              <AlertCircle className="h-4 w-4 mt-0.5" />
              <p>We summarize publicly available information. Verify with insurer documents.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
