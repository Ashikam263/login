import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const mongodbUri = process.env.MONGODB_URI || ""; // Set a default value if MONGODB_URI is undefined
        await mongoose.connect(mongodbUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
};

// import mongoose from "mongoose";

// export const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Error connecting to MongoDB: ", error);
//   }
// };