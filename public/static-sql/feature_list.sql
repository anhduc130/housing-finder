CREATE TABLE feature_list
(
    unit_id varchar(128),
    number_of_rooms integer,
    parking varchar(10),
    smoking varchar(10),
    pets varchar(10),
    posted_date Date,
    PRIMARY KEY (unit_id, posted_date),
    FOREIGN KEY (unit_id) REFERENCES rental_unit (unit_id) ON DELETE CASCADE
);
