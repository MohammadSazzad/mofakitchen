import {pool} from '../config/db.js';

export const getUsers = () => {
    const results = await pool.query('SELECT * FROM users');
    return results;
};

