const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Concluida" : "Não Concluida"}</p>
        </>
    );
};
export default TaskItem;
