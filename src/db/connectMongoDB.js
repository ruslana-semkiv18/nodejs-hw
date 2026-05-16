import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const {
    MONGO_URL
  } = process.env;

  const mongoUrl = `${MONGO_URL}`;

  try {
    await mongoose.connect(mongoUrl);

    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
