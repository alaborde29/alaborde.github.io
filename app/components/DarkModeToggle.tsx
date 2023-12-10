// components/DarkModeToggle.js
import { IconButton, Switch, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for the user's preferred theme
    const storedTheme = localStorage.getItem('theme');
    setIsDarkMode(storedTheme === 'dark');
  }, []);

  function toggleDarkMode(): any {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    // Apply the new theme to the HTML element
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  return (
    <div>
      
      <DarkModeSwitch 
        className='my-2'
        checked={!isDarkMode}
        onChange={toggleDarkMode}
      />
    </div>

  );
};

export default DarkModeToggle;
