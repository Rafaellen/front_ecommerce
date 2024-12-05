import { useState } from 'react';
import { api } from '../../services/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';

export default function Products() {
  const [productData, setProductData] = useState({ name: '', description: '', price: 0, stock: 0, id: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const convertedValue = (name === "price" || name === "stock") ? parseFloat(value) || 0 : value;
    setProductData({ ...productData, [name]: convertedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Dados do produto antes da submissão:', productData);
      
      if (productData.id) {
        await api.put(`/products/${productData.id}`, productData);
      } else {
        await api.post('/products', productData);
      }
      
      setProductData({ name: '', description: '', price: 0, stock: 0, id: null });
    } catch (error) {
      console.error('Erro ao gerenciar produto:', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (!productData.id) {
        console.log('Nenhum produto selecionado para deletar.');
        return;
      }
      
      console.log('Deletando produto com ID:', productData.id);
      await api.delete(`/products/${productData.id}`);
      setProductData({ name: '', description: '', price: 0, stock: 0, id: null });
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
          <Form.Control 
            type="text" 
            placeholder="Nome do Produto" 
            name="name" 
            value={productData.name} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formProductDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Descrição do Produto" 
            name="description" 
            value={productData.description} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formProductPrice">
          <Form.Label>Preço</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Preço" 
            name="price" 
            value={productData.price} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="formProductStock">
          <Form.Label>Estoque</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Estoque" 
            name="stock" 
            value={productData.stock} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>Salvar</Button>
        <Button variant="danger" onClick={handleDelete} disabled={!productData.id} style={{ marginLeft: '10px', marginTop: '10px' }}>Deletar</Button>
      </Form>
    </>
  );
}