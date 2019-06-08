CREATE TABLE landlord
(
    landlord_id Integer PRIMARY KEY,
    landlord_name varchar(20) NOT NULL,
    email varchar(20) NOT NULL UNIQUE,
    phone_number varchar(12)
);
