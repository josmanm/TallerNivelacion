import { useContext } from "react";
import { AppContext } from "../router/AppRouter";


const MiToDoList = () => {
   const {tasks:{tasks,tasksDispatch} }= useContext(AppContext);
   const addTask = (tasks) => {
         const action = {
              type: 'ADD_TASK',
              payload: {
                description: tasks,
                isCompleted: false
              }
         }
         tasksDispatch(action);
   }
    const toggleTodo = (id) => {
     const action = {
        type: 'TOGGLE_TASK',
        payload: {
          id: id
        }
     }
     tasksDispatch(action);
    }
    const removeTodo = (id) => {
        console.log(id);
      const action = {
        type: 'REMOVE_TASK',
        payload: {
          id: id
        }
      }
      tasksDispatch(action);
    }
    
  return (
    <div>
    <h1>Mi ToDo List</h1>
    <input
      type="text"
      placeholder="Nueva tarea"
      onKeyDown={e => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTask(e.target.value.trim());
          e.target.value = '';
        }
      }}
    />
    <ul>
      {tasks.tasks.map(item => (
        <li key={item.id} className={item.completed ? 'completed' : ''}>
          <span onClick={() => toggleTodo(item.id)}>{item.text}</span>
          <button onClick={() => removeTodo(item.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default MiToDoList;
