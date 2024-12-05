// src/components/SupplierList.jsx
import React from 'react';

const SupplierList = ({ suppliers }) => {
  return (
    <ul>
      {suppliers.map((supplier) => (
        <li key={supplier.id}>
          {supplier.nome} - {supplier.email} - {supplier.telefone}
        </li>
      ))}
    </ul>
  );
};

export default SupplierList;