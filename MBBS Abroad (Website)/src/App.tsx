import React, { useState } from 'react';
import { GraduationCap, Globe2, ClipboardCheck, Send, MapPin, Phone, Mail, User, CheckCircle2, Clock, DollarSign, Award } from 'lucide-react';

// Country data
const countries = [
  { name: 'Russia', flag: '🇷🇺', fee: '$4,000/year', duration: '6 years', ranking: '#1 Choice', features: ['World-Class Facilities', 'English Medium'] },
  { name: 'Uzbekistan', flag: '🇺🇿', fee: '$3,500/year', duration: '5 years', ranking: '#2 Choice', features: ['Affordable Living', 'Modern Campus'] },
  { name: 'Kazakhstan', flag: '🇰🇿', fee: '$3,800/year', duration: '5 years', ranking: 'Top Rated', features: ['Research Focus', 'Clinical Training'] },
  { name: 'Philippines', flag: '🇵🇭', fee: '$5,000/year', duration: '5.5 years', ranking: 'Popular', features: ['US Curriculum', 'Beach Location'] },
  { name: 'Georgia', flag: '🇬🇪', fee: '$4,500/year', duration: '6 years', ranking: 'Best Value', features: ['European Standard', 'Rich Culture'] },
  { name: 'Kyrgyzstan', flag: '🇰🇬', fee: '$3,200/year', duration: '5 years', ranking: 'Rising Star', features: ['Low Cost', 'Quality Education'] },
  { name: 'Egypt', flag: '🇪🇬', fee: '$4,200/year', duration: '6 years', ranking: 'Historic', features: ['Ancient Heritage', 'Modern Medicine'] },
];

// Benefits data with enhanced descriptions
const benefits = [
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: 'World-Class Education',
    description: 'Internationally recognized medical degrees with state-of-the-art facilities and experienced faculty',
    highlight: '100% Recognition'
  },
  {
    icon: <Globe2 className="w-12 h-12" />,
    title: 'Global Exposure',
    description: 'Experience diverse healthcare systems and build an international network in the medical field',
    highlight: '7+ Countries'
  },
  {
    icon: <ClipboardCheck className="w-12 h-12" />,
    title: 'Affordable Fees',
    description: 'Cost-effective medical education without compromising on quality and standards',
    highlight: 'Save 70%'
  },
];

// Key features
const features = [
  { icon: <CheckCircle2 className="w-6 h-6" />, text: 'WHO Recognized' },
  { icon: <Clock className="w-6 h-6" />, text: 'Flexible Duration' },
  { icon: <DollarSign className="w-6 h-6" />, text: 'Scholarship Available' },
  { icon: <Award className="w-6 h-6" />, text: 'Licensed Practice' },
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', country: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50"></div>
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Study MBBS Abroad
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Your Gateway to Global Medical Education</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-blue-300 mr-2">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          <a 
            href="#apply" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Begin Your Journey
            <Send className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Why Study MBBS Abroad?
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Discover unparalleled opportunities for medical education across the globe
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  {benefit.highlight}
                </div>
                <div className="text-blue-600 group-hover:text-indigo-600 transition-colors duration-300 flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Top Countries for MBBS
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Choose from our carefully selected destinations offering quality medical education
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                    {country.ranking}
                  </div>
                  <div className="p-6">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{country.name}</h3>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2 text-blue-600" />
                        {country.fee}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        {country.duration}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      {country.features.map((feature, idx) => (
                        <p key={idx} className="flex items-center text-sm text-gray-600 mb-1">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Admission Process
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Your journey to becoming a medical professional starts here
          </p>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Document Submission', content: 'Submit academic records and passport for initial assessment' },
              { step: 2, title: 'Application Review', content: 'Our team evaluates your documents and eligibility criteria' },
              { step: 3, title: 'Admission Letter', content: 'Receive your official acceptance letter from the university' },
              { step: 4, title: 'Visa Process', content: 'Get complete assistance with visa application and travel arrangements' },
            ].map((item) => (
              <div key={item.step} className="group flex items-start hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Apply Now
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Take the first step towards your medical career
          </p>
          {submitted ? (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-8 py-6 rounded-2xl relative text-center">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <p className="text-2xl font-bold mb-2">Thank you for your application!</p>
              <p className="text-green-600">We will contact you shortly to discuss your medical education journey.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-12 w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-12 w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-12 w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="country">
                    Preferred Country
                  </label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="pl-12 w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Study MBBS Abroad</h3>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Your trusted partner in international medical education, helping aspiring doctors achieve their dreams.
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-x-8 mb-8">
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Contact Us</a>
          </div>
          <div className="text-center text-blue-200 space-y-2">
            <p>© 2025 Study MBBS Abroad. All rights reserved.</p>
            <p className="text-sm">Made With ❤️ By Suryanshu Nabheet</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;