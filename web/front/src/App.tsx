// src/App.tsx
import React from 'react';
import Calculadora from './componentes/Calculadora';

const App: React.FC = () => {
  const apiUrl = "http://localhost:3401/list"; // Substitua pela URL correta do seu back-end

  return (
    <div>
      <Calculadora apiUrl={apiUrl} />
    </div>
  );
};

export default App;
