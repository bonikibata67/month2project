import express from 'express';
import cron from 'node-cron';
import { run as runEmailService } from './config/Emailservice';
import Tourrouter from './Routes/toursroutes';
import Hotelrouter from './Routes/hotelroutes';
import Bookingrouter from './Routes/bookingroutes';
import authRoutes from './Routes/authroutes';

const app = express();
cron.schedule('*/10 * * * * *', async () => {
    await runEmailService();
});


app.use(express.json());
app.use('/api', Tourrouter);
app.use('/api', Hotelrouter);
app.use('/', Bookingrouter);
app.use('/', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

