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

ALTER TABLE tamagotchi_stats
    MODIFY COLUMN happiness_level INT DEFAULT 1,
    MODIFY COLUMN friendship_level INT DEFAULT 1,
    MODIFY COLUMN weight FLOAT DEFAULT 30;




