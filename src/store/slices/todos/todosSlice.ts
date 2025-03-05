import {createSlice} from '@reduxjs/toolkit';
import {storage} from "~/helpers/storage.ts";


interface IItem {
    id: string;
    text: string;
    completed: boolean;
    isEdited: boolean;
}

interface ITodos {
    todos: IItem[]
}

const initialState: ITodos = {
    todos: storage.get("todos", []),

}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.todos = action.payload
        },
        changeItemStatus: (state, action) => {
            console.log('action.payload:', action.payload);

            state.todos = state.todos.map((task) =>
                task.id === action.payload ? {...task, completed: !task.completed} : task
            );
        },
        deleteItem: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        changeItem: (state, action) => {
            state.todos = state.todos.map((task) =>
                task.id === action.payload ? {...task, isEdited: !task.isEdited} : task
            );
        },
        updateItem: (state, action) => {
            state.todos = state.todos.map((task) =>
                task.id === action.payload.id ? {...task, isEdited: !task.isEdited,text:action.payload.text} : task
            );

        }

    }


});

export const {addItem, changeItem, changeItemStatus, deleteItem,updateItem} = todosSlice.actions
export default todosSlice.reducer