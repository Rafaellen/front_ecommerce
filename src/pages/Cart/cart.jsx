// src/pages/Cart/Cart.jsx
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import NavBar from '../../components/NavBar';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const { data } = await api.get('/cart');
        setCartItems(data);
      } catch (error) {
        console.error('Erro ao carregar o carrinho:', error);
      }
    }
    fetchCart();
  }, []);

  const handleRemoveFromCart = async (productId) => {
    try {
      await api.delete(`/cart/remove/${productId}`);
      setCartItems(cartItems.filter(item => item.productId !== productId));
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h2>Carrinho</h2>
        {cartItems.map(item => (
          <div key={item.productId}>
            <span>{item.productName} - {item.quantity}</span>
            <button onClick={() => handleRemoveFromCart(item.productId)}>Remover</button>
          </div>
        ))}
      </div>
    </>
  );
}