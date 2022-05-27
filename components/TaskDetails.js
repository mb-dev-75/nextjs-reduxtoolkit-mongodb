import { useSelector } from "react-redux";


export default function TaskDetails() {

    const { task } = useSelector(
        (state) => state.task
    );

    return (
        <div>
            <span>{task.title}</span>
            {
                task.createdAt === task.updatedAt ? (
                    <div>Created : {task.createdAt}</div>
                ) : (
                    <div>
                        <div>Created : {task.createdAt}</div>
                        <div>Updated : {task.updatedAt}</div>
                    </div>
                )
            }
        </div>
    );
}
