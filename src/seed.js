import 'dotenv/config';
import mongoose from 'mongoose';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import Profile from './models/Profile.js';
import Project from './models/Project.js';
import Experience from './models/Experience.js';
import SkillGroup from './models/SkillGroup.js';
import DeveloperHighlight from './models/DeveloperHighlight.js';
import Certificate from './models/Certificate.js';
import Contact from './models/Contact.js';
import Navigation from './models/Navigation.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function readJson(filename) {
    const filePath = path.join(__dirname, 'data', filename);
    const content = await readFile(filePath, 'utf8');
    return JSON.parse(content);
}

async function seed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');

        const [
            profile,
            navigation,
            projects,
            experiences,
            skillGroups,
            developerHighlights,
            certificates,
            contacts,
        ] = await Promise.all([
            readJson('profile.json'),
            readJson('navigation.json'),
            readJson('projects.json'),
            readJson('experience.json'),
            readJson('skillGroups.json'),
            readJson('developerHighlights.json'),
            readJson('certificates.json'),
            readJson('contacts.json'),
        ]);

        // Оновлюємо Profile
        await Profile.findOneAndUpdate(
            { key: 'main' },
            { ...profile, key: 'main' },
            {
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
            }
        );

// Оновлюємо Navigation
        await Navigation.findOneAndUpdate(
            { key: 'main' },
            { ...navigation, key: 'main' },
            {
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
            }
        );

        // Для цих колекцій seed повністю замінює набір записів.
        // Перед запуском переконайся, що в них немає ручних даних.
        await Project.deleteMany({});
        await Project.insertMany(projects);

        await Experience.deleteMany({});
        await Experience.insertMany(experiences);

        await SkillGroup.deleteMany({});
        await SkillGroup.insertMany(skillGroups);

        await DeveloperHighlight.deleteMany({});
        await DeveloperHighlight.insertMany(developerHighlights);

        await Certificate.deleteMany({});
        await Certificate.insertMany(certificates);

        await Contact.findOneAndUpdate(
            { key: 'main' },
            { ...contacts, key: 'main' },
            {
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
            }
        );

        console.log('Seed completed successfully');
    } catch (error) {
        console.error('Seed failed:', error);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seed();
