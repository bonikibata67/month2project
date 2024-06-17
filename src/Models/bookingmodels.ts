import { Request } from 'express';

export interface Booking {
    id: string;
    username: string;
    tour: string;
    hotel: string;
    bookingDate: string;
}

export interface BookingRequest extends Request {
    body: {
        username: string;
        tour: string;
        hotel: string;
        bookingDate: string;
    };
}
