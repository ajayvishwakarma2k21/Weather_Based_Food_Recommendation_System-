import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import './About.css';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Navbar />
      <main>
        <section className="card">
          <h2>About Us</h2>
          <p>Welcome to the Food Recommendation App. Our mission is to provide personalized food recommendations based on the weather in your location.</p>
        </section>
        <section className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: ajayvishwakarma2k21@gmail.com</p>
          <p>Phone: +91-8817956640</p>
        </section>
        <section className="introduction">
          <h2>Introduction</h2>
          <p>We are a team of food enthusiasts and tech experts dedicated to enhancing your culinary experience by leveraging weather data.</p>
        </section>
        <section className="core-values">
          <h2>Core Values & Philosophy</h2>
          <ul>
            <li>Innovation</li>
            <li>Quality</li>
            <li>Customer Satisfaction</li>
            <li>Sustainability</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;