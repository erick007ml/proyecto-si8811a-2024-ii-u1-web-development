import React from 'react';
import { FaMicrosoft } from 'react-icons/fa'; 

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/login'; 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center mb-4">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWIWSZx522tAelmtZH81mS1nOZ-_2uwtjr4VLY1qZf7tvuJ08obXkMmA0nCG7PhcLTdz3faWCeBGuxw1expsuXiH0J2i4Kpol7NKQu0NXFACoUuPWJ1w9xG1H751VmMytQ62klNnSCnPM/s400/logo-juegosflorales.png" 
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <p className="text-center mb-4 text-gray-600">
          Ingresa haciendo uso de tu correo universitario upt.pe
        </p>
        <button
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300"
          onClick={handleLogin}
        >
          <FaMicrosoft size={24} /> 
          Iniciar con Microsoft
        </button>
      </div>
    </div>
  );
};

export default Login;
