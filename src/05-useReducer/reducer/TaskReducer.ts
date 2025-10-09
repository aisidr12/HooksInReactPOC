interface Todo{
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState{
    todos: Todo[],
    lenght: number,
    completed: number,
}

export type TaskAction =
 | { type: 'ADD_TODO', payload: string }
 | { type: 'TOGGLE_TODO', payload: number }
 | { type: 'DELETE_TODO', payload: number }



export const taskReducer = (
    state:TaskState ,
     action: TaskAction
    ): TaskState => {

    return  state;
}