import Task from "./Task.jsx";

const TaskList = ({ tasks, removeTask, toggleTaskState, activateEditMode }) => {
    const sortedTasks = tasks.sort((a, b) => {
        return (b.priority - a.priority) - (b.state - a.state) * 2;
    });

    return (
        <div className="col-8">
            <h3 className="text-center">Lista de tareas pendientes</h3>
            <ul>
                {sortedTasks.length > 0 ? (
                    sortedTasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            removeTask={removeTask}
                            toggleTaskState={toggleTaskState}
                            activateEditMode={activateEditMode}
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