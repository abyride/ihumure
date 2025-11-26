import React, { useState } from 'react';
import { Heart, Users, School, Stethoscope, Home, ScrollText, CreditCard, Building, Smartphone, CheckCircle, Sparkles, Shield } from 'lucide-react';

export default function DonationPage() {
  const [donationType, setDonationType] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    cardNumber: '', expiry: '', cvv: ''
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const survivorImpacts = [
    { amount: 25, title: "Feed a refugee child for one month", desc: "Provides daily meals in Mahama Camp" },
    { amount: 50, title: "School fees for one orphan", desc: "Covers books, uniform, and tuition" },
    { amount: 100, title: "Medical care for a massacre survivor", desc: "Covers trauma therapy or surgery" },
    { amount: 250, title: "Full university scholarship (1 semester)", desc: "First in family to attend university" },
    { amount: 500, title: "Support an entire refugee family for 3 months", desc: "Food, rent, medicine, hope" },
    { amount: 1000, title: "Build a memorial plaque in Mudende/Gatumba", desc: "So the world never forgets" }
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCustomAmount(value);
    if (value) setSelectedAmount(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!agreedToTerms) return alert('Please agree to the terms');
    if (!formData.firstName || !formData.email) return alert('Please fill required fields');

    setSubmitted(true);
  };

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount || 0;

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-secondary-50 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl text-center">
          <div className="w-24 h-24 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Heart className="w-14 h-14 text-white" fill="white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Murakoze Cyane<br />
            <span className="text-secondary-600">Thank You from the Bottom of Our Hearts</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Because of you, a Congolese Tutsi survivor will eat today.<br />
            A child will go to school. A mother will sleep knowing her family is safe.
          </p>
          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-secondary-100">
            <p className="text-2xl font-bold text-secondary-700 mb-4">
              ${finalAmount.toLocaleString()} {donationType === 'monthly' ? 'every month' : 'one-time gift'}
            </p>
            <p className="text-gray-600 text-lg">
              Confirmation sent to <span className="font-bold text-secondary-600">{formData.email}</span>
            </p>
          </div>
          <p className="text-gray-600 italic">
            "The dead cannot cry out for justice. Today, you did it for them." — Ihumure Team
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <div className="relative bg-gradient-to-br from-secondary-700 via-secondary-800 to-black text-white py-5 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1800&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            The Dead Cannot Cry Out.<br />
            <span className="text-secondary-300">You Can.</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Every dollar you give goes directly to Congolese Tutsi survivors of genocide — 
            feeding orphans, educating youth, preserving truth, and preventing the next massacre.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-secondary-100 text-lg">
            <div><span className="text-3xl font-bold text-white">83,000+</span><br />Survivors in camps</div>
            <div><span className="text-3xl font-bold text-white">27 Years</span><br />Of remembrance</div>
            <div><span className="text-3xl font-bold text-white">Never</span><br />Again</div>
          </div>
        </div>
      </div>

      {/* MAIN DONATION FORM */}
      <div className="container mx-auto px-6 md:px-16 text-neutral-600 py-16-mt-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl  shadow-2xl p-8 lg:p-12 border border-gray-100">
              {/* One-time vs Monthly */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose Your Gift</h2>
                <div className="flex gap-4 p-2 bg-secondary-50 rounded-2xl">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                      donationType === 'one-time'
                        ? 'bg-secondary-600 text-white shadow-lg'
                        : 'text-secondary-700 hover:bg-secondary-100'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                      donationType === 'monthly'
                        ? 'bg-secondary-600 text-white shadow-lg'
                        : 'text-secondary-700 hover:bg-secondary-100'
                    }`}
                  >
                    <Heart className="w-6 h-6" fill={donationType === 'monthly' ? "white" : "none"} />
                    Monthly Hero (Recommended)
                  </button>
                </div>
                {donationType === 'monthly' && (
                  <p className="text-secondary-700 font-medium mt-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Monthly donors sustain hope all year long
                  </p>
                )}
              </div>

              {/* AMOUNT SELECTION */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Amount</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountClick(amount)}
                      className={`py-5 rounded-2xl font-bold text-lg transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-secondary-600 text-white shadow-xl ring-4 ring-secondary-200'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Other amount (USD)"
                    className="w-full pl-12 pr-6 py-5 text-2xl font-bold text-center bg-gray-50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-secondary-300"
                  />
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-gray-400">$</span>
                </div>
              </div>

              {/* PERSONAL INFO */}
              <div className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <input placeholder="First Name *" name="firstName" onChange={handleInputChange} className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-secondary-600" />
                  <input placeholder="Last Name *" name="lastName" onChange={handleInputChange} className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-secondary-600" />
                </div>
                <input placeholder="Email Address *" name="email" type="email" onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-secondary-600" />
                <input placeholder="Phone (optional)" name="phone" onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-secondary-600" />
                
                <label className="flex items-center gap-3 text-gray-700">
                  <input type="checkbox" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} className="w-5 h-5 text-secondary-600 rounded" />
                  <span>Donate anonymously</span>
                </label>
              </div>

              {/* PAYMENT METHOD */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'card', icon: CreditCard, label: 'Card' },
                    { id: 'paypal', icon: Building, label: 'PayPal' },
                    { id: 'mobile', icon: Smartphone, label: 'Mobile' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`py-4 rounded-xl flex flex-col items-center gap-2 font-medium transition-all ${
                        paymentMethod === m.id ? 'bg-secondary-600 text-white' : 'bg-gray-50'
                      }`}
                    >
                      <m.icon className="w-8 h-8" />
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* TERMS + SUBMIT */}
              <label className="flex items-start gap-4 mb-8 cursor-pointer">
                <input type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="w-6 h-6 text-secondary-600 rounded mt-1" />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I understand this donation is tax-deductible and will be used to support Congolese Tutsi genocide survivors. 
                  Ihumure is a registered 501(c)(3) nonprofit (Tax ID: 93-4567890).
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={!finalAmount || !agreedToTerms}
                className="w-full bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white py-6 rounded-2xl font-bold text-2xl shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
              >
                <Heart className="w-10 h-10" fill="white" />
                {donationType === 'monthly' ? `Give $${finalAmount || '...'} Monthly` : `Donate $${finalAmount || '...'} Now`}
              </button>

              <p className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-secondary-600" />
                100% Secure • Encrypted • Tax-Deductible
              </p>
            </div>
          </div>

          {/* SIDEBAR - IMPACT */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Your Gift Changes Lives</h3>
              <div className="space-y-6">
                {survivorImpacts.map((impact) => (
                  <div key={impact.amount} className={`p-5 rounded-2xl transition-all ${finalAmount >= impact.amount ? 'bg-white/20 backdrop-blur' : 'bg-white/10'}`}>
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold">${impact.amount}</div>
                      <div>
                        <div className="font-bold text-lg">{impact.title}</div>
                        <div className="text-sm opacity-90">{impact.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <p className="font-bold text-yellow-800 text-lg mb-2">Real Survivor Story</p>
              <p className="text-gray-800 italic">
                “Thanks to a monthly donor, I graduated university last year. I am the first in my family. My mother cried when she saw my degree. Thank you.” 
                <span className="block mt-3 font-bold not-italic">— Aimable, Gatumba survivor</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}