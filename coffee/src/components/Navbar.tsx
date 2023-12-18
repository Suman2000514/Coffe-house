
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function MyNavbar() {


  return (
    <Navbar expand="lg" className="bg-transparent text-light fixed-top my-navbar">
      <Container fluid className='d-flex  flex-wrap' style={{gap:"70%"}} >
        <Navbar.Brand href="/" style={{ fontSize: '24px', color: '#FFD700', fontWeight: 'bold' }}>
          Coffee House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler bg-white"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll> 
            <Nav.Link href="/"  style={{color: '#FFD700'}}>
              Home
            </Nav.Link>
            <Nav.Link href="/menu" style={{color: '#FFD700'}} >
              Menu
            </Nav.Link>
            <Nav.Link href="/about" style={{color: '#FFD700'}} >
              About Us
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
