//imports de biblioteca
import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
//imports de arquivos/style
import "./StyleComponents/Tasks.scss";

//imports components
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useAlert } from "react-alert";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const alert = useAlert();

    const fetchTasks = useCallback(async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/tasks`
            );
            setTasks(data);
        } catch (error) {
            alert.error("Não foi possivel recuperar as tarefas ");
        }
    }, [alert]);

    const lastTasks = useMemo(() => {
        return tasks.filter((tasks) => tasks.isCompleted === false);
    }, [tasks]);
    const completedTask = useMemo(() => {
        return tasks.filter((tasks) => tasks.isCompleted === true);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);
    return (
        <div className="tasks-container">
            <h2>Minhas tarefas do dia</h2>
            <div className="last-tasks">
                <h3>Ultimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="taskslist">
                    {lastTasks.map((lastTasks) => (
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
                {completedTask.map((completedTask) => (
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
