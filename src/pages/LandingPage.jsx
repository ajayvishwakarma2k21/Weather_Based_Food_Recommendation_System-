import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


function LandingPage() {
  return (
    <div className="LandingPage flex flex-col min-h-screen bg-cover bg-center rounded-2xl" style={{ backgroundImage: 'url(../../images/bg1.jpg)',  }}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        
        <section className="hero bg-cover bg-center h-96 flex items-center justify-center text-white rounded-2xl" style={{ backgroundImage: 'url(../../images/bg7.jpg)', }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Discover the Best Food Recommendations for Any Weather!</h1>
            <Link to="/app">
              <button className="bg-blue-500 text-white rounded px-4 py-2">Get Started</button>
            </Link>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="features py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature-card p-4 bg-gray-100 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
              <p>Get food recommendations tailored to your preferences and weather conditions.</p>
            </div>
            <div className="feature-card p-4 bg-gray-100 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Weather-Based Insights</h3>
              <p>Receive insights and suggestions based on the current weather in your location.</p>
            </div>
            <div className="feature-card p-4 bg-gray-100 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p>Our app is user-friendly and easy to navigate, making it simple to find the best food recommendations.</p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us py-8 bg-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-center max-w-2xl mx-auto">We are dedicated to providing the best food recommendations based on the weather. Our mission is to enhance your culinary experience by leveraging weather data to suggest the perfect meals for any occasion.</p>
          <div className="text-center mt-4">
            <Link to="/about">
              <button className="bg-blue-500 text-white rounded px-4 py-2">Learn More</button>
            </Link>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Try Our AI-Powered Food Recommendation Now!</h2>
          <Link to="/app">
            <button className="bg-blue-500 text-white rounded px-4 py-2">Get Started</button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;