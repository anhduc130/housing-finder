CREATE TABLE Translink
(
    Route varchar(10),
    Type varchar(128),
    postal_code varchar(10),
    PRIMARY KEY (Route, postal_code),
    FOREIGN KEY (postal_code) references neighbourhood(postal_code)
);
-- South
INSERT INTO Translink VALUES ("017", "bus", "V6P");
INSERT INTO Translink VALUES ("049", "bus", "V6P");
INSERT INTO Translink VALUES ("323", "bus", "V6P");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6P");

INSERT INTO Translink VALUES ("003", "bus", "V5X");
INSERT INTO Translink VALUES ("049", "bus", "V5X");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V5X");

INSERT INTO Translink VALUES ("033", "bus", "V5P");
INSERT INTO Translink VALUES ("022", "bus", "V5P");

INSERT INTO Translink VALUES ("029", "bus", "V5S");
INSERT INTO Translink VALUES ("049", "bus", "V5S");
INSERT INTO Translink VALUES ("430", "bus", "V5S");
-- East
INSERT INTO Translink VALUES ("004", "bus", "V5L");
INSERT INTO Translink VALUES ("209", "bus", "V5L");
INSERT INTO Translink VALUES ("232", "bus", "V5L");
INSERT INTO Translink VALUES ("297", "bus", "V5L");
INSERT INTO Translink VALUES ("210", "bus", "V5L");
INSERT INTO Translink VALUES ("211", "bus", "V5L");
INSERT INTO Translink VALUES ("214", "bus", "V5L");
INSERT INTO Translink VALUES ("007", "bus", "V5L");
INSERT INTO Translink VALUES ("453", "bus", "V5L");

INSERT INTO Translink VALUES ("004", "bus", "V5K");
INSERT INTO Translink VALUES ("209", "bus", "V5K");
INSERT INTO Translink VALUES ("210", "bus", "V5K");
INSERT INTO Translink VALUES ("214", "bus", "V5K");

INSERT INTO Translink VALUES ("007", "bus", "V5N");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V5N");
INSERT INTO Translink VALUES ("Millennium Line", "skyTrain", "V5N");

INSERT INTO Translink VALUES ("025", "bus", "V5R");
INSERT INTO Translink VALUES ("027", "bus", "V5R");
INSERT INTO Translink VALUES ("Millennium Line", "skyTrain", "V5R");

INSERT INTO Translink VALUES ("084", "bus", "V5Y");
INSERT INTO Translink VALUES ("115", "bus", "V5Y");
INSERT INTO Translink VALUES ("003", "bus", "V5Y");
INSERT INTO Translink VALUES ("008", "bus", "V5Y");
INSERT INTO Translink VALUES ("019", "bus", "V5Y");
INSERT INTO Translink VALUES ("N19", "bus", "V5Y");
INSERT INTO Translink VALUES ("N8", "bus", "V5Y");
INSERT INTO Translink VALUES ("287", "bus", "V5Y");
INSERT INTO Translink VALUES ("333", "bus", "V5Y");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V5Y");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V5Y");
-- WEST
INSERT INTO Translink VALUES ("004", "bus", "V6T");
INSERT INTO Translink VALUES ("084", "bus", "V6T");
INSERT INTO Translink VALUES ("044", "bus", "V6T");
INSERT INTO Translink VALUES ("362", "bus", "V6T");
INSERT INTO Translink VALUES ("014", "bus", "V6T");
INSERT INTO Translink VALUES ("398", "bus", "V6T");

INSERT INTO Translink VALUES ("042", "bus", "V6R");

INSERT INTO Translink VALUES ("002", "bus", "V6K");
INSERT INTO Translink VALUES ("032", "bus", "V6K");
INSERT INTO Translink VALUES ("N22", "bus", "V6K");
INSERT INTO Translink VALUES ("004", "bus", "V6K");
INSERT INTO Translink VALUES ("007", "bus", "V6K");
INSERT INTO Translink VALUES ("381", "bus", "V6K");
INSERT INTO Translink VALUES ("084", "bus", "V6K");
INSERT INTO Translink VALUES ("044", "bus", "V6K");

INSERT INTO Translink VALUES ("041", "bus", "V6N");
INSERT INTO Translink VALUES ("002", "bus", "V6N");
INSERT INTO Translink VALUES ("N22", "bus", "V6N");

INSERT INTO Translink VALUES ("016", "bus", "V6M");

INSERT INTO Translink VALUES ("009", "bus", "V5Z");
INSERT INTO Translink VALUES ("017", "bus", "V5Z");
INSERT INTO Translink VALUES ("050", "bus", "V5Z");
INSERT INTO Translink VALUES ("084", "bus", "V5Z");
INSERT INTO Translink VALUES ("099", "bus", "V5Z");
INSERT INTO Translink VALUES ("211", "bus", "V5Z");
INSERT INTO Translink VALUES ("265", "bus", "V5Z");
INSERT INTO Translink VALUES ("N9", "bus", "V5Z");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V5Z");

INSERT INTO Translink VALUES ("002", "bus", "V6J");
INSERT INTO Translink VALUES ("032", "bus", "V6J");
INSERT INTO Translink VALUES ("N22", "bus", "V6J");

