CREATE TABLE hospital
(
    hospital_address varchar(255) NOT NULL PRIMARY KEY,
    hospital_name varchar(50),
    hospital_type varchar(50),
    postal_code varchar(20) NOT NULL,
    FOREIGN KEY (postal_code) references neighbourhood(postal_code)
);

-- public hospitals only 
INSERT INTO  hospital
VALUES
    ("899 W 12th Ave", "Vancouver General Hospital", "Public Hospital", "V5Z"),
    ("2775 Laurel St", "Vancouver General HospitalL Women's Clinic", "Public Hospital", "V5Z"),
    ("3080 Prince Edward St", "Mount Saint Joseph Hospital", "Public Hospital", "V5Y"),
    ("4500 Oak St", "BC Women’s Hospital", "Public Hospital", "V6J"),
    ("4480 Oak St", "BC Children’s Hospital", "Public Hospital", "V6J"),
    ("1081 Burrard St", "St Paul’s Hospital", "Public Hospital", "V6Z"),
    ("377 E 2nd Ave", "Vancouver Coastal Health", "Public Hospital", "V5Y"),
    ("1067 Burrard St", "Teck Emergency Centre", "Public Hospital", "V6Z"),
    ("2211 Wesbrook Mall", "UBC Hospital", "Public Hospital", "V6T");


-- clinics only 
-- INSERT INTO  hostpital("Address","Name","Type","Postal Code")
