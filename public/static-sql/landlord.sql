CREATE TABLE landlord
(
    landlord_id Integer PRIMARY KEY,
    landlord_name varchar(20) NOT NULL,
    landlord_email varchar(20) NOT NULL UNIQUE,
    landlord_password varchar(128) NOT NULL,
    landlord_phone_number varchar(12)
);
