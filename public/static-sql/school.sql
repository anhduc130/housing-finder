CREATE TABLE school
(
    Address	varchar(255) NOT NULL PRIMARY KEY,
    Name	varchar(50),
    Type varchar(20),
    Postal_Code varchar(20), 
    FOREIGN KEY (Postal_Code) references neighborhood(Postal_Code));