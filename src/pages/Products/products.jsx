// src/pages/Products/Products.jsx
import { useState } from 'react';
import { api } from '../../services/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';

export default function Products() {
  const [productData, setProductData] = useState({ name: '', description: '', price: 0, quantity: 0, id: null });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productData.id) {
        await api.put(`/products/${productData.id}`, productData);
      } else {
        await api.post('/products', productData);
      }
      setProductData({ name: '', description: '', price: 0, quantity: 0, id: null });
    } catch (error) {
      console.error('Erro ao gerenciar produto:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/products/${productData.id}`);
      setProductData({ name: '', description: '', price: 0, quantity: 0, id: null });
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  return (
    <>
      <NavBar />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome do Produto" name="name" value={productData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formProductDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" placeholder="Descrição do Produto" name="description" value={productData.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formProductPrice">
          <Form.Label>Preço</Form.Label>
          <Form.Control type="number" placeholder="Preço" name="price" value={productData.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formProductQuantity">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control type="number" placeholder="Quantidade" name="quantity" value={productData.quantity} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>Salvar</Button>
        <Button variant="danger" onClick={handleDelete} disabled={!productData.id} style={{ marginLeft: '10px', marginTop: '10px' }}>Deletar</Button>
      </Form>
    </>
  );
}