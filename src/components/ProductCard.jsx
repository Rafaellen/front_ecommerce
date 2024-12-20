import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { api } from '../services/api';

export default function ProductCard({ product, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: name === 'price' || name === 'stock' ? parseFloat(value) || 0 : value });
  };

  const handleEditSubmit = async () => {
    try {
      await api.put(`/products/${editedProduct.id}`, editedProduct);
      onEdit(editedProduct);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao editar produto:', error);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await api.post('http://localhost:8080/cart/addCart', { productId, quantity: 1 });
      alert('Produto adicionado ao carrinho com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        {isEditing ? (
          <>
            <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
            <input type="text" name="description" value={editedProduct.description} onChange={handleChange} />
            <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
            <input type="number" name="stock" value={editedProduct.stock} onChange={handleChange} />
            <Button variant="success" onClick={handleEditSubmit}>Salvar</Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancelar</Button>
          </>
        ) : (
          <>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Preço: R${product.price}</Card.Text>
            <Card.Text>Estoque: {product.stock}</Card.Text>
            <Button variant="primary" onClick={() => handleAddToCart(product.id)}>
              Adicionar ao Carrinho
            </Button>
            <Button variant="info" onClick={() => setIsEditing(true)}>Editar</Button>
            <Button variant="danger" onClick={() => onDelete(product.id)}>Deletar</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}