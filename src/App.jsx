import React, { useState } from 'react';
import Login from './Login';
import Formulario from './Formulario';

function App() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [showFormulario, setShowFormulario] = useState(false);

  const toggleLoginPage = () => {
    // Si ya se está mostrando la página de login, no cambies el estado
    if (!showLoginPage) {
      setShowLoginPage(!showLoginPage);
      setShowFormulario(false);
    }
  };

  const toggleFormulario = () => {
    // Si ya se está mostrando la página del formulario, no cambies el estado
    if (!showFormulario) {
      setShowFormulario(!showFormulario);
      setShowLoginPage(false);
    }
  };

  return (
    <div>            
      <div className="w-full h-auto flex items-center gap-2">
        <div className="w-1/2 h-auto">
          <button onClick={toggleLoginPage} className="w-full h-8 p-4 outline-none bg-transparent border-[1px] border-gray-400  text-black flex items-center justify-center gap-x-10 hover:bg-gray-200 ease-out duration-700">    
          Login
          </button>
        </div>
        <div className="w-1/2 h-auto">
          <button onClick={toggleFormulario} className="w-full h-8 p-4 outline-none bg-transparent border-[1px] border-gray-400 text-black flex items-center justify-center gap-x-10 hover:bg-gray-200 ease-out duration-700">    
          Formulario
          </button>
        </div>
      </div>

      {showLoginPage && <Login />}
      {showFormulario && <Formulario />}

    </div>
  );
}

export default App;
