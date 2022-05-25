import nextConnect from 'next-connect';

import dbConnect from '../../../lib/dbConnect';
import { readTask, updateTask, deleteTask } from '../../../controllers/taskControllers';


const handler = nextConnect();

dbConnect();
handler
    .get(readTask)
    .put(updateTask)
    .delete(deleteTask);


export default handler;
