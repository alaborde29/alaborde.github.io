// components/DarkModeToggle.js
import { IconButton, Switch, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setIsDarkMode(storedTheme === 'dark');
  }, []);

  function toggleDarkMode() {
    const newTheme = isDarkMode ? 'light' : 'dark'; 
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode); 
  };

  return (
      <DarkModeSwitch 
      className='mt-2'
        checked={!isDarkMode}
        onChange={toggleDarkMode}
        moonColor='black'
        sunColor='white'
      />
  );
};

export default DarkModeToggle;
