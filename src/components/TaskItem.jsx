import { MdDeleteOutline } from "react-icons/md";
import { useAlert } from "react-alert";
import axios from "axios";

import "./StyleComponents/TasksItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);

            alert.success("Foi retirado com sucesso");

            await fetchTasks("");
        } catch (error) {
            alert.error("Algo deu errado");
        }
    };

    const handleTaskChange = async (e) => {
        try {
            await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
                isCompleted: e.target.checked,
            });
            await fetchTasks();
            alert.success("a Tarefa foi motificada com sucesso !");
        } catch (error) {
            alert.error("Algo deu errado");
        }
    };
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskChange(e)}
                    />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <MdDeleteOutline
                    size={20}
                    color="#126054"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};
export default TaskItem;
