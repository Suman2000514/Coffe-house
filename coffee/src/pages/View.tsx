import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Image } from 'react-bootstrap';
import MyNavbar from '../components/Navbar';
import Loader from '../components/Loader';

import { FaShare } from 'react-icons/fa';  
import Footer from '../components/Footer';
import Typography from '@mui/joy/Typography';

const View = () => {
  const [products, setProducts] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getProductsById = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const resp = await axios.get(`http://localhost:3000/coffee/${id}`);
      setProducts(resp.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsById();
  }, [id]);

  const shareProduct = async () => {
    try {
      await navigator.share({
        title: 'Product Share',
        text: `${products.data.name} - ${products.data.description}`,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="min-vh-100">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container">
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="shadow-sm" style={{ marginTop: "10rem", marginBottom: "10rem", backgroundColor: "#6a413c" }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image
                        src={products.data.image}
                        alt=""
                        fluid
                        rounded
                        className="w-100 h-100"
                      />
                    </Col>
                    <Col md={8} className="d-flex flex-column justify-content-center">
                      <Card.Body className='mt-5 text-white'>
                        <Typography  className="mb-3 text-white">
                          {products.data.name}
                        </Typography>
                        <Typography className="text-white">Price: ${products.data.price}</Typography>
                        <Typography className="text-white">Type: {products.data.type}</Typography>
                        <Typography className="text-white">Origin: {products.data.origin}</Typography>
                        <Typography className="mt-3 text-white">
                          Description: {products.data.description}
                        </Typography>
                        <div className="d-flex mt-3">
                          <button onClick={shareProduct} className="me-2">
                            <FaShare size={32} />
                          </button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default View;
