import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import ProductCard from '../../components/ProductCard';
import Button from 'react-bootstrap/Button'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get('/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Erro ao carregar itens do carrinho:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (productId) => {
    try {
      await api.delete(`/cart/removeCart/${productId}`);
      setCartItems(cartItems.filter(item => item.productId !== productId));
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
    }
  };

  const handleBackToHome = () => {
    navigate('/home'); 
  };

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.map((item) => (
        <ProductCard
          key={item.productId}
          product={item.Product}
          onAddToCart={() => {}}
          onDelete={handleRemoveFromCart}
          onEdit={() => {}}
        />
      ))}
      <Button variant="secondary" onClick={handleBackToHome} style={{ marginTop: '20px' }}>
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};

export default Cart;