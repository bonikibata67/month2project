CREATE PROCEDURE deleteBooking
    @id NVARCHAR(50)
AS
BEGIN
    DELETE FROM Booking
    WHERE id = @id;
END
GO
