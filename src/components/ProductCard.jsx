// src/components/ProductCard.jsx
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProductCard({ product, onAddToCart }) {
  const price = typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0;
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>R${price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product.id)}>
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
}