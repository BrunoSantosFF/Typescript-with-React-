import {useState} from "react"
import './App.css';
import Button from './components/Button';

interface Task {
  id: string
  isCompleted: boolean
}

function App() {

  const [task, setTasks] = useState<Task[]>()
  const [count, setCount] = useState<number>(1)

  setTasks([{
    id: 'bruno',
    isCompleted: false,
  }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <Button theme='light' onClick={() => {console.log('esportando')}} option={{variant:"normal"}}>Eu</Button>
      </header>
    </div>
  );
}

export default App;
