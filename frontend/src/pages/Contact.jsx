import React from 'react';
import './ContactUs.css';
import Navbar from '../Component/Navbar';

function ContactUs() {
  return (
    <div className="ContactUsPage bg-amber-400">
    <Navbar/>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8">We'd love to hear from you! Please fill out the form below or reach out to us directly using the contact details provided.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="contact-form">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="border rounded px-4 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="border rounded px-4 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input type="text" className="border rounded px-4 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="border rounded px-4 py-2 w-full h-32"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit</button>
            </form>
          </div>
          
          <div>
            <div className="contact-info mb-8">
              <h2 className="text-2xl font-bold mb-2">Contact Details</h2>
              <p>Email: ajayvishwakarma2k21@gmail.com</p>
              <p>Phone: +91 8817956640</p>
              <p>Address: VIT Bhopal University, Bhopal, Madhya - Pradesh, India</p>
            </div>
            
            
            <div className="google-map mb-8">
              <h2 className="text-2xl font-bold mb-2">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13477.577910172891!2d76.86056445!3d23.079177450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1741354967146!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="faq">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <ul>
                <li className="mb-2"><strong>Q:</strong> How can I contact customer support?</li>
                <li className="mb-2"><strong>A:</strong> You can contact us via the form above or directly through our email and phone number provided.</li>
                <li className="mb-2"><strong>Q:</strong> What are your business hours?</li>
                <li className="mb-2"><strong>A:</strong> Our business hours are Monday to Friday, 9 AM to 5 PM.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;