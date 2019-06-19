CREATE TABLE Translink
(
    Route varchar(10),
    postal_code varchar(10),
    PRIMARY KEY (Route, postal_code),
    FOREIGN KEY (postal_code) references neighbourhood(postal_code)
);
-- South
INSERT INTO Translink VALUES ("017", "V6P");
INSERT INTO Translink VALUES ("049", "V6P");
INSERT INTO Translink VALUES ("323", "V6P");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6P");

INSERT INTO Translink VALUES ("003", "V5X");
INSERT INTO Translink VALUES ("049", "V5X");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V5X");

INSERT INTO Translink VALUES ("033", "V5P");
INSERT INTO Translink VALUES ("022", "V5P");

INSERT INTO Translink VALUES ("029", "V5S");
INSERT INTO Translink VALUES ("049", "V5S");
INSERT INTO Translink VALUES ("430", "V5S");
-- East
INSERT INTO Translink VALUES ("004", "V5L");
INSERT INTO Translink VALUES ("209", "V5L");
INSERT INTO Translink VALUES ("232", "V5L");
INSERT INTO Translink VALUES ("297", "V5L");
INSERT INTO Translink VALUES ("210", "V5L");
INSERT INTO Translink VALUES ("211", "V5L");
INSERT INTO Translink VALUES ("214", "V5L");
INSERT INTO Translink VALUES ("007", "V5L");
INSERT INTO Translink VALUES ("453", "V5L");

INSERT INTO Translink VALUES ("004", "V5K");
INSERT INTO Translink VALUES ("209", "V5K");
INSERT INTO Translink VALUES ("210", "V5K");
INSERT INTO Translink VALUES ("214", "V5K");

INSERT INTO Translink VALUES ("007", "V5N");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V5N");
INSERT INTO Translink VALUES ("Millennium Line", "skyTrain", "V5N");

INSERT INTO Translink VALUES ("025", "V5R");
INSERT INTO Translink VALUES ("027", "V5R");
INSERT INTO Translink VALUES ("Millennium Line", "skyTrain", "V5R");

INSERT INTO Translink VALUES ("084", "V5Y");
INSERT INTO Translink VALUES ("115", "V5Y");
INSERT INTO Translink VALUES ("003", "V5Y");
INSERT INTO Translink VALUES ("008", "V5Y");
INSERT INTO Translink VALUES ("019", "V5Y");
INSERT INTO Translink VALUES ("N19", "V5Y");
INSERT INTO Translink VALUES ("N8", "V5Y");
INSERT INTO Translink VALUES ("287", "V5Y");
INSERT INTO Translink VALUES ("333", "V5Y");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V5Y");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V5Y");
-- WEST
INSERT INTO Translink VALUES ("004", "V6T");
INSERT INTO Translink VALUES ("084", "V6T");
INSERT INTO Translink VALUES ("044", "V6T");
INSERT INTO Translink VALUES ("362", "V6T");
INSERT INTO Translink VALUES ("014", "V6T");
INSERT INTO Translink VALUES ("398", "V6T");

INSERT INTO Translink VALUES ("042", "V6R");

INSERT INTO Translink VALUES ("002", "V6K");
INSERT INTO Translink VALUES ("032", "V6K");
INSERT INTO Translink VALUES ("N22", "V6K");
INSERT INTO Translink VALUES ("004", "V6K");
INSERT INTO Translink VALUES ("007", "V6K");
INSERT INTO Translink VALUES ("381", "V6K");
INSERT INTO Translink VALUES ("084", "V6K");
INSERT INTO Translink VALUES ("044", "V6K");

INSERT INTO Translink VALUES ("041", "V6N");
INSERT INTO Translink VALUES ("002", "V6N");
INSERT INTO Translink VALUES ("N22", "V6N");

INSERT INTO Translink VALUES ("016", "V6M");

INSERT INTO Translink VALUES ("009", "V5Z");
INSERT INTO Translink VALUES ("017", "V5Z");
INSERT INTO Translink VALUES ("050", "V5Z");
INSERT INTO Translink VALUES ("084", "V5Z");
INSERT INTO Translink VALUES ("099", "V5Z");
INSERT INTO Translink VALUES ("211", "V5Z");
INSERT INTO Translink VALUES ("265", "V5Z");
INSERT INTO Translink VALUES ("N9", "V5Z");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V5Z");

INSERT INTO Translink VALUES ("002", "V6J");
INSERT INTO Translink VALUES ("032", "V6J");
INSERT INTO Translink VALUES ("N22", "V6J");

