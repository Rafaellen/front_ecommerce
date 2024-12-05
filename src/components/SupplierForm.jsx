// src/components/SupplierForm.jsx
import React, { useState } from 'react';
import { api } from '../services/api';

const SupplierForm = ({ onAdd }) => {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/suppliers', form);
      onAdd(response.data);
      setForm({ nome: '', email: '', telefone: '' });
    } catch (error) {
      console.error('Erro ao adicionar fornecedor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
        required
      />
      <button type="submit">Adicionar Fornecedor</button>
    </form>
  );
};

export default SupplierForm;