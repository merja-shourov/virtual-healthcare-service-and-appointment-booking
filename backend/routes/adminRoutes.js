import express from 'express';
import { protect, authorize } from '../middleware/auth.js';
import { getAllPatients, getAllAppointments, getDashboardStats, getAllDoctors, deleteUser } from '../controllers/adminController.js';

const router = express.Router();

// Protect all routes
router.use(protect);
router.use(authorize('admin'));

// Patient routes
router.get('/patients', getAllPatients);
router.get('/appointments', getAllAppointments);

// Doctor routes
router.get('/doctors', getAllDoctors);
router.delete('/doctors/:id', deleteUser);

// Dashboard routes
router.get('/dashboard-stats', getDashboardStats);

export default router; 