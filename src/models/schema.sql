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

CREATE EVENT age_hourly
    ON SCHEDULE EVERY 1 HOUR
    DO 
        UPDATE tamagotchi_stats
        SET age = age + 1;

CREATE EVENT cleanup_old_age
    ON SCHEDULE EVERY 1 MONTH 
    STARTS '2024-10-1-00:00:00'
    DO
        UPDATE tamagotchi_stats
        SET age = 0;

CREATE EVENT hunger_hourly
    ON SCHEDULE EVERY 1 HOUR
    DO 
        UPDATE tamagotchi_stats
        SET hunger = hunger - 1;

CREATE TABLE IF NOT EXISTS tamagotchi_users (
user_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL, 
email VARCHAR(255) NOT NULL;
)

