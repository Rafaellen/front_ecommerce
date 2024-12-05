// src/components/NavBar.jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/products">Produtos</Nav.Link>
          <Nav.Link href="/cart">Carrinho</Nav.Link>
          <Nav.Link href="/payment">Pagamento</Nav.Link>
          <Nav.Link href="/suppliers">Fornecedores</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}