import Router from 'express';
import { addHotel, getHotels, getHotel, deleteHotel } from '../Controllers/hotelcontrollers';

const Hotelrouter = Router();

Hotelrouter.post('/hotel', addHotel);
Hotelrouter.get('/hotels', getHotels);
Hotelrouter.get('/hotel/id', getHotel);
Hotelrouter.delete('/hotel/id', deleteHotel);

export default Hotelrouter;
