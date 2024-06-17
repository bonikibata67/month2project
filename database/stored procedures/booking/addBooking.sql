CREATE PROCEDURE addBooking
    @id NVARCHAR(50),
    @username NVARCHAR(255),
    @tour NVARCHAR(255),
    @hotel NVARCHAR(255),
    @bookingDate NVARCHAR(50)
AS
BEGIN
    INSERT INTO Booking (id, username, tour, hotel, bookingDate)
    VALUES (@id, @username, @tour, @hotel, @bookingDate);
END
GO
