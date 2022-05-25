import { readTasks } from '../redux/features/tasksSlice'
import { wrapper } from '../redux/store'

import TasksList from '../components/TasksList'


export default function Index() {
    return <TasksList />
}


export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ req, res }) => {
        await store.dispatch(readTasks({ req, res }));
    }
);
