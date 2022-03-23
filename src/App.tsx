import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Navbar from './components/NavBar';
import RoutesService from './Routes';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1f1f1f',
      },
      secondary: {
        main: '#0c071a',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <RoutesService />
    </ThemeProvider>
  );
}

export default App;
