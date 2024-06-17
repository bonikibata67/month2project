import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Booking, BookingRequest } from '../Models/bookingmodels';
import { DbHelper } from '../DatabaseHelpers';


const dbInstance = new DbHelper();

export const addBooking = async (req: Request, res: Response): Promise<void> => {
    const { username, tour, hotel, bookingDate } = req.body;

    try {
        const id = uuidv4();
        await dbInstance.exec('addBooking', { id, username, tour, hotel, bookingDate });
        res.status(201).json({ message: 'Booking added successfully', id });
    } catch (error) {
        res.status(500).json({ message: 'error.message' });
    }
};

export const getBookings = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { recordset } = await dbInstance.exec('getBookings', {});
        res.status(200).json(recordset);
    } catch (error) {
        res.status(500).json({ message: 'error.message' });
    }
};

export const getBooking = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const id = req.params.id;

    try {
        const { recordset } = await dbInstance.exec('getBooking', { id });
        if (recordset && recordset.length > 0) {
            res.status(200).json(recordset[0]);
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error.message' });
    }
};

export const deleteBooking = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const id = req.params.id;

    try {
        await dbInstance.exec('deleteBooking', { id });
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'error.message' });
    }
};
