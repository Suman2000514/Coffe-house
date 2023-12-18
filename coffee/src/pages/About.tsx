import React from 'react';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className='bg-dark '>
        <MyNavbar />
        <br />
        <br />
        <br />
        <br />
        <div className="text-white m-5">
          <div>
            <h1 className='text-center' style={{ fontSize: '24px', color: '#FFD700', fontWeight: 'bold' }}>About Us</h1>
            <p className='text-center'>Welcome to our Coffee House!</p>
            <div className='d-md-flex justify-content-center gap-md-5'>
              <div>
                <h2 style={{ fontSize: '24px', color: '#FFD700', fontWeight: 'bold' }}>Our Story</h2>
                <p className='text-justify'>
                  Since its inception in 1990, our coffee house has evolved into a beloved community hub, embracing coffee aficionados in a haven of warmth and hospitality. At the heart of our ethos is an unwavering commitment to excellence, evident in every cup we serve. Our coffee is not just a beverage; it's a testament to our meticulous sourcing and preparation, ensuring a taste experience that transcends expectations.
                </p>
              </div>
              <img src="https://plus.unsplash.com/premium_photo-1670445287612-d6fed960c910?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ height: '300px', width: "500px" }} />
            </div>
            <h2 style={{ fontSize: '24px', color: '#FFD700', fontWeight: 'bold' }}>Our Mission</h2>
            <p>
              At Coffee House, our mission transcends the mere act of serving coffee; it is a holistic commitment to cultivating an environment that nurtures both the soul and the senses. Steeped in the rich aroma of freshly brewed beans, our establishment aspires to be more than a mere purveyor of beverages—it is a haven where the essence of community flourishes.
            </p>

            <h2 style={{ fontSize: '24px', color: '#FFD700', fontWeight: 'bold' }}>Values</h2>
            <ul>
              <li>Quality: We prioritize the quality of our coffee and ingredients.</li>
              <li>Community: Building a sense of community is at the heart of what we do.</li>
              <li>Comfort: We want our customers to feel comfortable and at home.</li>
            </ul>

            <h2 style={{ fontSize: '24px', color: '#FFD700', fontWeight: 'bold' }}>Meet the Team</h2>
            <p>
              Our team is comprised of passionate individuals who share a love for coffee and a commitment to providing an exceptional experience for our customers.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
