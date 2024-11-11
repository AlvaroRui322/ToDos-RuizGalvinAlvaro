import { useEffect, useState } from 'react';
import TaskList from "./assets/components/TaskList.jsx";
import TaskForm from "./assets/components/TaskForm.jsx";

const todosInitialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoInitialState = {
    title: '',
    description: '',
    state: 'pendiente',
    priority: false
};

const App = () => {
    const [todos, setTodos] = useState(todosInitialState);
    const [editionMode, setEditionMode] = useState(false);
    const [todo, setTodo] = useState(todoInitialState);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]); // Guardar en localStorage cada vez que cambia `todos`

    const addTodo = (newTodo) => {
        setTodos([...todos, { ...newTodo, id: Date.now() }]);
        setTodo(todoInitialState); // Limpiar el formulario después de agregar
    };

    const deleteTodo = (id) => {
        const newArray = todos.filter(todo => todo.id !== id);
        setTodos(newArray);
    };

    const updateTodoState = (id) => {
        const newArray = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, state: todo.state === 'completada' ? 'pendiente' : 'completada' };
            }
            return todo;
        });
        setTodos(newArray);
    };

    const handleEditionMode = (selectedTodo) => {
        setEditionMode(true);
        setTodo(selectedTodo);
    };

    const editTodo = () => {
        const updatedTodos = todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, ...todo }; // Actualizar todos los campos de la tarea
            }
            return item;
        });
        setTodos(updatedTodos);
        setEditionMode(false);
        setTodo(todoInitialState);
    };

    return (
        <div className='container mt-4'>
            <h1 className='text-center'>Todo App</h1>
            <hr />
            <div className='row mt-2'>
                <TaskForm
                    todo={todo}
                    setTodo={setTodo}
                    addTodo={addTodo}
                    editionMode={editionMode}
                    editTodo={editTodo}
                />
                <TaskList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    updateTodoState={updateTodoState}
                    handleEditionMode={handleEditionMode}
                />
            </div>
        </div>
    );
};

export default App;
