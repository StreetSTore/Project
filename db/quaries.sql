select * from stores;
select * from users_data;
select * from address;

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