import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Utensils, Camera, Search } from 'lucide-react';

const INDIAN_FOODS = [
  { name: 'Roti (1 medium)', calories: 120, protein: 3, carbs: 18, fat: 3 },
  { name: 'Dal (1 bowl)', calories: 180, protein: 12, carbs: 25, fat: 4 },
  { name: 'Paneer (100g)', calories: 265, protein: 18, carbs: 6, fat: 20 },
  { name: 'Biryani (1 plate)', calories: 420, protein: 15, carbs: 60, fat: 12 },
  { name: 'Idli (2 pcs)', calories: 140, protein: 6, carbs: 28, fat: 2 },
];

export default function NutritionCalculatorPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [totals, setTotals] = useState({ calories: 0, protein: 0, carbs: 0, fat: 0 });

  const search = () => {
    const r = INDIAN_FOODS.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
    setResults(r);
  };

  const add = (item) => {
    setTotals(t => ({
      calories: t.calories + item.calories,
      protein: t.protein + item.protein,
      carbs: t.carbs + item.carbs,
      fat: t.fat + item.fat,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-orange-100 rounded-full">
              <Utensils className="h-12 w-12 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🍽️ Calories & Nutrition Calculator</h1>
          <p className="text-gray-600">Works with Indian foods like roti, dal, paneer, biryani.</p>
        </div>

        <Card className="mb-6">
          <div className="flex gap-3">
            <Input placeholder="Search Indian food (e.g., roti, dal)" value={query} onChange={(e)=>setQuery(e.target.value)} />
            <Button onClick={search}><Search className="h-4 w-4 mr-2"/>Search</Button>
            <Button variant="outline"><Camera className="h-4 w-4 mr-2"/>Scan Food</Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold mb-3">Results</h3>
            <div className="space-y-2">
              {results.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.calories} kcal • P {item.protein}g • C {item.carbs}g • F {item.fat}g</div>
                  </div>
                  <Button size="sm" onClick={()=>add(item)}>Add</Button>
                </div>
              ))}
              {results.length === 0 && (
                <div className="text-sm text-gray-500">Search to see foods.</div>
              )}
            </div>
          </Card>

          <Card className="md:col-span-2">
            <h3 className="font-semibold mb-3">Today's Total</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-white rounded border text-center">
                <div className="text-2xl font-bold text-orange-600">{totals.calories}</div>
                <div className="text-xs text-gray-500">Calories</div>
              </div>
              <div className="p-3 bg-white rounded border text-center">
                <div className="text-2xl font-bold">{totals.protein}g</div>
                <div className="text-xs text-gray-500">Protein</div>
              </div>
              <div className="p-3 bg-white rounded border text-center">
                <div className="text-2xl font-bold">{totals.carbs}g</div>
                <div className="text-xs text-gray-500">Carbs</div>
              </div>
              <div className="p-3 bg-white rounded border text-center">
                <div className="text-2xl font-bold">{totals.fat}g</div>
                <div className="text-xs text-gray-500">Fat</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
