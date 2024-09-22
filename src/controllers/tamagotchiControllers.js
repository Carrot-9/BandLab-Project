const db = require("../config/db")

const APIListener = async (req, res) => {
    console.log("API Is Running.")
};

const getHunger = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await db.query('SELECT hunger FROM tamagotchi_stats WHERE id = ?', [id]);
        res.json({ hunger: results[0].hunger });
    } catch (error) {
        console.error("Error Retreiving 'hunger':", error);
        res.status(500).json({ error: "Error Retreiving 'hunger':" });
    }
};

const getHealth = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await db.query('SELECT health FROM tamagotchi_stats WHERE id = ?', [id]);
        res.json({ health: results[0].health });
    } catch (error) {
        console.error("Error Retreiving 'health':", error);
        res.status(500).json({ error: "Error Retreiving 'health':" });
    }
};

const getHappiness = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await db.query('SELECT happiness_level FROM tamagotchi_stats WHERE id = ?', [id]);
        res.json({ happiness_level: results[0].happiness_level });
    } catch (error) {
        console.error("Error Retreiving 'happiness_level':", error);
        res.status(500).json({ error: "Error Retreiving 'happiness_level':" });
    }
};

const getFriendship = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await db.query('SELECT friendship_level FROM tamagotchi_stats WHERE id = ?', [id]);
        res.json({ friendship_level: results[0].friendship_level });
    } catch (error) {
        console.error("Error Retreiving 'friendship_level':", error);
        res.status(500).json({ error: "Error Retreiving 'friendship_level':" });
    }
};

const getAge = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await db.query('SELECT age FROM tamagotchi_stats WHERE id = ?', [id]);
        res.json({ age: results[0].age });
    } catch (error) {
        console.error("Error Retreiving 'age':", error);
        res.status(500).json({ error: "Error Retreiving 'age':" });
    }
};

const getWeight = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await db.query('SELECT weight FROM tamagotchi_stats WHERE id = ?', [id]);
        res.json({ weight: results[0].weight });
    } catch (error) {
        console.error("Error Retreiving 'weight':", error);
        res.status(500).json({ error: "Error Retreiving 'weight':" });
    }
};

const feedTamagotchi = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('UPDATE tamagotchi_stats SET hunger = hunger + 5 WHERE id = ?', [id]);
        res.status(200).json({ message: "Updated Succesfully." });
    } catch (error) {
        console.error("Error Updating 'hunger':", error);
    }
};

module.exports = {
    APIListener,
    getHunger,
    getHealth,
    getHappiness,
    getFriendship,
    getAge,
    getWeight,
    feedTamagotchi
};