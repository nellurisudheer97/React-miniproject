import Home from "./Home";
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from'react-router-dom'
function App() {
  let [darkmode, setDarkmode] = useState('light');

  function handleToggleDarkMode() {
    if (darkmode === 'light') {
      setDarkmode('dark')
    }
    else {
      setDarkmode('light')
    }
  }

  return (
    <ThemeContext.Provider value={darkmode}>
      <Home toggleDarkmode={handleToggleDarkMode} />
    </ThemeContext.Provider>
  );
}

export default App;

