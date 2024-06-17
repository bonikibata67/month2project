import Router from 'express';
import { addTour, getTours, getTour,deleteTour } from '../Controllers/tourscontrollers';

const Tourrouter = Router();

Tourrouter.post('/tour', addTour);
Tourrouter.get('/tours', getTours);
Tourrouter.get('/tour/id', getTour);
Tourrouter.delete('/tour/id', deleteTour)

export default Tourrouter;
