CREATE TABLE landlord
(
    landlord_id varchar(128) PRIMARY KEY,
    landlord_name varchar(128) NOT NULL,
    landlord_email varchar(128) NOT NULL UNIQUE,
    landlord_password varchar(256) NOT NULL,
    landlord_phone_number varchar(50)
);
