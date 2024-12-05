// src/pages/SuppliersPage.jsx
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import SupplierForm from '../../components/SupplierForm';
import SupplierList from '../../components/SupplierList';
import Button from 'react-bootstrap/Button'; 

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await api.get('/suppliers');
        setSuppliers(response.data);
      } catch (error) {
        console.error('Erro ao carregar fornecedores:', error);
      }
    };

    fetchSuppliers();
  }, []);

  const handleAddSupplier = (newSupplier) => {
    setSuppliers([...suppliers, newSupplier]);
  };

  const handleBackToHome = () => {
    navigate('/home'); 
  };

  return (
    <div>
      <h2>Gerenciar Fornecedores</h2>
      <SupplierForm onAdd={handleAddSupplier} />
      <SupplierList suppliers={suppliers} />

      <Button variant="secondary" onClick={handleBackToHome} style={{ marginTop: '20px' }}>
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};

export default SuppliersPage;