// src/componentes/Calculadora.tsx
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';
import { fetchData, addValue, removeValue } from '../services/index';  // Corrigir este caminho



interface CalculadoraProps {
  apiUrl: string;
}

const Container = styled.div`
  // Adicione seus estilos aqui
`;

const Input = styled.input`
  // Adicione seus estilos aqui
`;

const Button = styled.button`
  // Adicione seus estilos aqui
`;

const Calculadora: React.FC<CalculadoraProps> = ({ apiUrl }) => {
  const { values, total, setValues, setTotal } = useAppContext();
  const [value, setValue] = React.useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(apiUrl);
      setValues(data);
      setTotal(data.reduce((acc, val) => acc + val, 0));
    };
    getData();
  }, [apiUrl, setValues, setTotal]);

  const handleAddValue = async () => {
    await addValue(apiUrl, value);
    setValue(0);
    const data = await fetchData(apiUrl);
    setValues(data);
    setTotal(data.reduce((acc, val) => acc + val, 0));
  };

  const handleRemoveValue = async (id: number) => {
    await removeValue(apiUrl, id);
    const data = await fetchData(apiUrl);
    setValues(data);
    setTotal(data.reduce((acc, val) => acc + val, 0));
  };

  return (
    <Container>
      {/* ... restante do componente ... */}
    </Container>
  );
};

export default Calculadora;
