import { ThemeProvider } from '@mui/material';
import './App.css';
import { Theme } from './Dashboard/Theme/Theme';
import Router from './Routes/Router';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App text-left">
        <Router></Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
