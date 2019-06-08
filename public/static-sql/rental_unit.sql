CREATE TABLE rental_unit
(
    rental_id Integer PRIMARY KEY,
    unit_description varchar(128),
    price Integer NOT NULL,
    unit_address varchar(128) NOT NULL,
    unit_type varchar(20) NOT NULL,
    postal_code varchar(10) NOT NULL,
    landlord_id Integer NOT NULL,
    FOREIGN KEY (landlord_id) REFERENCES landlord (landlord_id) ON DELETE CASCADE,
    FOREIGN KEY (postal_code) REFERENCES neighbourhood (postal_code)
);
