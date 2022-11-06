import { Router } from "express";
import { getEmployees, getEmployee, createEmployees, updateEmployee, deleteEmployee} from '../controllers/empleados.controller.js'

const router = Router();

router.get('/empleados', getEmployees)

router.get('/empleados/:id', getEmployee)

router.post('/empleados', createEmployees)

router.patch('/empleados/:id', updateEmployee)

router.delete('/empleados/:id', deleteEmployee)

export default router;