import mongoose from 'mongoose';
import localizedTextSchema from './schemas/localizedText.js';

const projectSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: localizedTextSchema,
      required: true,
    },
    subtitle: {
      type: localizedTextSchema,
      default: undefined,
    },
    description: {
      type: localizedTextSchema,
      default:undefined,
    },
    technologies: {
      type: [String],
      default: [],
    },
    githubUrl: {
      type: String,
      trim: true,
      default: null,
    },
    liveUrl: {
      type: String,
      trim: true,
      default: null,
    },
    previewImage: {
      type: String,
      trim: true,
      default: null,
    },
    previewVideo: {
      type: String,
      trim: true,
      default: null,
    },
    accentColor: {
      type: String,
      trim: true,
      default: null,
    },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
