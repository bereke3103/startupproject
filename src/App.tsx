<<<<<<< HEAD
import React from "react";
import "./App.css";
import { AuthProvider } from "./Context/AuthProvider";
=======
import React from 'react';
import './App.css';
import { AuthProvider} from "./context/AuthProvider";
>>>>>>> 7f1665a67bca0abfe09494e9406b6ff0b4dec54c
import Pages from "./routes/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
