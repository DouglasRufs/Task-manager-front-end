import { useEffect } from "react";

const TaskItem = ({ task }) => {
    // no props pode realizer destrution por isso essa sintaxe de escrita (na linha a cima).00

    useEffect(() => {
        console.log("component was mounted!");
        return () => {
            console.log("i will unmount!");
        };
    }, []);

    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Concluida" : "Não Concluida"}</p>
        </>
    );
};
export default TaskItem;

// import React from "react";

// class TaskItem extends React.Component {
//     componentDidMount() {
//         console.log("component was mounted!");
//     }

//     componentWillUnmount() {
//         console.log("I Will Unmount!");
//     }
//     render() {
//         const { task } = this.props;
//         return (
//             <>
//                 <h1>{task.description}</h1>
//                 <p>{task.isCompleted ? "Concluida" : "Não Concluida"}</p>
//             </>
//         );
//     }
// }

// export default TaskItem;
