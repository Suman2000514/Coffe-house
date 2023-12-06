import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import MyNavbar from './Navbar';
import Footer from './Footer';
import Product from './Product';
import '../index.css';
import Loader from './Loader';
import logo from '../assets/image/Cofee.png';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const logoAnimation = useSpring({
    from: { transform: 'scale(1.2)' },
    to: { transform: 'scale(1.1)' },
    config: { duration: 1000, reverse: true, loop: true },
  });

  return (
    <>
      <MyNavbar />
    
      
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container fluid className="p-0 mb-0">
            <Row className="m-0 position-relative">
              <Col className="p-0">
                <div>
                  <img
                    src={
                      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    alt="Coffee Shop"
                    className="img-fluid"
                  />
                  <div
                    className="overlay-text text-center position-absolute top-50 start-50 translate-middle text-white font-roboto w-100"
                    style={{ zIndex: 1 }}
                  >
                    <animated.img
                      src={logo}
                      alt=""
                      className="mb-3 animate-bounce"
                      style={{
                        width: '8rem',
                        height: 'auto',
                        marginBottom: '0.75rem',
                        ...logoAnimation,
                      }}
                    />
                    <h1 className="text-6xl font-strong mb-2 " style={{ color: '#FFD700' }}>
                      Welcome to Our Coffee Shop
                    </h1>
                    <p className="text-lg mb-4">Discover the finest coffee blends crafted with passion.</p>
                    <Link to="/menu">
                      <Button
                        variant="dark"
                        className="font-extrabold px-6 py-2 rounded-full mt-1 hover-bg-coffee-dark animate-bounce"
                      >
                        Explore Our Menu
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="p-4">
            <Row>
              <Col>
                <Product />
              </Col>
            </Row>
          </Container>
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
