import { readTask } from '../../redux/features/taskSlice'
import { wrapper } from '../../redux/store'

import TaskUpdate from '../../components/TaskUpdate'


export default function ReadTask() {
    return (
        <div>
            <h3>Update</h3>
            <TaskUpdate />
        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ params, req }) => {
        const id = params.id
        await store.dispatch(readTask({ id, req }));
    }
);