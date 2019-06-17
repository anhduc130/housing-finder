CREATE TABLE neighbourhood
(
    postal_code varChar (10) NOT NULL PRIMARY KEY,
    neighbourhood_name varChar(40) NOT NULL,
    city_id int NOT NULL,
    FOREIGN KEY (city_id) references city(city_id)
);

-- South Vancouver: 
INSERT INTO neighbourhood VALUES ("V6P", "Marpole", "0001");
INSERT INTO neighbourhood VALUES ("V5X", "Sunset", "0001");
INSERT INTO neighbourhood VALUES ("V5P", "Victoria-Fraserview", "0001");
INSERT INTO neighbourhood VALUES ("V5S", "Renfrew-Killarney", "0001");

-- East Vancouver: 
INSERT INTO neighbourhood VALUES ("V5L", "Grandview-Woodland", "0001");
INSERT INTO neighbourhood VALUES ("V5K", "Hastings-Sunrise", "0001");
INSERT INTO neighbourhood VALUES ("V5N", "Kensington-Cedar Cottage", "0001");
INSERT INTO neighbourhood VALUES ("V5R", "Renfrew-Collingwood", "0001");
INSERT INTO neighbourhood VALUES ("V5Y", "MountPleasant-Hillcrest-Oakridge", "0001");

-- West Vancouver
INSERT INTO neighbourhood VALUES ("V6T", "University Endowment Lands", "0001");
INSERT INTO neighbourhood VALUES ("V6R", "West Point Grey", "0001");
INSERT INTO neighbourhood VALUES ("V6K", "Kitsilano", "0001");
INSERT INTO neighbourhood VALUES ("V6N", "Dunbar Southlands", "0001");
INSERT INTO neighbourhood VALUES ("V6M", "Kerrisdale", "0001");
INSERT INTO neighbourhood VALUES ("V5Z", "SouthCambie-Oakridge", "0001");
INSERT INTO neighbourhood VALUES ("V6J", "Shaughnessy-KitsPoint", "0001");
INSERT INTO neighbourhood VALUES ("V6L", "Arbutus Ridge", "0001");

-- Central Vancouver: 
INSERT INTO neighbourhood VALUES ("V6G", "West End", "0001");
INSERT INTO neighbourhood VALUES ("V6A", "Chinatown-DowntownEastside-Strathcona", "0001");
INSERT INTO neighbourhood VALUES ("V6B", "Downtown-Gastown-Coalharbour" , "0001");
INSERT INTO neighbourhood VALUES ("V6Z", "Yaletown" , "0001");
