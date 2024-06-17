
import { Request, Response,RequestHandler } from "express";
import { v4 as uid } from 'uuid';
import { Tour, TourRequest } from '../Models/toursmodels';
import { DbHelper } from '../DatabaseHelpers';

const dbInstance = new DbHelper();

export const addTour: RequestHandler = async (req: TourRequest, res: Response) => {
    try {
        const id = uid();
        const { image, name, destination, description, price } = req.body;
        await dbInstance.exec('addTour', { id, image, name, destination, description, price });
        res.status(201).json({ message: 'Tour Created' });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getTours: RequestHandler = async (req, res) => {
    try {
        const tours = (await dbInstance.exec('getTours', {})).recordset as Tour[];
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getTour: RequestHandler<{ id: string }> = async (req, res) => {
    try {
        const tour = (await dbInstance.exec('getTour', { id: req.params.id })).recordset[0] as Tour;
        if (tour && tour.id) {
            return res.status(200).json(tour);
        }
        return res.status(404).json({ message: 'Tour Not Found' });
    } catch (error) {
        res.status(500).json(error);
    }
};
export const deleteTour: RequestHandler<{ id: string }> = async (req, res) => {
    try {
        const tour = (await dbInstance.exec('getTour', { id: req.params.id })).recordset[0] as Tour;
        if (tour && tour.id) {
            await dbInstance.exec('deleteTour', { id: req.params.id });
            return res.status(200).json({ message: 'Tour Deleted' });
        }
        return res.status(404).json({ message: 'Tour Not Found' });
    } catch (error) {
        res.status(500).json(error);
    }
};