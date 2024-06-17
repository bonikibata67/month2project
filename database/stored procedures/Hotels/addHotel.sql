CREATE PROCEDURE addHotel
    @id NVARCHAR(50),
    @image NVARCHAR(255),
    @name NVARCHAR(255),
    @location NVARCHAR(255),
    @description NVARCHAR(MAX),
    @price NVARCHAR(50)
AS
BEGIN
    INSERT INTO Hotel (id, image, name, location, description, price)
    VALUES (@id, @image, @name, @location, @description, @price)
END
GO
