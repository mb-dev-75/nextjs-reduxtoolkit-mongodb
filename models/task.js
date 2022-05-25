const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
}, { timestamps: true });


module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
