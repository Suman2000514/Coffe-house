

import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css'

const Product = () => {
  return (
    <div className='bg-dark mt-0'>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={4} className="mb-4 hover-card">
            <Link to="./menu" style={{ textDecoration: "none" }}>
              <Card style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", height: "52vh", transition: "transform 1s, box-shadow 0.3s" }} className='bg-dark text-white'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coffee 1" />
                <Card.Body>
                  <Card.Title>Black Coffee</Card.Title>
                  <Card.Text>
                    A classic black coffee with a rich and bold flavor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={4} className="mb-4 hover-card">
            <Link to="./menu" style={{ textDecoration: "none" }}>
              <Card style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", height: "52vh", transition: "transform 0.3s, box-shadow 0.3s" }} className='bg-dark text-white'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coffee 2" />
                <Card.Body>
                  <Card.Title>Cappuccino</Card.Title>
                  <Card.Text>
                    Espresso combined with steamed milk and topped with a layer of frothed milk.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={4} className="mb-4 hover-card">
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <Card style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", height: "52vh", transition: "transform 0.3s, box-shadow 0.3s" }} className='bg-dark text-white'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coffee 3" />
                <Card.Body>
                  <Card.Title>Latte</Card.Title>
                  <Card.Text>
                    Espresso with steamed milk and a light layer of frothed milk on top.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
