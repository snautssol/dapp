import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Connection, PublicKey } from '@solana/web3.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
  },
});

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = window.solana;
      if (provider?.isPhantom) {
        const resp = await provider.connect();
        setAccount(resp.publicKey.toString());
      } else {
        alert('Solana wallet not found! Please install Phantom Wallet.');
      }
    } catch (err) {
      console.error('Failed to connect wallet:', err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mi Aplicación React con Solana
          </Typography>
          <Button color="inherit" onClick={connectWallet}>Conectar Wallet</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Paper style={{ margin: '20px', padding: '20px' }}>
          {account ? (
            <Typography variant="h6">Cuenta conectada: {account}</Typography>
          ) : (
            <Typography variant="h6">No hay cuenta conectada</Typography>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;

