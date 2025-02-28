import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function MainApp() {
  const [location, setLocation] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/recommend', { location });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch recommendations');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Food Recommendation Based on Weather</h1>
        <div className="mb-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location (e.g., Bhopal)"
            className="border rounded px-4 py-2 w-full md:w-1/2"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white rounded px-4 py-2 mt-2 md:mt-0 md:ml-2"
          >
            Get Recommendations
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Recommendations:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recommendations.map((food, index) => (
              <div key={index} className="bg-white rounded shadow p-4">
                <img src={food.image} alt={food.name} className="w-full h-32 object-cover rounded-2xl" />
                <h3 className="text-lg font-bold mb-2">{food.name}</h3>
                <p className="text-gray-700">{food.description}</p>
                <p className="text-gray-500 mt-2">Calories: {food.calories}</p>
                <p className="text-gray-500">Ingredients: {food.ingredients.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;