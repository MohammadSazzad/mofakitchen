import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Access granted to profile', user: req.user });
});


router.get('/admin', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Access granted to admin dashboard' });
});

export default router;

