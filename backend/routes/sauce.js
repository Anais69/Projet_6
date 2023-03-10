const express = require('express');
const router = express.Router();

// Middleware pour protéger par authentification les pages de l'application
const auth = require('../middleware/auth');

// Middleware pour la destination et le nom des images
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

// Routes pour le parcours utilisateur et sauces
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);

router.post('/:id/like', auth, sauceCtrl.like);

module.exports = router;