import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Pill, Search, Camera, Info, AlertTriangle, CheckCircle, IndianRupee, Clock, Heart, Shield } from 'lucide-react';

export default function MedicineInfoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [medicineInfo, setMedicineInfo] = useState(null);
  const [selectedTab, setSelectedTab] = useState('search');
  const [language, setLanguage] = useState('english');

  const commonMedicines = [
    { name: 'Paracetamol 500mg', category: 'Pain Relief', price: '₹15-25' },
    { name: 'Crocin 650mg', category: 'Fever', price: '₹20-30' },
    { name: 'Combiflam', category: 'Pain & Fever', price: '₹25-35' },
    { name: 'Cetirizine 10mg', category: 'Allergy', price: '₹10-20' },
    { name: 'Pantoprazole 40mg', category: 'Acidity', price: '₹30-50' },
    { name: 'Azithromycin 500mg', category: 'Antibiotic', price: '₹80-120' },
  ];

  const searchMedicine = (medicineName) => {
    setIsSearching(true);
    setSearchTerm(medicineName || searchTerm);
    
    // Simulate AI search
    setTimeout(() => {
      const mockData = {
        name: medicineName || searchTerm,
        genericName: medicineName === 'Crocin 650mg' ? 'Paracetamol' : 'Paracetamol',
        strength: '500mg',
        manufacturer: 'Generic Pharmaceutical',
        category: 'Analgesic & Antipyretic',
        
        usage: language === 'hindi' ? [
          'बुखार कम करने के लिए',
          'सिर दर्द के लिए',
          'शरीर में दर्द के लिए',
          'दांत दर्द के लिए'
        ] : [
          'Reduces fever and body temperature',
          'Relieves headache and migraine',
          'Reduces body pain and muscle aches',
          'Helps with toothache'
        ],
        
        dosage: {
          adult: language === 'hindi' 
            ? '500-1000mg हर 4-6 घंटे में (दिन में अधिकतम 4000mg)'
            : '500-1000mg every 4-6 hours (max 4000mg per day)',
          child: language === 'hindi'
            ? '10-15mg/kg हर 4-6 घंटे में'
            : '10-15mg/kg every 4-6 hours',
          elderly: language === 'hindi'
            ? 'कम डोज़ या डॉक्टर की सलाह लें'
            : 'Reduced dose or consult doctor'
        },
        
        sideEffects: {
          common: language === 'hindi' ? [
            'जी मिचलाना',
            'पेट की खराबी',
            'चक्कर आना'
          ] : [
            'Nausea',
            'Stomach upset',
            'Dizziness'
          ],
          serious: language === 'hindi' ? [
            'लिवर को नुकसान (अधिक मात्रा में)',
            'स्किन रैश',
            'सांस लेने में तकलीफ'
          ] : [
            'Liver damage (overdose)',
            'Skin rash',
            'Breathing difficulties'
          ]
        },
        
        interactions: language === 'hindi' ? [
          'शराब के साथ न लें',
          'वार्फरिन के साथ सावधानी',
          'अन्य दर्द निवारक दवाओं के साथ न मिलाएं'
        ] : [
          'Avoid with alcohol',
          'Caution with warfarin',
          'Do not combine with other pain relievers'
        ],
        
        alternatives: [
          { name: 'Dolo 650', price: '₹12-18', savings: '₹5-10' },
          { name: 'Pyrigesic 500', price: '₹8-15', savings: '₹7-15' },
          { name: 'Febrinil 500', price: '₹10-16', savings: '₹5-12' },
        ],
        
        price: {
          brand: '₹20-30',
          generic: '₹8-15',
          savings: '60-70%'
        },
        
        availability: {
          prescription: language === 'hindi' ? 'पर्चे की जरूरत नहीं' : 'No prescription needed',
          stores: language === 'hindi' ? 'सभी मेडिकल स्टोर में उपलब्ध' : 'Available at all medical stores',
          online: true
        }
      };
      
      setMedicineInfo(mockData);
      setIsSearching(false);
    }, 2000);
  };

  const scanMedicine = () => {
    alert('Camera functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <Pill className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💊 AI Medicine Information
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scan or search any medicine to get complete information in Hindi/English
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              🔍 Smart Search
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              📱 Scan Medicine
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              💰 Find Cheaper Options
            </span>
          </div>
        </div>

        {/* Language Selection */}
        <Card className="mb-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Pill className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Choose Language / भाषा चुनें</h3>
          </div>
          <div className="flex gap-4">
            <Button
              variant={language === 'english' ? 'primary' : 'outline'}
              onClick={() => setLanguage('english')}
              className="flex-1"
            >
              English
            </Button>
            <Button
              variant={language === 'hindi' ? 'primary' : 'outline'}
              onClick={() => setLanguage('hindi')}
              className="flex-1"
            >
              हिंदी (Hindi)
            </Button>
          </div>
        </Card>

        {/* Search/Scan Tabs */}
        <Card className="mb-8 max-w-4xl mx-auto">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
                selectedTab === 'search'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedTab('search')}
            >
              <Search className="h-5 w-5 mx-auto mb-1" />
              {language === 'hindi' ? 'दवा खोजें' : 'Search Medicine'}
            </button>
            <button
              className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
                selectedTab === 'scan'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedTab('scan')}
            >
              <Camera className="h-5 w-5 mx-auto mb-1" />
              {language === 'hindi' ? 'दवा स्कैन करें' : 'Scan Medicine'}
            </button>
          </div>

          <div className="p-6">
            {selectedTab === 'search' ? (
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    placeholder={language === 'hindi' ? 'दवा का नाम लिखें (जैसे: पैरासिटामोल 500mg)' : 'Enter medicine name (e.g., Paracetamol 500mg)'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => searchMedicine()}
                    disabled={isSearching || !searchTerm.trim()}
                    className="px-8"
                  >
                    {isSearching ? (
                      <>
                        <Search className="animate-spin h-4 w-4 mr-2" />
                        {language === 'hindi' ? 'खोज रहे हैं...' : 'Searching...'}
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        {language === 'hindi' ? 'खोजें' : 'Search'}
                      </>
                    )}
                  </Button>
                </div>

                {/* Common Medicines */}
                <div>
                  <h4 className="font-medium mb-3">
                    {language === 'hindi' ? 'आम दवाइयां:' : 'Common Medicines:'}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {commonMedicines.map((medicine, index) => (
                      <button
                        key={index}
                        className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => searchMedicine(medicine.name)}
                      >
                        <p className="font-medium text-sm">{medicine.name}</p>
                        <p className="text-xs text-gray-500">{medicine.category}</p>
                        <p className="text-xs text-primary font-medium">{medicine.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Camera className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {language === 'hindi' ? 'दवा का फोटो लें' : 'Take Medicine Photo'}
                </h3>
                <p className="text-gray-500 mb-6">
                  {language === 'hindi'
                    ? 'दवा की पैकेजिंग या लेबल का फोटो लें'
                    : 'Take a photo of medicine packaging or label'
                  }
                </p>
                <Button onClick={scanMedicine} size="lg">
                  <Camera className="h-5 w-5 mr-2" />
                  {language === 'hindi' ? 'कैमरा खोलें' : 'Open Camera'}
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Medicine Information Display */}
        {medicineInfo && (
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Basic Info */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">{medicineInfo.name}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">
                        {language === 'hindi' ? 'जेनेरिक नाम:' : 'Generic Name:'}
                      </span>
                      <span className="text-gray-900">{medicineInfo.genericName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">
                        {language === 'hindi' ? 'खुराक:' : 'Strength:'}
                      </span>
                      <span className="text-gray-900">{medicineInfo.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">
                        {language === 'hindi' ? 'श्रेणी:' : 'Category:'}
                      </span>
                      <span className="text-gray-900">{medicineInfo.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <IndianRupee className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">
                      {language === 'hindi' ? 'कीमत तुलना' : 'Price Comparison'}
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{language === 'hindi' ? 'ब्रांडेड:' : 'Branded:'}</span>
                      <span className="font-medium">{medicineInfo.price.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'hindi' ? 'जेनेरिक:' : 'Generic:'}</span>
                      <span className="font-medium text-green-600">{medicineInfo.price.generic}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-green-700">
                      <span>{language === 'hindi' ? 'बचत:' : 'Savings:'}</span>
                      <span>{medicineInfo.price.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Usage */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-red-500" />
                <h4 className="text-lg font-semibold">
                  {language === 'hindi' ? 'उपयोग' : 'Uses'}
                </h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {medicineInfo.usage.map((use, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-blue-800">{use}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Dosage */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-orange-500" />
                <h4 className="text-lg font-semibold">
                  {language === 'hindi' ? 'खुराक' : 'Dosage'}
                </h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h5 className="font-medium text-gray-700 mb-2">
                    {language === 'hindi' ? 'वयस्क:' : 'Adult:'}
                  </h5>
                  <p className="text-sm text-gray-600">{medicineInfo.dosage.adult}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h5 className="font-medium text-gray-700 mb-2">
                    {language === 'hindi' ? 'बच्चे:' : 'Children:'}
                  </h5>
                  <p className="text-sm text-gray-600">{medicineInfo.dosage.child}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h5 className="font-medium text-gray-700 mb-2">
                    {language === 'hindi' ? 'बुजुर्ग:' : 'Elderly:'}
                  </h5>
                  <p className="text-sm text-gray-600">{medicineInfo.dosage.elderly}</p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Side Effects */}
              <Card>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <h4 className="text-lg font-semibold">
                    {language === 'hindi' ? 'दुष्प्रभाव' : 'Side Effects'}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">
                      {language === 'hindi' ? 'सामान्य:' : 'Common:'}
                    </h5>
                    <div className="space-y-1">
                      {medicineInfo.sideEffects.common.map((effect, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-600">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">
                      {language === 'hindi' ? 'गंभीर:' : 'Serious:'}
                    </h5>
                    <div className="space-y-1">
                      {medicineInfo.sideEffects.serious.map((effect, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <AlertTriangle className="w-3 h-3 text-red-500"></AlertTriangle>
                          <span className="text-red-600">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Drug Interactions */}
              <Card>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <h4 className="text-lg font-semibold">
                    {language === 'hindi' ? 'दवा के साथ परस्पर क्रिया' : 'Drug Interactions'}
                  </h4>
                </div>
                
                <div className="space-y-2">
                  {medicineInfo.interactions.map((interaction, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-800">{interaction}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Cheaper Alternatives */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <IndianRupee className="h-5 w-5 text-green-500" />
                <h4 className="text-lg font-semibold">
                  {language === 'hindi' ? 'सस्ते विकल्प' : 'Cheaper Alternatives'}
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {medicineInfo.alternatives.map((alt, index) => (
                  <div key={index} className="p-4 border border-green-200 rounded-lg bg-green-50">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-green-800">{alt.name}</h5>
                      <span className="text-sm font-semibold text-green-600">{alt.savings} saved</span>
                    </div>
                    <p className="text-green-700 font-medium">{alt.price}</p>
                    <Button size="sm" variant="outline" className="w-full mt-3 border-green-300 text-green-700 hover:bg-green-100">
                      {language === 'hindi' ? 'खरीदें' : 'Buy Now'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-blue-500" />
                <h4 className="text-lg font-semibold">
                  {language === 'hindi' ? 'उपलब्धता' : 'Availability'}
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">
                      {language === 'hindi' ? 'पर्चा' : 'Prescription'}
                    </p>
                    <p className="text-sm text-gray-600">{medicineInfo.availability.prescription}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">
                      {language === 'hindi' ? 'दुकानें' : 'Stores'}
                    </p>
                    <p className="text-sm text-gray-600">{medicineInfo.availability.stores}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">
                      {language === 'hindi' ? 'ऑनलाइन' : 'Online'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {medicineInfo.availability.online 
                        ? (language === 'hindi' ? 'उपलब्ध' : 'Available') 
                        : (language === 'hindi' ? 'उपलब्ध नहीं' : 'Not Available')
                      }
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-start gap-2 text-gray-500 text-sm p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>
              <strong>
                {language === 'hindi' ? 'अस्वीकरण:' : 'Disclaimer:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'यह जानकारी केवल शिक्षा के लिए है। दवा लेने से पहले हमेशा अपने डॉक्टर की सलाह लें। दवा का दुरुपयोग न करें।'
                : 'This information is for educational purposes only. Always consult your doctor or healthcare provider before taking any medication. Do not self-medicate or exceed recommended dosage.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

