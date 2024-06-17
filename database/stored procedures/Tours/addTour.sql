USE tourBooking;
GO

CREATE PROCEDURE addTour
    @id NVARCHAR(50),
    @image NVARCHAR(255),
    @name NVARCHAR(100),
    @destination NVARCHAR(100),
    @description NVARCHAR(MAX),
    @price NVARCHAR(50)
AS
BEGIN
    INSERT INTO Tour (id, image, name, destination, description, price)
    VALUES (@id, @image, @name, @destination, @description, @price)
END
GO