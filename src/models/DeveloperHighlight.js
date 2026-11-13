import mongoose from 'mongoose';
import localizedTextSchema from './schemas/localizedText.js';

const developerHighlightSchema = new mongoose.Schema(
  {
    title: {
      type: localizedTextSchema,
      required: true,
    },
    items: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const DeveloperHighlight = mongoose.model(
  'DeveloperHighlight',
  developerHighlightSchema
);

export default DeveloperHighlight;
