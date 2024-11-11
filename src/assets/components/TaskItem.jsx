import React from 'react';

const TaskItem = ({ task, removeTask, toggleTaskStatus, enableEditMode }) => {
    const { id, title, description, priority, state } = task;

    const taskClass = state ? 'completed' : ''; // Definir clase para tareas completadas

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={taskClass}>{title}</h5>
                    <p className={taskClass}>{description}</p>
                    <div className="d-flex">
                        <button
                            onClick={() => removeTask(id)}
                            className="btn btn-sm btn-danger mr-2">
                            Eliminar
                        </button>
                        <button
                            onClick={() => enableEditMode(task)}
                            className="btn btn-sm btn-warning mr-2">
                            Editar
                        </button>
                        <button
                            onClick={() => toggleTaskStatus(id)}
                            className="btn btn-sm btn-primary">
                            Cambiar Estado
                        </button>
                    </div>
                </div>
                {priority && (
                    <span className="badge badge-primary">
                        Prioridad
                    </span>
                )}
            </div>
        </li>
    );
};

export default TaskItem;