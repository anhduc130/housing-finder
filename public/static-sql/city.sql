CREATE TABLE city
(
    city_id int PRIMARY KEY,
    city_name varChar(20) NOT NULL,
    province_name varChar(20) NOT NULL,
    FOREIGN KEY (province_name) references province(province_name)
);

INSERT INTO city VALUES ("0001", "Vancouver", "BC");
INSERT INTO city VALUES ("0002", "Richmond", "BC");
INSERT INTO city VALUES ("0003", "Langley", "BC");
INSERT INTO city VALUES ("0004", "Kelowna", "BC");
INSERT INTO city VALUES ("0005", "Surrey", "BC");