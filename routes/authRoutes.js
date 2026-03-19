const router = require('express').Router();
const { register, login, updateUser, deleteUser } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;