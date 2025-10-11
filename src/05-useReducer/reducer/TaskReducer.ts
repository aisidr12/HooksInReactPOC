import z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  lenght: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };


  const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
  });


  const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    lenght: z.number(),
    completed: z.number(),
    pending: z.number()
  });



  
export const getTaskInitialState = (): TaskState => {
  const localStorateState = localStorage.getItem("tasks-state");

  if (!localStorateState) {
    return {
      todos: [],
      lenght: 0,
      completed: 0,
      pending: 0,
    };
  
  }
// validar mediante zod, cuando haya data 

//SAFE PARSE ES SOLO PARA VALIDAR, UNA VEZ PASADO ESO, HAY QUE PARSEAR EL LOCALSTORAGE
const resultado = TaskStateSchema.safeParse(JSON.parse(localStorateState));
if(resultado.error) {
   return {
      todos: [],
      lenght: 0,
      completed: 0,
      pending: 0,
    };
  }

  return resultado.data;
};

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
        lenght: state.lenght + 1,
        pending: state.pending + 1,
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
        completed: updatedTodos.filter((t) => t.completed).length,
        pending: updatedTodos.filter((t) => !t.completed).length,
      };

    case "DELETE_TODO": {
      const currenTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: currenTodos,
        lenght: currenTodos.length,
        completed: currenTodos.filter((t) => t.completed).length,
        pending: currenTodos.filter((t) => !t.completed).length,
      };
    }
    default:
      return state;
  }
};
