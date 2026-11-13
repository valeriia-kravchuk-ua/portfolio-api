import Project from "../models/Project.js";

const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project.find().sort({ order: 1 });

        res.json(projects);
    } catch (error) {
        next(error);
    }
};

const getProjectById = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                message: 'Project not found',
            });
        }

        res.json(project);
    } catch (error) {
        next(error);
    }
};

export {
    getAllProjects,
    getProjectById,
};