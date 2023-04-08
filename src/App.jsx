import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from './components/theme/theme';
import { theme, darkTheme } from './components/theme/theme';

import Navbar from './components/navbar/Navbar';

import Contact from './pages/contact/Contact';
import Nitro from './pages/newUser/Nitro';
import Oji from './pages/newUser/Oji';
import AccessGroups from './pages/accessGroups/AccessGroups';
import './App.scss'
import SideBar from './components/sidebar/Sidebar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <div className={`App ${isDarkMode ? 'App-dark' : 'App-light'}`}>
        <Router>
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} theme={isDarkMode ? darkTheme : theme} />
          
          <div className="main-content">
            <SideBar />
            <Routes>
              <Route path="/" exact element={<Contact />} />
              <Route path="/newUser/Nitro" element={<Nitro />} />
              <Route path="/newUser/Oji" element={<Oji />} />
              <Route path="/gruposDeAcesso" element={<AccessGroups />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
