import { Request, Response, RequestHandler } from 'express';
import { v4 as uid } from 'uuid';
import { Hotel, HotelRequest } from '../Models/hotelmodels';
import { DbHelper } from '../DatabaseHelpers';

const dbInstance = new DbHelper();

export const addHotel: RequestHandler = async (req: HotelRequest, res: Response) => {
    try {
        const id = uid();
        const { image, name, location, description, price } = req.body;
        await dbInstance.exec('addHotel', { id, image, name, location, description, price });
        res.status(201).json({ message: 'Hotel Created' });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getHotels: RequestHandler = async (req, res) => {
    try {
        const hotels = (await dbInstance.exec('getHotels', {})).recordset as Hotel[];
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getHotel: RequestHandler<{ id: string }> = async (req, res) => {
    try {
        const hotel = (await dbInstance.exec('getHotel', { id: req.params.id })).recordset[0] as Hotel;
        if (hotel && hotel.id) {
            return res.status(200).json(hotel);
        }
        return res.status(404).json({ message: 'Hotel Not Found' });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteHotel: RequestHandler<{ id: string }> = async (req, res) => {
    try {
        const hotel = (await dbInstance.exec('getHotel', { id: req.params.id })).recordset[0] as Hotel;
        if (hotel && hotel.id) {
            await dbInstance.exec('deleteHotel', { id: req.params.id });
            return res.status(200).json({ message: 'Hotel Deleted' });
        }
        return res.status(404).json({ message: 'Hotel Not Found' });
    } catch (error) {
        res.status(500).json(error);
    }
};
