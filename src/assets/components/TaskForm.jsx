import { useState } from "react";
import Swal from "sweetalert2";

const TaskForm = ({ addTask, isEditing, updateTask, task, setTask }) => {
    const { title, description, priority, state } = task;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "" || description.trim() === "") {
            return Swal.fire({
                icon: "error",
                title: "Ups...",
                text: "Por favor, completa todos los campos.",
            });
        }

        addTask({
            ...task,
            id: Date.now(),
            state: state === "completada",
        });
        console.log(`Enviando tarea: ${task.title}, ${task.description}, Estado: ${task.state}`);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTask();
    };

    const handleInputChange = (e) => {
        const { name, type, checked, value } = e.target;
        setTask({
            ...task,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="col-4">
            <h3 className="text-center">{isEditing ? 'Editar Tarea' : 'Agregar Nueva Tarea'}</h3>
            <form onSubmit={isEditing ? handleUpdate : handleSubmit}>
                <input
                    name="title"
                    placeholder="Nombre de la tarea"
                    type="text"
                    className="form-control mb-2"
                    value={task.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Descripción de la tarea"
                    className="form-control mb-2"
                    value={task.description}
                    onChange={handleInputChange}
                />
                <select
                    name="state"
                    className="form-control mb-2"
                    value={task.state}
                    onChange={handleInputChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="priority"
                        id="priorityCheck"
                        checked={task.priority}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="priorityCheck" className="form-check-label">
                        Prioridad
                    </label>
                </div>
                <button className={`btn w-100 mt-2 ${isEditing ? 'btn-warning' : 'btn-dark'}`}>
                    {isEditing ? 'Guardar Cambios' : 'Agregar'}
                </button>
            </form>
        </div>
    );
};

export default TaskForm;