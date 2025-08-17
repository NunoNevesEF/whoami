import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DarkModeButton from '../DarkModeButton/DarkModeButton.tsx';
import './Header.css';

const pages = ['Home', 'Skills', 'Objectives', 'About me', 'Contactos'];

function Header() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
        sx={{ backgroundColor: 'background.default', color: 'text.primary' }}
        position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Button
            color="inherit"
            href="/projects" // redireciona para outra página
            sx={{ mr: 2 }}
          >
            Projects
          </Button>

          <Box sx={{ flexGrow: 1 }} />

          {pages.map((page) => (
            <Button 
              key={page}
              color="inherit"
              onClick={() => handleScroll(page.replace(/\s/g, '').toLowerCase())}
            >
              {page}
            </Button>
          ))}

          <DarkModeButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
