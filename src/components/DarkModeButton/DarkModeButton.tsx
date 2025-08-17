import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './DarkModeButton.css';


export default function DarkModeButton() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aqui podes ligar ao ThemeProvider para alterar o tema real
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button 
        sx={{ backgroundColor: 'background.default', color: 'text.primary' }}
        variant="contained"
        startIcon={darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Dark' : 'Light'}
      </Button>
    </Stack>
  );
}
