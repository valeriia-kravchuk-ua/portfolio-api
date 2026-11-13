import mongoose from 'mongoose';
import localizedTextSchema from './schemas/localizedText.js';

const profileSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: 'main',
      unique: true,
      immutable: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: localizedTextSchema,
      required: true,
    },
    availability: {
      type: localizedTextSchema,
      required: true,
    },
    heroDescription: {
      type: localizedTextSchema,
      required: true,
    },
    about: {
      title: { type: localizedTextSchema, required: true },
      description: { type: localizedTextSchema, required: true },
      focus: { type: localizedTextSchema, required: true },
      photo: { type: String, default: null },
    },
    heroActions: [
      {
        label: { type: localizedTextSchema, required: true },
        target: { type: String, required: true, trim: true },
      },
    ],
  },
  { timestamps: true }
);

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
