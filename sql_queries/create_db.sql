set foreign_key_checks=0;
drop table if exists Players;
drop table if exists Licenses;
drop table if exists Games;
drop table if exists Studios;
drop table if exists Genres;
drop table if exists GamesGenres;


CREATE TABLE IF NOT EXISTS `Studios` (
  `studio_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NOT NULL,
  `website` VARCHAR(2083) NOT NULL,
  `phone` int(10) unsigned  NULL,
  PRIMARY KEY (`studio_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE
);

CREATE TABLE IF NOT EXISTS `Players` (
  `player_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `phone` VARCHAR(10) NULL,
  `birthdate` DATE NULL,
  PRIMARY KEY (`player_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE
--  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE
);

CREATE TABLE IF NOT EXISTS `Games` (
  `game_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(64) NOT NULL,
  `release_date` DATE NOT NULL,
  `store_page` VARCHAR(2083) NULL,
  `studio_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`game_id`),
  constraint foreign key(`studio_id`) references `Studios`(`studio_id`)
);

CREATE TABLE IF NOT EXISTS `Licenses` (
  `player_id` INT UNSIGNED NOT NULL,
  `game_id` INT UNSIGNED NOT NULL,
  `purchase_date` DATE NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `valid` TINYINT NULL,
  PRIMARY KEY (`player_id`, `game_id`),
  constraint foreign key (`player_id`) references `Players`(`player_id`) on delete cascade,
  constraint foreign key (`game_id`) references `Games`(`game_id`)
);


CREATE TABLE IF NOT EXISTS `Genres` (
  `genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`genre`)
);

CREATE TABLE IF NOT EXISTS `GamesGenres` (
  `game_id` INT UNSIGNED NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`game_id`, `genre`),
  constraint foreign key (`game_id`) references `Games`(`game_id`),
  constraint foreign key (`genre`) references `Genres`(`genre`)
);

insert into Players (username, email, phone, birthdate) VALUES 
    ("player1", "player.email@gmail.com", 1234567890, "1992-10-10"),
    ("player2", "other.email@yahoo.com", 1234567890, "1997-07-21"),
    ("player3", "player3@oregonstate.edu", 1234567890, "1994-11-14"),
    ("player4", "yet.another.email@gmail.com", 1234567890, "2005-12-01"),
    ("player5", "many.emails@gmail.com", 1234567890, "2010-03-17")
;

insert into Genres (genre) values
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
;

insert into Studios (name, website, phone) values 
    ("Arkane Studios", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("EA", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("Epic Games", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("Nintendo", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890),
    ("Ubisoft", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1234567890)
;

insert into Games(title, release_date, store_page, studio_id) values
    ("a", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 5),
    ("b", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 2),
    ("c", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1),
    ("d", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 4),
    ("e", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 3),
    ("f", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 3),
    ("g", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 5),
    ("h", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 4),
    ("i", "2022-05-13", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 1)
;

insert into Licenses(player_id, game_id, purchase_date, price, valid) values
  (1, 2, "2022-05-13", 60.00, true),
  (3, 2, "2022-05-13", 60.00, true),
  (1, 4, "2022-05-13", 60.00, true),
  (2, 9, "2022-05-13", 60.00, true),
  (1, 8, "2022-05-13", 60.00, true),
  (4, 5, "2022-05-13", 60.00, true),
  (5, 3, "2022-05-13", 60.00, true),
  (2, 7, "2022-05-13", 60.00, true),
  (3, 5, "2022-05-13", 60.00, true),
  (3, 8, "2022-05-13", 60.00, true),
  (5, 2, "2022-05-13", 60.00, true)
;

insert into GamesGenres (game_id, genre) values
  (1, "action"),
  (2, "rhythm"),
  (3, "rpg"),
  (4, "deck builder"),
  (5, "fps"),
  (6, "mystery"),
  (7, "idle"),
  (8, "soulslike"),
  (9, "platformer")
;

select * from Genres;
select * from Studios;
select * from Games;
select * from GamesGenres;
select * from Players;
select * from Licenses;

set foreign_key_checks=1;