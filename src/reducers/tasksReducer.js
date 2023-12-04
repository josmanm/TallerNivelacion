export const tasksInitialState = {
  tasks:[ {
    id: 0,
    text: 'Comprar Leche',
    completed: true
  },

]
};

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, { id: Date.now(), text: action.payload.description, completed: action.payload.isCompleted }]
      };
    case 'REMOVE_TASK':
      return {
        tasks: state.tasks.filter(task => task.id != action.payload.id)
      };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        )
      };
    default:
      return state;
  }
};

export default tasksReducer;
