import {Request} from 'express'


export interface Hotel {
    id: string;
    image: string;
    name: string;
    location: string;
    description: string;
    price: string;
}

export interface HotelRequest extends Request {
    body: {
        image: string;
        name: string;
        location: string;
        description: string;
        price: string;
    };
}
