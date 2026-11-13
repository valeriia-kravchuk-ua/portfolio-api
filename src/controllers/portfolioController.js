import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Experience from '../models/Experience.js';
import SkillGroup from '../models/SkillGroup.js';
import DeveloperHighlight from '../models/DeveloperHighlight.js';
import Certificate from '../models/Certificate.js';
import Contact from '../models/Contact.js';
import Navigation from '../models/Navigation.js';

const getAllData = async (req, res, next) => {
    try {
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
            Profile.findOne({ key: 'main' }),
            Navigation.findOne({ key: 'main' }),
            Project.find().sort({ order: 1 }),
            Experience.find().sort({ order: 1 }),
            SkillGroup.find().sort({ order: 1 }),
            DeveloperHighlight.find().sort({ order: 1 }),
            Certificate.find().sort({ order: 1 }),
            Contact.findOne({ key: 'main' }),
        ]);
        res.json({
            profile,
            navigation,
            projects,
            experiences,
            skillGroups,
            developerHighlights,
            certificates,
            contacts,
        });
    } catch (error) {
        next(error);
    }
};



export { getAllData };