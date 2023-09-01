import React from 'react';
import './App.css';
import { AuthProvider} from "./context/AuthProvider";
import Pages from "./routes/Pages";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Pages/>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
