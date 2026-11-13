import mongoose from 'mongoose';
import localizedTextSchema from './schemas/localizedText.js';

const contactLinkSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    url: { type: String, trim: true, default: null },
  },
  { _id: false }
);

const contactSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: 'main',
      unique: true,
      immutable: true,
    },
    email: {
      type: String,
      trim: true,
      default: null,
    },
    telegram: {
      type: contactLinkSchema,
      default: null,
    },
    linkedin: {
      type: contactLinkSchema,
      default: null,
    },
    github: {
      type: contactLinkSchema,
      default: null,
    },
    cv: {
      label: { type: localizedTextSchema, required: true },
      url: { type: String, trim: true, default: null },
    },
    availabilityText: {
      type: localizedTextSchema,
      required: true,
    },
    footer: {
      copyright: { type: String, required: true, trim: true },
      credit: { type: localizedTextSchema, required: true },
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
