import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button as BootstrapButton } from 'react-bootstrap';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SearchIcon from '@mui/icons-material/Search';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getProducts = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const resp = await axios.get('http://localhost:3000/coffee');
      setProducts(resp.data.data);
      setFilteredProducts(resp.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleFilter = (type: string | null) => {
    setFilterType(type);
    if (type) {
      const filtered = products.filter((product) => product.type === type);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.type.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className='bg-dark'>
        <MyNavbar />
        <br />
        <br />
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <h1 className='mt-5 mb-5 m-auto text-center text-white'>Menu</h1>
            <Row className="justify-content-center mb-5">
              <Col xs={12} md={8} lg={6}>
                <Form>
                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        placeholder="Search by name or type"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                      />
                      <Button
                        style={{backgroundColor:"#6a413c"}}
                        onClick={() => handleSearch(searchQuery)}
                      >
                        <SearchIcon />
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col xs={12} md={8} lg={6}>
                <div className='d-flex gap-3 flex-wrap ms-4'>
                  <BootstrapButton
                    onClick={() => handleFilter(null)}
                    variant="warning"
                    size="lg"
                  >
                    All
                  </BootstrapButton>
                  <BootstrapButton
                    onClick={() => handleFilter('Blend')}
                    variant="warning"
                    size="lg"
                  >
                    Blend
                  </BootstrapButton>
                  <BootstrapButton
                    onClick={() => handleFilter('Dark Roast')}
                    variant="warning"
                    size="lg"
                  >
                    Dark Roast
                  </BootstrapButton>
                  <BootstrapButton
                    onClick={() => handleFilter('Light Roast')}
                    variant="warning"
                    size="lg"
                  >
                    Light Roast
                  </BootstrapButton>
                  <BootstrapButton
                    onClick={() => handleFilter('Medium Roast')}
                    variant="warning"
                    size="lg"
                  >
                    Medium Roast
                  </BootstrapButton>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              {filteredProducts.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      backgroundColor: '#6a413c',
                      width: 320,
                      maxWidth: '100%',
                      margin:"auto",
                      marginBottom: '20px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                    component="div"
                  >
                    <CardOverflow>
                      <AspectRatio sx={{ minWidth: 200 }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                      <Link
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                      >
                        {product.name}
                      </Link>
                      <Link
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                      >
                        {product.type}
                      </Link>
                      <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: 'xl' }}
                        endDecorator={
                          <Chip
                            component="span"
                            size="sm"
                            variant="soft"
                            color="success"
                          >
                            {product.sale ? 'On Sale' : 'Regular Price'}
                          </Chip>
                        }
                      >
                        $ {product.price}
                      </Typography>
                    </CardContent>
                    <CardOverflow>
                      <Button
                        onClick={(e) => navigate(`/menu/${product.id}`)}
                        variant="solid"
                        style={{ backgroundColor: "#FFD700", color: "black" }}
                        size="lg"
                      >
                        View More
                      </Button>
                    </CardOverflow>
                  </Card>
                </Col>
              ))}
            </Row>

            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
