
import express from 'express';
import router from './routes/empleados.route.js';
import { ping } from './controllers/index.controller.js';
import employeesRoute from './routes/empleados.route.js';
import indexRoute from './routes/index.route.js';


const app = express();

app.use(express.json());

app.use(indexRoute)
app.use(employeesRoute)

router.get('/ping',ping)

app.use((req,res,next)=>{
    res.status(500).json({message:'endpoint not fount'})
})

export default app;