CREATE TABLE City ( 
City_ID int PRIMARY KEY, 
Name varChar(20) NOT NULL UNIQUE,
Province_Name varChar(20) NOT NULL,
FOREIGN KEY (Province_Name) references Province(Province_Name)); 

INSERT INTO City VALUES ("0001", "Vancouver", BC);
INSERT INTO City VALUES ("0002", "Richmond", BC);
INSERT INTO City VALUES ("0003", "Langley", BC);
INSERT INTO City VALUES ("0004", "Kelowna", BC);
INSERT INTO City VALUES ("0005", "Surrey", BC);