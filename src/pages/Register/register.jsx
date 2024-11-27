// src/pages/Register/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post('/users/newUser', { email, password, data_nasc: dataNasc });
      navigate('/');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  }

  return (
    <div className="register-page">
      <Card style={{ width: '20rem', margin: 'auto', marginTop: '10%' }}>
        <Card.Body>
          <Card.Title>Register</Card.Title>
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
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                value={dataNasc}
                onChange={(e) => setDataNasc(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}