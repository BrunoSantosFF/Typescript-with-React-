import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button theme='light' onClick={() => {console.log('esportando')}} option={{variant:"normal"}}>Eu</Button>
      </header>
    </div>
  );
}

export default App;
