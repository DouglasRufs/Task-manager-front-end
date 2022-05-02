import { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import CustomInput from "./CustomInput";
import "./StyleComponents/AddTask.scss";
import CustomButton from "./CustomButton.jsx";

const AddTask = () => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para adicionada"
                );
            }
            await axios.post("http://localhost:8000/tasks",{
                 description:task,
                 isCompleted: false
            });
        } catch (error) {}
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa....."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={20} color="#fff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
