CREATE TABLE hospital (
    Address	varchar(255) NOT NULL PRIMARY KEY,
    Name	varchar(50),
    Type varchar(50),
    Postal_Code varchar(20), 
    FOREIGN KEY (Postal_Code) references neighborhood(Postal_Code));

-- public hospitals only 
INSERT INTO  hostpital("Address","Name","Type","Postal Code")
VALUES 
    ("899 W 12th Ave", "Vancouver General Hospital", "Public Hospital", "V5Z"),
    ("2775 Laurel St", "Vancouver General HospitalL Women's Clinic", "Public Hospital", "V5Z"),
    ("3080 Prince Edward St", "Mount Saint Joseph Hospital", "Public Hospital", "V5T"), 
    ("4500 Oak St", "BC Women’s Hospital", "Public Hospital", "V6H"), 
    ("4480 Oak St", "BC Children’s Hospital", "Public Hospital", "V6H"), 
    ("1081 Burrard St", "St Paul’s Hospital", "Public Hospital", "V6Z"), 
    ("377 E 2nd Ave", "Vancouver Coastal Health", "Public Hospital", "V5T"),
    ("1067 Burrard St", "Teck Emergency Centre", "Public Hospital", "V6Z"), 
    ("2211 Wesbrook Mall", "UBC Hospital", "Public Hospital", "V6T");


-- clinics only 
INSERT INTO  hostpital("Address","Name","Type","Postal Code")