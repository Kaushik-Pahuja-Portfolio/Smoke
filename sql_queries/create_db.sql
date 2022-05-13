CREATE TABLE IF NOT EXISTS `Smoke`.`Players` (
  `player_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `phone` VARCHAR(10) NULL,
  `birthdate` DATE NULL,
  PRIMARY KEY (`player_ID`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Smoke`.`Licenses` (
  `player_id` INT UNSIGNED NOT NULL, foreign key to Players.player_id
  `game_id` INT UNSIGNED NOT NULL, foreign key to Games.game_id
  `purchase_date` DATE NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `valid` TINYINT NULL,
  PRIMARY KEY (`player_id`, `game_id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Smoke`.`Games` (
  `game_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(64) NOT NULL,
  `release_date` DATE NOT NULL,
  `store_page` VARCHAR(2083) NULL,
  `studio_id` INT NOT NULL, foreign key to Studios.studio_id
  PRIMARY KEY (`game_id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Smoke`.`Studios` (
  `studio_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NOT NULL,
  `website` VARCHAR(2083) NOT NULL,
  `phone` int unsigned (10) NULL,
  PRIMARY KEY (`studio_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Smoke`.`Genres` (
  `genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`genre`)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Smoke`.`GamesGenres` (
  `game_id` INT UNSIGNED NOT NULL, foreign key to Games.game_id
  `genre` VARCHAR(45) NOT NULL, foreign key to Genres.genre
  PRIMARY KEY (`game_id`, `genre`),
)ENGINE=InnoDB;


insert into Smoke.Genres (genre) values (
    ("action"),
    ("strategy"),
    ("turn-based"),
    ("roguelike"),
    ("soulslike"),
    ("rpg"),
    ("rts"),
    ("first person"),
    ("third person"),
    ("shooter"),
    ("dungeon crawler"),
    ("platformer"),
    ("rhythm"),
    ("idle"),
    ("city builder"),
    ("card game"),
    ("deck builder"),
    ("fighting game"),
    ("multiplayer"),
    ("single player"),
    ("mystery")
);

insert into Smoke.Studios (name, website, phone) values (
    ("Arkane Studios", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("EA", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("Epic Games", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("Nintendo", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("Ubisoft", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890)
);

insert into Smoke.Games(title, release_date, store_page, studio_id) values (
    ("a", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 0),
    ("b", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 2),
    ("c", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 1,
    ("d", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 4),
    ("e", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 3),
    ("f", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 3),
    ("g", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 0),
    ("h", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 4),
    ("i", VALUES.TO_DATE("01/23/4567", "mm/dd/yyyy"), "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1)
);