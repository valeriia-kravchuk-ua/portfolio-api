import mongoose from 'mongoose';
import localizedTextSchema from './schemas/localizedText.js';

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: localizedTextSchema,
      required: true,
    },
    // Формат дат: YYYY-MM, наприклад 2025-01.
    startDate: {
      type: String,
      required: true,
      match: /^\d{4}-(0[1-9]|1[0-2])$/,
    },
    endDate: {
      type: String,
      default: null,
      match: /^\d{4}-(0[1-9]|1[0-2])$/,
    },
    technologies: {
      type: [String],
      default: [],
    },
    responsibilities: {
      type: [localizedTextSchema],
      default: [],
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

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
