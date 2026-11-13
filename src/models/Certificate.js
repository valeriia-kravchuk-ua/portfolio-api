import mongoose from 'mongoose';
import localizedTextSchema from './schemas/localizedText.js';

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type: localizedTextSchema,
      required: true,
    },
    description: {
      type: localizedTextSchema,
      default: () => ({ uk: '', en: '' }),
    },
    issuer: {
      type: String,
      required: true,
      trim: true,
    },
    durationHours: {
      type: Number,
      default: null,
      min: 0,
    },
    date: {
      type: Date,
      default: null,
    },
    url: {
      type: String,
      trim: true,
      default: null,
    },
    file: {
      type: String,
      trim: true,
      default: null,
    },
    order: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;
