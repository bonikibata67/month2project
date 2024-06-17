CREATE PROCEDURE getBooking
    @id NVARCHAR(50)
AS
BEGIN
    SELECT id, username, tour, hotel, bookingDate
    FROM Booking
    WHERE id = @id;
END
GO
