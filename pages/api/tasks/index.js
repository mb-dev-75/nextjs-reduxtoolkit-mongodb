import nextConnect from 'next-connect';

import dbConnect from '../../../lib/dbConnect';
import { createTask, readTasks } from '../../../controllers/taskControllers';


const handler = nextConnect();

dbConnect();
handler
    .post(createTask)
    .get(readTasks);


export default handler;