INSERT INTO Translink VALUES ("033", "V6L");
INSERT INTO Translink VALUES ("016", "V6L");
INSERT INTO Translink VALUES ("025", "V6L");

-- CENTRAL

INSERT INTO Translink VALUES ("005", "V6G");
INSERT INTO Translink VALUES ("240", "V6G");
INSERT INTO Translink VALUES ("241", "V6G");
INSERT INTO Translink VALUES ("216", "V6G");
INSERT INTO Translink VALUES ("242", "V6G");
INSERT INTO Translink VALUES ("246", "V6G");
INSERT INTO Translink VALUES ("247", "V6G");
INSERT INTO Translink VALUES ("250", "V6G");
INSERT INTO Translink VALUES ("253", "V6G");
INSERT INTO Translink VALUES ("254", "V6G");
INSERT INTO Translink VALUES ("N24", "V6G");
INSERT INTO Translink VALUES ("019", "V6G");
INSERT INTO Translink VALUES ("257", "V6G");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V6G");

INSERT INTO Translink VALUES ("004", "V6A");
INSERT INTO Translink VALUES ("007", "V6A");
INSERT INTO Translink VALUES ("209", "V6A");
INSERT INTO Translink VALUES ("210", "V6A");
INSERT INTO Translink VALUES ("211", "V6A");
INSERT INTO Translink VALUES ("214", "V6A");
INSERT INTO Translink VALUES ("290", "V6A");
INSERT INTO Translink VALUES ("014", "V6A");
INSERT INTO Translink VALUES ("016", "V6A");
INSERT INTO Translink VALUES ("020", "V6A");
INSERT INTO Translink VALUES ("N20", "V6A");
INSERT INTO Translink VALUES ("N35", "V6A");
INSERT INTO Translink VALUES ("095", "V6A");
INSERT INTO Translink VALUES ("022", "V6A");
INSERT INTO Translink VALUES ("019", "V6A");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6A");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V6A");

INSERT INTO Translink VALUES ("053", "V6B");
INSERT INTO Translink VALUES ("017", "V6B");
INSERT INTO Translink VALUES ("N15", "V6B");
INSERT INTO Translink VALUES ("137", "V6B");
INSERT INTO Translink VALUES ("149", "V6B");
INSERT INTO Translink VALUES ("006", "V6B");
INSERT INTO Translink VALUES ("023", "V6B");
INSERT INTO Translink VALUES ("240", "V6B");
INSERT INTO Translink VALUES ("241", "V6B");
INSERT INTO Translink VALUES ("246", "V6B");
INSERT INTO Translink VALUES ("247", "V6B");
INSERT INTO Translink VALUES ("250", "V6B");
INSERT INTO Translink VALUES ("253", "V6B");
INSERT INTO Translink VALUES ("254", "V6B");
INSERT INTO Translink VALUES ("N24", "V6B");
INSERT INTO Translink VALUES ("004", "V6B");
INSERT INTO Translink VALUES ("007", "V6B");
INSERT INTO Translink VALUES ("010", "V6B");
INSERT INTO Translink VALUES ("014", "V6B");
INSERT INTO Translink VALUES ("016", "V6B");
INSERT INTO Translink VALUES ("020", "V6B");
INSERT INTO Translink VALUES ("050", "V6B");
INSERT INTO Translink VALUES ("N17", "V6B");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6B");
INSERT INTO Translink VALUES ("Expo Line", "skyTrain", "V6B");

INSERT INTO Translink VALUES ("002", "V6Z");
INSERT INTO Translink VALUES ("004", "V6Z");
INSERT INTO Translink VALUES ("006", "V6Z");
INSERT INTO Translink VALUES ("007", "V6Z");
INSERT INTO Translink VALUES ("010", "V6Z");
INSERT INTO Translink VALUES ("014", "V6Z");
INSERT INTO Translink VALUES ("016", "V6Z");
INSERT INTO Translink VALUES ("023", "V6Z");
INSERT INTO Translink VALUES ("032", "V6Z");
INSERT INTO Translink VALUES ("044", "V6Z");
INSERT INTO Translink VALUES ("050", "V6Z");
INSERT INTO Translink VALUES ("N9", "V6Z");
INSERT INTO Translink VALUES ("N10", "V6Z");
INSERT INTO Translink VALUES ("N17", "V6Z");
INSERT INTO Translink VALUES ("N22", "V6Z");
INSERT INTO Translink VALUES ("CL", "skyTrain", "V6Z");
