import Router from 'express';
import { addTour, getTours, getTour,deleteTour } from '../Controllers/tourscontrollers';
import { verifyToken, isAdmin } from '../Middlewares';

const Tourrouter = Router();

Tourrouter.post('/tour', verifyToken, isAdmin, addTour);
Tourrouter.get('/tours', getTours);
Tourrouter.get('/tour/id', getTour);
Tourrouter.delete('/tour/id', verifyToken, isAdmin, deleteTour)

export default Tourrouter;
