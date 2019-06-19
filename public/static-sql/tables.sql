CREATE TABLE restaurant
(
    restaurant_address	varchar(255) NOT NULL PRIMARY KEY,
    restaurant_name	    varchar(50),
    restaurant_cuisine  varchar(40),
    postal_code         varchar(10) NOT NULL, 
    FOREIGN KEY (postal_code) references neighbourhood(postal_code));

CREATE TABLE supermarket
(
    supermarket_address	varchar(255) NOT NULL PRIMARY KEY,
    supermarket_name	varchar(50),
    supermarket_type    varchar(20),
    postal_code         varchar(10) NOT NULL, 
    FOREIGN KEY (postal_code) references neighbourhood(postal_code));