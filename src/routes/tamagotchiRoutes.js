const express = require('express');
const router = express.Router();
const {
    APIListener,
    getHunger,
    getHealth,
    getHappiness,
    getFriendship,
    getAge,
    getWeight,
    feedTamagotchi
} = require('../controllers/tamagotchiControllers'); 

router.get('/', APIListener);
router.get('/hunger/:id', getHunger);
router.get('/health/:id', getHealth);
router.get('/happiness/:id', getHappiness);
router.get('/friendship/:id', getFriendship);
router.get('/age/:id', getAge);
router.get('/weight/:id', getWeight);
router.patch('/feed/:id', feedTamagotchi);

module.exports = router;