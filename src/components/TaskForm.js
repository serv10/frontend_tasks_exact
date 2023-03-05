import React, { useState } from 'react';
import { saveTask } from '../Api';

export default function TaskForm({ loadTasks }) {
   const [task, setTask] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      await saveTask(task);
      cleanInput();
      loadTasks();
   };

   const cleanInput = () => {
      setTask('');
   };

   const handleChange = ({ target }) => {
      setTask(target.value);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className='form-input'>
            <input
               className='input-task'
               type='text'
               placeholder='Press Enter to Add Tasks'
               value={task}
               onChange={handleChange}
            />
         </div>
      </form>
   );
}
