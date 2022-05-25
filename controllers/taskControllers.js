import Task from '../models/task';


// Create Task
export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            success: true,
            task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

// Read Tasks (all)
export const readTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

// Read Task
export const readTask = async (req, res) => {
    try {
        const task = await Task.findById(req.query.id)

        if (task) {
            res.status(200).json({
                success: true,
                task
            })
        } else {
            res.status(422).json({
                success: false,
                error
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });        
    }
};

// Update Task
export const updateTask = async (req, res) => {
    try {
        const taskId = req.query.id;
        const newTask = req.body;
        const oldTask = await Task.findOne({
            title: req.body.title,
            _id: req.body._id
        });

        if (oldTask) {
            return res.status(422).json({
                success: false,
                error,
            });
        }

        await Task.findOneAndUpdate({ _id: taskId }, newTask);
        res.status(200).json({ 
            success: true,
            task: newTask, 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
}

// Delete Task
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.query.id);

        if (!task) {
            return res.status(404).json({
                success: false
            })
        }

        await task.deleteOne({ _id: req.query.id })

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};
