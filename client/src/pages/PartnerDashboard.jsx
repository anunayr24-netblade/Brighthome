import React, { useState, useMemo } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { locations, searchLocations } from '../data/locations';

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState({});
  const [searchState, setSearchState] = useState('');
  const [showAddLocation, setShowAddLocation] = useState(false);
  const [customLocation, setCustomLocation] = useState('');
  const [customLocations, setCustomLocations] = useState([]);
  const [showCustomSuccess, setShowCustomSuccess] = useState(false);

  // Filter states based on search
  const filteredStates = useMemo(() => {
    if (!searchState) return locations;
    return searchLocations(searchState);
  }, [searchState]);

  // Handle state selection
  const toggleState = (stateName) => {
    setSelectedStates(prev => {
      const isSelected = prev.includes(stateName);
      if (isSelected) {
        const newSelected = prev.filter(s => s !== stateName);
        setSelectedCities(prevCities => {
          const updated = { ...prevCities };
          delete updated[stateName];
          return updated;
        });
        return newSelected;
      } else {
        return [...prev, stateName];
      }
    });
  };

  // Handle city selection for a state
  const toggleCity = (stateName, cityName) => {
    setSelectedCities(prev => {
      const cities = prev[stateName] || [];
      const isSelected = cities.includes(cityName);
      if (isSelected) {
        return {
          ...prev,
          [stateName]: cities.filter(c => c !== cityName)
        };
      } else {
        return {
          ...prev,
          [stateName]: [...cities, cityName]
        };
      }
    });
  };

  // Handle select all cities for a state
  const selectAllCities = (stateName) => {
    const state = locations.find(s => s.name === stateName);
    if (state) {
      const allCities = [state.capital, ...state.majorCities];
      setSelectedCities(prev => ({
        ...prev,
        [stateName]: allCities
      }));
    }
  };

  // Add custom location
  const handleAddCustomLocation = (e) => {
    e.preventDefault();
    if (customLocation.trim() && !customLocations.includes(customLocation)) {
      setCustomLocations(prev => [...prev, customLocation]);
      setCustomLocation('');
      setShowCustomSuccess(true);
      setTimeout(() => setShowCustomSuccess(false), 3000);
    }
  };

  // Remove custom location
  const removeCustomLocation = (location) => {
    setCustomLocations(prev => prev.filter(l => l !== location));
  };

  // Calculate statistics
  const totalCities = Object.values(selectedCities).reduce((acc, curr) => acc + curr.length, 0);
  const totalLocations = selectedStates.length + customLocations.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 animate-fadeIn">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4 animate-headingFadeIn">
              Growth Partner Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage your service areas, track performance, and grow your business with BrightHome
            </p>
          </div>
        </div>

        {/* Partner Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fadeInUp border-left-4 border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">John Developer</h3>
                <p className="text-gray-600">Premium Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl">⭐</div>
              <div>
                <p className="text-gray-600 text-sm">Avg Rating</p>
                <p className="text-2xl font-bold text-blue-600">4.8/5.0</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="text-3xl">💰</div>
              <div>
                <p className="text-gray-600 text-sm">Monthly Earnings</p>
                <p className="text-2xl font-bold text-green-600">₹4,82,500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'locations', label: 'Manage Locations', icon: '📍' },
            { id: 'analytics', label: 'Analytics', icon: '📈' },
            { id: 'settings', label: 'Settings', icon: '⚙️' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeInUp">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Active Locations', value: totalLocations, icon: '📍', color: 'blue' },
                { label: 'Cities Covered', value: totalCities, icon: '🌆', color: 'green' },
                { label: 'Jobs Completed', value: '247', icon: '✅', color: 'purple' },
                { label: 'Response Rate', value: '94%', icon: '⚡', color: 'orange' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-xl shadow-lg p-6 border-t-4 border-${stat.color}-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                    </div>
                    <div className="text-4xl">{stat.icon}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'New job assignment', time: '2 hours ago', icon: '🆕' },
                  { action: 'Customer review received', time: '5 hours ago', icon: '⭐' },
                  { action: 'Location added: Mumbai', time: '1 day ago', icon: '📍' },
                  { action: 'Payment processed', time: '2 days ago', icon: '💳' }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{activity.icon}</span>
                      <span className="text-gray-700 font-medium">{activity.action}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Manage Locations Tab */}
        {activeTab === 'locations' && (
          <div className="space-y-6 animate-fadeInUp">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Search States/Cities</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for state, capital, or city..."
                    value={searchState}
                    onChange={(e) => setSearchState(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
                </div>
              </div>

              {/* State Selection Grid */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Select States & Union Territories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto p-2">
                  {filteredStates.map((state, idx) => (
                    <div
                      key={state.id}
                      className="animate-fadeInUp"
                      style={{ animationDelay: `${idx * 30}ms` }}
                    >
                      <button
                        onClick={() => toggleState(state.name)}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left font-semibold ${
                          selectedStates.includes(state.name)
                            ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{state.name}</span>
                          <span className={`text-lg ${selectedStates.includes(state.name) ? 'opacity-100' : 'opacity-0'}`}>✓</span>
                        </div>
                        <span className="text-xs text-gray-500 mt-1">Capital: {state.capital}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* City Selection for Selected States */}
              {selectedStates.length > 0 && (
                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Select Cities for Selected States</h3>
                  <div className="space-y-6">
                    {selectedStates.map(stateName => {
                      const state = locations.find(s => s.name === stateName);
                      const allCities = state ? [state.capital, ...state.majorCities] : [];
                      const selectedStateCities = selectedCities[stateName] || [];

                      return (
                        <div key={stateName} className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-800">{stateName}</h4>
                            <button
                              onClick={() => selectAllCities(stateName)}
                              className="text-sm px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                            >
                              Select All
                            </button>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {allCities.map(city => (
                              <label
                                key={city}
                                className="flex items-center gap-2 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedStateCities.includes(city)}
                                  onChange={() => toggleCity(stateName, city)}
                                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                                />
                                <span className="text-sm text-gray-700">{city}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Custom Locations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800">Custom Locations</h3>
                <button
                  onClick={() => setShowAddLocation(!showAddLocation)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  + Add Custom Location
                </button>
              </div>

              {showAddLocation && (
                <form onSubmit={handleAddCustomLocation} className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location Name</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g., Greater Mumbai, Eastern Suburbs"
                      value={customLocation}
                      onChange={(e) => setCustomLocation(e.target.value)}
                      className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      Add
                    </button>
                  </div>
                </form>
              )}

              {showCustomSuccess && (
                <div className="mb-4 p-3 bg-green-100 border-2 border-green-400 text-green-700 rounded-lg flex items-center gap-2 animate-fadeInUp">
                  <span>✓</span>
                  <span>Custom location added successfully!</span>
                </div>
              )}

              {customLocations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {customLocations.map(location => (
                    <div
                      key={location}
                      className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg flex items-center justify-between hover:shadow-md transition-all duration-300 animate-scaleIn"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📍</span>
                        <span className="font-semibold text-gray-800">{location}</span>
                      </div>
                      <button
                        onClick={() => removeCustomLocation(location)}
                        className="text-red-500 hover:text-red-700 font-bold text-lg transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No custom locations added yet</p>
              )}
            </div>

            {/* Selected Summary */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Coverage Summary</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-blue-100 text-sm">States & UTs</p>
                  <p className="text-3xl font-bold">{selectedStates.length}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Cities</p>
                  <p className="text-3xl font-bold">{totalCities}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Custom Areas</p>
                  <p className="text-3xl font-bold">{customLocations.length}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Performance Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6 h-80 flex flex-col justify-center items-center border-t-4 border-blue-500">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">87%</div>
                  <p className="text-gray-600 text-lg">Overall Performance Score</p>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>

              {/* Earnings Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6 h-80 flex flex-col justify-center items-center border-t-4 border-green-500">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">₹14.5L</div>
                  <p className="text-gray-600 text-lg">Total Earnings (This Quarter)</p>
                  <div className="mt-4 flex gap-1 justify-center">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-12 bg-gradient-to-t from-green-400 to-green-600 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                        style={{ height: `${Math.random() * 48 + 24}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Jobs Distribution */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Jobs by Status</h3>
                <div className="space-y-3">
                  {[
                    { status: 'Completed', count: 187, color: 'bg-green-500', percentage: 76 },
                    { status: 'Pending', count: 34, color: 'bg-yellow-500', percentage: 14 },
                    { status: 'Cancelled', count: 26, color: 'bg-red-500', percentage: 10 }
                  ].map(job => (
                    <div key={job.status}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-700">{job.status}</span>
                        <span className="text-sm font-bold text-gray-800">{job.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${job.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${job.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Customer Satisfaction</h3>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {[5, 4, 3, 2, 1].map(star => (
                    <div key={star} className="text-center">
                      <div className="text-2xl mb-1">{'⭐'.repeat(star)}</div>
                      <div className="text-xs text-gray-600">
                        {star === 5 && '145'}
                        {star === 4 && '87'}
                        {star === 3 && '12'}
                        {star === 2 && '2'}
                        {star === 1 && '1'}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center pt-4 border-t-2 border-gray-200">
                  <p className="text-2xl font-bold text-orange-600">4.8★ Average Rating</p>
                </div>
              </div>
            </div>

            {/* Monthly Growth */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Monthly Growth Trend</h3>
              <div className="h-64 flex items-end justify-around gap-2">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                  <div key={month} className="flex flex-col items-center">
                    <div
                      className="w-8 bg-gradient-to-t from-indigo-400 to-indigo-600 rounded-t-lg hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
                      style={{ height: `${40 + i * 15}px` }}
                    ></div>
                    <p className="text-xs text-gray-600 mt-2">{month}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6 animate-fadeInUp">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Profile Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    defaultValue="John Developer Services"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91-9999-999-999"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-cyan-500">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h3>
              <div className="space-y-3">
                {['Email notifications for new jobs', 'SMS alerts for urgent requests', 'Weekly performance reports', 'Monthly earnings summary'].map(pref => (
                  <label key={pref} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600 cursor-pointer" />
                    <span className="text-gray-700">{pref}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Account Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                  Save Changes
                </button>
                <button className="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold">
                  Download My Data
                </button>
                <button className="w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold">
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PartnerDashboard;
