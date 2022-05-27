import { readTask } from '../../redux/features/taskSlice'
import { wrapper } from '../../redux/store'

import TaskDetails from '../../components/TaskDetails'


export default function TaskId() {
    return (
        <div>
            <h3>Details</h3>
            <TaskDetails />
        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ params, req }) => {
        const id = params.id
        await store.dispatch(readTask({ id, req }));
    }
);