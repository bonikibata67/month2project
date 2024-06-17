import Router from 'express';
import { addBooking, getBookings, getBooking, deleteBooking } from '../Controllers/bookingscontroller';

const Bookingrouter = Router();
Bookingrouter.post('/Booking', addBooking);
Bookingrouter.get('/Bookings', getBookings);
Bookingrouter.get('/Booking/id', getBooking);
Bookingrouter.delete('/Bookings/id', deleteBooking);

export default Bookingrouter;
