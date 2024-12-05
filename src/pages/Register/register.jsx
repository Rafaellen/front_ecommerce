import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users/newuser', {
        email,
        data_nasc: dataNasc,
        password,
      });
      alert('Usuário criado com sucesso!');
      navigate('/'); 
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Falha ao criar usuário.');
    }
  };

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Registrar Usuário</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <input 
        type="date" 
        placeholder="Data de Nascimento" 
        value={dataNasc} 
        onChange={e => setDataNasc(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Senha" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      <button onClick={handleRegister}>Registrar</button>
      <button onClick={handleBackToLogin} style={{ marginLeft: '10px' }}>
        Voltar para Login
      </button>
    </div>
  );
};

export default Register;