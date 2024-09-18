import {useState, useMemo} from "react"
import './App.css';
import Button from './components/Button';
import TextField from "./components/TextField";

interface Task {
  id: string
  isCompleted: boolean
}

function App() {

  const [task, setTasks] = useState<Task[]>()
  const [count, setCount] = useState<number>(1)

  // setTasks([{
  //   id: 'bruno',
  //   isCompleted: false,
  // }
  // ])

  //useMemo
  const completedTasks = useMemo(() => {
    return task?.filter(task => task.isCompleted)
  }, [task])


  return (
    <div className="App">
      <header className="App-header">
        <Button theme='light' onClick={() => {console.log('esportando')}} option={{variant:"normal"}}>Eu</Button>

        <TextField onChange={(e) => e.target.value}/>
      </header>
    </div>
  );
}

export default App;
