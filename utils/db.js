import mongoose from "mongoose";

const DbConn = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log("MongoDB is connected to MindVault");
    } catch (error) {
        console.log(error);
    }
}

export default DbConn;