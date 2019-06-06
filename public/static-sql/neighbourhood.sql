CREATE TABLE Neighbourhood (
Postal_Code varChar (20) NOT NULL PRIMARY KEY,  
Name varChar(20) NOT NULL,
City_ID int NOT NULL,
FOREIGN KEY (City_ID) references City(City_ID));

-- South Vancouver: 

INSERT INTO Neighbourhood VALUES ("V6P", "Marpole", "0001");
INSERT INTO Neighbourhood VALUES ("V5X", "Sunset", "0001");
INSERT INTO Neighbourhood VALUES ("V5P", "Victoria-FraserView", "0001");
INSERT INTO Neighbourhood VALUES ("V5S", "Renfrew-Killarney", "0001");


-- East Vancouver: 

INSERT INTO Neighbourhood VALUES ("V5L", "Grandview-Woodland", "0001");
INSERT INTO Neighbourhood VALUES ("V5K", "Hastings-Sunrise", "0001");
INSERT INTO Neighbourhood VALUES ("V5N", "Kensington-Cedar Cottage", "0001");
INSERT INTO Neighbourhood VALUES ("V5R", "Renfrew-Collingwood", "0001");
INSERT INTO Neighbourhood VALUES ("V5Y", "MountPleasant-Hillcrest-Oakridge", "0001");
INSERT INTO Neighbourhood VALUES ("V6A", "Strathcona", "0001");

-- West Vancouver

INSERT INTO Neighbourhood VALUES ("V6R", "West Point Grey", "0001");
INSERT INTO Neighbourhood VALUES ("V6K", "Kitsilano", "0001");
INSERT INTO Neighbourhood VALUES ("V6N", "Dunbar Southlands", "0001");
INSERT INTO Neighbourhood VALUES ("V6M", "Kerrisdale", "0001");
INSERT INTO Neighbourhood VALUES ("V5Z", "South Cambie-Oakridge", "0001");
INSERT INTO Neighbourhood VALUES ("V6J", "Shaughnessy-KitsPoint", "0001");
INSERT INTO Neighbourhood VALUES ("V6L", "Arbutus Ridge", "0001");

-- Central Vancouver: 
INSERT INTO Neighbourhood VALUES ("V6N", "West End", "0001");
INSERT INTO Neighbourhood VALUES ("V6A", "Chinatown-DowntownEastside", "0001");
INSERT INTO Neighbourhood VALUES ("V6B", "Downtown-Gastown-Coalharbour" , "0001");
INSERT INTO Neighbourhood VALUES ("V6Z", "Yaletown" , "0001");
