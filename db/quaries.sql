select * from stores;

select * from address;

DELETE FROM address where address_id = 1231;
DELETE FROM stores where hp_id = 5555;

SELECT latitude, longitude FROM address WHERE address_id = 65481;

fdfTRUNCATE table address;
dfsdTRUNCATE table stores;

update stores 
set address_id = 7956
where hp_id = 65483;

