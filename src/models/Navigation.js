import mongoose from 'mongoose';
import localizedTextSchema from './schemas/localizedText.js';

const navigationItemSchema = new mongoose.Schema(
    {
        label: {
            type: localizedTextSchema,
            required: true,
        },
        target: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { _id: false }
);

const navigationSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
            default: 'main',
        },
        items: {
            type: [navigationItemSchema],
            default: [],
        },
    },
    { timestamps: true }
);

const Navigation = mongoose.model('Navigation', navigationSchema);

export default Navigation;