INSERT INTO Translink VALUES ("033", "bus", "V6L");
INSERT INTO Translink VALUES ("016", "bus", "V6L");
INSERT INTO Translink VALUES ("025", "bus", "V6L");

-- CENTRAL

INSERT INTO Translink VALUES ("005", "bus", "V6G");
INSERT INTO Translink VALUES ("240", "bus", "V6G");
INSERT INTO Translink VALUES ("241", "bus", "V6G");
INSERT INTO Translink VALUES ("216", "bus", "V6G");
INSERT INTO Translink VALUES ("242", "bus", "V6G");
INSERT INTO Translink VALUES ("246", "bus", "V6G");
INSERT INTO Translink VALUES ("247", "bus", "V6G");
INSERT INTO Translink VALUES ("250", "bus", "V6G");
INSERT INTO Translink VALUES ("253", "bus", "V6G");
INSERT INTO Translink VALUES ("254", "bus", "V6G");
INSERT INTO Translink VALUES ("N24", "bus", "V6G");
INSERT INTO Translink VALUES ("019", "bus", "V6G");
INSERT INTO Translink VALUES ("257", "bus", "V6G");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V6G");

INSERT INTO Translink VALUES ("004", "bus", "V6A");
INSERT INTO Translink VALUES ("007", "bus", "V6A");
INSERT INTO Translink VALUES ("209", "bus", "V6A");
INSERT INTO Translink VALUES ("210", "bus", "V6A");
INSERT INTO Translink VALUES ("211", "bus", "V6A");
INSERT INTO Translink VALUES ("214", "bus", "V6A");
INSERT INTO Translink VALUES ("290", "bus", "V6A");
INSERT INTO Translink VALUES ("014", "bus", "V6A");
INSERT INTO Translink VALUES ("016", "bus", "V6A");
INSERT INTO Translink VALUES ("020", "bus", "V6A");
INSERT INTO Translink VALUES ("N20", "bus", "V6A");
INSERT INTO Translink VALUES ("N35", "bus", "V6A");
INSERT INTO Translink VALUES ("095", "bus", "V6A");
INSERT INTO Translink VALUES ("022", "bus", "V6A");
INSERT INTO Translink VALUES ("019", "bus", "V6A");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6A");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V6A");

INSERT INTO Translink VALUES ("053", "bus", "V6B");
INSERT INTO Translink VALUES ("017", "bus", "V6B");
INSERT INTO Translink VALUES ("N15", "bus", "V6B");
INSERT INTO Translink VALUES ("137", "bus", "V6B");
INSERT INTO Translink VALUES ("149", "bus", "V6B");
INSERT INTO Translink VALUES ("006", "bus", "V6B");
INSERT INTO Translink VALUES ("023", "bus", "V6B");
INSERT INTO Translink VALUES ("240", "bus", "V6B");
INSERT INTO Translink VALUES ("241", "bus", "V6B");
INSERT INTO Translink VALUES ("246", "bus", "V6B");
INSERT INTO Translink VALUES ("247", "bus", "V6B");
INSERT INTO Translink VALUES ("250", "bus", "V6B");
INSERT INTO Translink VALUES ("253", "bus", "V6B");
INSERT INTO Translink VALUES ("254", "bus", "V6B");
INSERT INTO Translink VALUES ("N24", "bus", "V6B");
INSERT INTO Translink VALUES ("004", "bus", "V6B");
INSERT INTO Translink VALUES ("007", "bus", "V6B");
INSERT INTO Translink VALUES ("010", "bus", "V6B");
INSERT INTO Translink VALUES ("014", "bus", "V6B");
INSERT INTO Translink VALUES ("016", "bus", "V6B");
INSERT INTO Translink VALUES ("020", "bus", "V6B");
INSERT INTO Translink VALUES ("050", "bus", "V6B");
INSERT INTO Translink VALUES ("N17", "bus", "V6B");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6B");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V6B");

INSERT INTO Translink VALUES ("002", "bus", "V6Z");
INSERT INTO Translink VALUES ("004", "bus", "V6Z");
INSERT INTO Translink VALUES ("006", "bus", "V6Z");
INSERT INTO Translink VALUES ("007", "bus", "V6Z");
INSERT INTO Translink VALUES ("010", "bus", "V6Z");
INSERT INTO Translink VALUES ("014", "bus", "V6Z");
INSERT INTO Translink VALUES ("016", "bus", "V6Z");
INSERT INTO Translink VALUES ("023", "bus", "V6Z");
INSERT INTO Translink VALUES ("032", "bus", "V6Z");
INSERT INTO Translink VALUES ("044", "bus", "V6Z");
INSERT INTO Translink VALUES ("050", "bus", "V6Z");
INSERT INTO Translink VALUES ("N9", "bus", "V6Z");
INSERT INTO Translink VALUES ("N10", "bus", "V6Z");
INSERT INTO Translink VALUES ("N17", "bus", "V6Z");
INSERT INTO Translink VALUES ("N22", "bus", "V6Z");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6Z");
