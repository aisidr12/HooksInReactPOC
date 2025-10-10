import { todo } from "node:test";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  lenght: number;
  completed: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

// Cada accion debe retornar un nuevo estado
export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case "TOGGLE_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          // Actuliza el campo completed a su opuesto
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
