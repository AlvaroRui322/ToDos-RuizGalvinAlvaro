import TaskItem from "./TaskItem.jsx";

const TaskList = ({ todos, deleteTodo, updateTodoState, handleEditionMode }) => {
    return (
        <div className="col-8">
            <h3 className="text-center">Lista de tareas pendientes</h3>
            <ul>
                {todos.length > 0 ? (
                    todos.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            removeTask={deleteTodo}
                            activateEditMode={handleEditionMode}
                        />
                    ))
                ) : (
                    <li className="list-group-item text-center">No hay tareas pendientes</li>
                )}
            </ul>
        </div>
    );
};

export default TaskList;
