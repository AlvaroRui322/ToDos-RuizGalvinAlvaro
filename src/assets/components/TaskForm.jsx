import Swal from "sweetalert2";

const TaskForm = ({ addTodo, editionMode, editTodo, todo, setTodo }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.title.trim() === "" || todo.description.trim() === "") {
            return Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, completa todos los campos.",
            });
        }

        if (editionMode) {
            editTodo();
            Swal.fire({
                icon: "success",
                title: "Actualización Exitosa",
                text: "La tarea ha sido actualizada correctamente.",
            });
        } else {
            addTodo({
                ...todo,
                id: Date.now(),
                state: todo.state === "completada" ? "completada" : "pendiente",
            });
            Swal.fire({
                icon: "success",
                title: "Tarea Agregada",
                text: "La tarea ha sido agregada correctamente.",
            });
        }

        setTodo({
            title: '',
            description: '',
            state: 'pendiente',
            priority: false,
        });
    };

    const handleInputChange = (e) => {
        const { name, type, checked, value } = e.target;
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="col-4">
            <h3 className="text-center">{editionMode ? 'Editar Tarea' : 'Agregar Nueva Tarea'}</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="Nombre de la tarea"
                    type="text"
                    className="form-control mb-2"
                    value={todo.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Descripción de la tarea"
                    className="form-control mb-2"
                    value={todo.description}
                    onChange={handleInputChange}
                />
                <select
                    name="state"
                    className="form-control mb-2"
                    value={todo.state}
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
                        checked={todo.priority}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="priorityCheck" className="form-check-label">
                        Prioridad
                    </label>
                </div>
                <button className={`btn w-100 mt-2 ${editionMode ? 'btn-warning' : 'btn-dark'}`}>
                    {editionMode ? 'Guardar Cambios' : 'Agregar'}
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
