import './App.css';
import Router from './Routes/Router';
console.log(process.env.REACT_APP_mk)
function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
