USE tamagotchidb;

CREATE TABLE IF NOT EXISTS tamagotchi_stats (

id INT AUTO_INCREMENT PRIMARY KEY,

health INT DEFAULT 100,

hunger INT DEFAULT 50,

happiness_level INT DEFAULT 0,

friendship_level INT DEFAULT 0,

age INT DEFAULT 0,

weight FLOAT DEFAULT 5,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

SET GLOBAL event_scheduler = ON;

ALTER EVENT age_hourly
    ON SCHEDULE EVERY 1 HOUR
    DO 
        UPDATE tamagotchi_stats
        SET age = age + 1
        WHERE id = 1;

ALTER EVENT cleanup_old_age
    ON SCHEDULE EVERY 1 DAY 
    STARTS '2024-9-16 00:00:00'
    DO
        UPDATE tamagotchi_stats
        SET age = 0
        WHERE age > 100;

CREATE EVENT hunger_hourly
    ON SCHEDULE EVERY 1 HOUR
    DO 
        UPDATE tamagotchi_stats
        SET hunger = hunger - 1
        WHERE id = 1;







