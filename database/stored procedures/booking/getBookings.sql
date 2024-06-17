CREATE PROCEDURE getBookings
AS
BEGIN
    SELECT id, username, tour, hotel, bookingDate
    FROM Booking;
END
GO
