import { useEffect, useState } from 'react';
import { getTasks } from './Api';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      loadTasks();
   }, []);

   const loadTasks = async () => {
      const data = await getTasks();
      setTasks(data);
   };

   return (
      <div className='diagonal-split-background'>
         <div className='container-tasks'>
            <TaskForm loadTasks={loadTasks} />
            <TaskList tasks={tasks} loadTasks={loadTasks} />
         </div>
      </div>
   );
}

export default App;
