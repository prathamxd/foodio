import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL)

    console.log("Database connection established!");
  } catch (error) {
    throw new Error("Error connecting to database", error);
  }
};

export default connect;
