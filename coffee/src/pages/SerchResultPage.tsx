import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

interface Product {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
}

const SearchResultPage: React.FC = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get<{ data: Product[] }>('http://localhost:3000/coffee');
      setProducts(resp.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const lowerCaseQuery = searchQuery?.toLowerCase() || '';
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.type.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div>
      <h1 className='mt-5 mb-5 m-auto text-center text-dark'>Search Results</h1>
      {isLoading ? (
        <Loader />
      ) : filteredProducts.length === 0 ? (
        <p>No results found for '{searchQuery}'</p>
      ) : (
        <div className="row justify-content-center">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.type}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
