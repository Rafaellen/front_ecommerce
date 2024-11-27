import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', { email, password });
      
      // Logando a resposta completa para depuração
      console.log('Resposta do Servidor:', response);

      // Verifique se o token está presente na resposta
      if (response.data && response.data.Token) {
        localStorage.setItem('token', response.data.Token);
        navigate('/home');
      } else {
        alert('Login falhou: Token não encontrado na resposta.');
      }
    } catch (error) {
      // Verifique se erro contém uma resposta do servidor
      if (error.response) {
        console.error('Erro:', error.response.status, error.response.data);
        alert(`Erro: ${error.response.data.message || 'Credenciais inválidas.'}`);
      } else if (error.request) {
        // O pedido foi feito, mas nenhuma resposta foi recebida
        console.error('Erro na requisição:', error.request);
        alert('Erro na comunicação com o servidor. Verifique sua conexão.');
      } else {
        // Algo aconteceu na configuração do request e desencadeou um erro
        console.error('Erro desconhecido:', error.message);
        alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
    }
  }

  return (
    <div className="login-page">
      <Card style={{ width: '20rem', margin: 'auto', marginTop: '10%' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}