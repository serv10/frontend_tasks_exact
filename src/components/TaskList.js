import React from 'react';
import { deleteTask, toggleCompleteTask } from '../Api';
import Task from './Task';

export default function TaskList({ tasks, loadTasks }) {
   const handleDelete = async (id) => {
      const confirmDeleteTask = window.confirm(
         'Are you sure you want to delete this task?'
      );
      if (confirmDeleteTask) {
         await deleteTask(id);
         await loadTasks();
      }
   };

   const handleToggleComplete = async (id) => {
      await toggleCompleteTask(id);
      await loadTasks();
   };

   return (
      <div className='cards-task'>
         {tasks.length > 0 ? (
            tasks.map((task, index) => {
               return (
                  <Task
                     task={task}
                     key={index}
                     handleDelete={handleDelete}
                     handleToggleComplete={handleToggleComplete}
                  />
               );
            })
         ) : (
            <div className='no-tasks__container'>
               <p className='no-tasks__title'>No tasks, please insert one</p>
            </div>
         )}
      </div>
   );
}
