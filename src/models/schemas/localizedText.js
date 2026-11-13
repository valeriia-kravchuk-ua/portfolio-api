import mongoose from 'mongoose';

const localizedTextSchema = new mongoose.Schema(
  {
    uk: { type: String,  trim: true },
    en: { type: String,  trim: true },
  },
  { _id: false }
);

export default localizedTextSchema;
