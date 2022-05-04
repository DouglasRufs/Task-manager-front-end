//imports de biblioteca
import { useState, useEffect } from "react";
import axios from "axios";
//imports de arquivos/style
import "./StyleComponents/Tasks.scss";

//imports components
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar Programação",
            isCompleted: false,
        },
        {
            id: "2",
            description: "Ler",
            isCompleted: true,
        },
    ]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <div className="tasks-container">
            <h2>Minhas tarefas do dia</h2>
            <div className="last-tasks">
                <h3>Ultimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="taskslist">
                    {tasks
                        .filter((tasks) => tasks.isCompleted === false)
                        .map((lastTasks) => (
                            <TaskItem
                                key={lastTasks.id}
                                task={lastTasks}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas Concluidas</h3>
                <div className="taskslist"></div>
                {tasks
                    .filter((tasks) => tasks.isCompleted)
                    .map((completedTask) => (
                        <TaskItem
                            key={completedTask.id}
                            task={completedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Tasks;
