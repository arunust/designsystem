import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Login from './Login.tsx'; 

const Root = () => {
  const [isLoggedIn] = useState(() => {
    return !!localStorage.getItem('userSession'); // You can use any key, like 'authToken'
  });

  return (
    <StrictMode>
      {isLoggedIn ? <App /> : <Login />}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);

