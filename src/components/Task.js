export default function Task({ task, handleDelete, handleToggleComplete }) {
   return (
      <div
         className={
            'card-task ' + (task.completed === 1 ? 'card-task__complete' : null)
         }
      >
         <p className='card-task__title'>{task.title}</p>
         <div className='card-task__actions'>
            <i
               onClick={() => {
                  handleToggleComplete(task.id);
               }}
               className={
                  task.completed === 1 ? 'bi-toggle-on' : 'bi-toggle-off'
               }
               style={
                  task.completed === 1 ? { color: 'green' } : { color: 'gray' }
               }
            />

            <i
               onClick={() => handleDelete(task.id)}
               className='bi-trash'
               style={{ color: 'red' }}
            />
         </div>
      </div>
   );
}
