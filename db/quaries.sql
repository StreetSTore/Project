select * from stores;
select * from users_data;
select * from address;

INSERT INTO stores (email) VALUE ('mail@mail.com');

UPDATE address SET street_num = 1;
UPDATE stores SET registration_date = NOW();

SELECT stores.hp_id, stores.name, stores.type, stores.sub_type, stores.phone, stores.description, stores.logo, address.latitude, address.longitude FROM address INNER JOIN stores ON address.address_id = stores.address_id WHERE is_active = 1

DELETE FROM address where address_id = 1231;
DELETE FROM stores where hp_id = 5555;

SELECT latitude, longitude FROM address WHERE address_id = 65481;

fdfTRUNCATE table address;
dfsdTRUNCATE table stores;
dsfdsTRUNCATE table users_data;

update stores 
set address_id = 7956
where hp_id = 65483;

SELECT COUNT(user_id) AS NumberOfUsers FROM users_data WHERE email = 'bobdm@mail.com';