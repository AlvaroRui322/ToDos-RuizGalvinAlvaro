import React from 'react';

const TaskItem = ({ task, removeTask, activateEditMode }) => {
    const { id, title, description, priority, state } = task;

    // Clase para tachar el título si la tarea está completada
    const taskTitleClass = state === 'completada' ? 'text-decoration-line-through' : '';

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${taskTitleClass} d-flex align-items-center`}>
                        {title}
                        {priority && (
                            <span
                                style={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    marginLeft: '10px',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontSize: '0.8rem',
                                }}
                            >
                                Prioridad
                            </span>
                        )}
                    </h5>
                    <p className={state === 'completada' ? 'text-decoration-line-through' : ''}>
                        {description}
                    </p>
                    <div className="d-flex">
                        <button
                            onClick={() => removeTask(id)}
                            className="btn btn-sm btn-danger mr-2">
                            Eliminar
                        </button>
                        <button
                            onClick={() => activateEditMode(task)}
                            className="btn btn-sm btn-warning mr-2">
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TaskItem;


