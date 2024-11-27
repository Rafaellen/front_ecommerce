// src/components/ProductCard.jsx
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>R${product.price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product.id)}>
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
}