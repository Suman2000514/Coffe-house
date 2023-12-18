import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>Contact Us</h5>
            <p>Shankhamul</p>
            <p>Email: info@coffeeshop.com</p>
            <p>Phone: 051-22345</p>
          </Col>
          <Col md={4} sm={6}>
            <h5>Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.07301179195!2d85.3193951!3d27.6841382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b6652b15fd%3A0x81876f28dbf7f39f!2sHotel%20Himalaya!5e0!3m2!1sen!2snp!4v1701761198285!5m2!1sen!2snp"
              loading="lazy"
              className='w-100'
              title="Google Map"
            ></iframe>
          </Col>
          <Col md={4} sm={12}>
            <h5>Opening Hours</h5>
            <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
            <p>Saturday: 8:00 AM - 10:00 PM</p>
            <p>Sunday: Closed</p>
          </Col>
        </Row>
      </Container>

      <div className="text-center mt-3">
        <p>&copy; 2023 Coffee House</p>
      </div>
    </footer>
  );
};

export default Footer;
