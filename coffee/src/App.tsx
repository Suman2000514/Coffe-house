import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/View';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import SearchResultPage from './pages/SerchResultPage';
import About from './pages/About';

function App() {
  return (
    <>
    
    <div className='bg-dark'>
    
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<View />} />
        <Route path="/search-results" element={<SearchResultPage />} />
          <Route path="/about" element={<About/>} />
       

     
        
      </Routes>

      
    </div>
    </>
  );
}

export default App;
