import mongoose from 'mongoose'


const dbConnect = async () => {
    if (!mongoose.connection.readyState) {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
        } catch (error) {
            handleError(error);
        }
    }
}


export default dbConnect;