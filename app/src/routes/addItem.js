const db = require('../persistence');
const uuid = require('uuid');
// Note: In production, this would be imported from the published package:
// const { validateTodoName, sanitizeTodoName } = require('@{owner}/{name}-utils');

// For template purposes, we'll include simple validation inline
const validateTodoName = (name) => {
    if (!name || typeof name !== 'string') {
        return false;
    }
    const trimmed = name.trim();
    return trimmed.length > 0 && trimmed.length <= 200;
};

const sanitizeTodoName = (name) => {
    if (!name || typeof name !== 'string') {
        return '';
    }
    return name.trim();
};

module.exports = async (req, res) => {
    const name = req.body.name;
    
    if (!validateTodoName(name)) {
        return res.status(400).json({ error: 'Invalid todo name' });
    }
    
    const item = {
        id: uuid.v4(),
        name: sanitizeTodoName(name),
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
