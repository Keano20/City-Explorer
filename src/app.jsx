import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Search from "./components/search.jsx";

function App() {

}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <Search />
        <Main />
    </React.StrictMode>,
)

export default App