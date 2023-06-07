import React from 'react';
import ReactDOM from 'react-dom';
import LoadingScreen from './LoadingScreen'; // Importe o componente da tela de carregamento aqui

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoadingScreen /> {/* Renderize a tela de carregamento inicialmente */}
    {/* Adicione aqui os componentes e elementos da sua aplicação */}
  </React.StrictMode>
);