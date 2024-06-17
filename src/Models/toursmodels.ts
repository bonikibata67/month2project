import { Request } from "express";

export interface Tour {
    id: string;
    image: string;
    name: string;
    destination: string;
    description: string;
    price: string;
}

export interface TourRequest extends Request {
    body: {
        image: string;
        name: string;
        destination: string;
        description: string;
        price: string;
    };
}
