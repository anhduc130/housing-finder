CREATE TABLE school
(
    Address	varchar(255) NOT NULL PRIMARY KEY,
    Name	varchar(50),
    Type varchar(20),
    Postal_Code varchar(20), 
    FOREIGN KEY (Postal_Code) references neighborhood(Postal_Code));

-- UNIVERSITIES ONLY
INSERT INTO school ("Address","Name","Facility","Postal Code")
VALUES
    ("2329 West Mall", "University of British Columbia", "University", "V6T"),
    ("515 W Hastings St", "Simon Fraser University (Downtown Campus)", "University", "V6B"),
    ("438 Terminal Ave", "Columbia College", "University", "V6A"),
    ("100 W 49th Ave", "Langara College", "University", "V5Y"),
    ("250 W Pender St", "Vancouver Community College", "University", "V6B"),
    ("555 Seymour St", "BCIT (Downtown Campus)", "University", "V6B"),
    ("410 Robson St", "Blanche Macdonald Centre", "University", "V6B"),
    ("520 E 1st Ave", "Emily Carr University of Art + Design", "University", "V5T"),
    ("198 W Hastings St", "Vancouver Film School", "University", "V6B");

    
    

