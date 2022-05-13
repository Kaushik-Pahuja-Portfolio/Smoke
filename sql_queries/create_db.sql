CREATE TABLE IF NOT EXISTS `Smoke`.`Players` (
  `player_ID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `phone` VARCHAR(10) NULL,
  `birthdate` DATE NULL,
  PRIMARY KEY (`player_ID`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE)


CREATE TABLE IF NOT EXISTS `Smoke`.`Licenses` (
  `player_id` INT UNSIGNED NOT NULL, foreign key to Players.player_id
  `game_id` INT UNSIGNED NOT NULL, foreign key to Games.game_id
  `purchase_date` DATE NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `valid` TINYINT NULL,
  PRIMARY KEY (`player_id`, `game_id`),


CREATE TABLE IF NOT EXISTS `Smoke`.`Games` (
  `game_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(64) NOT NULL,
  `release_date` DATE NOT NULL,
  `store_page` VARCHAR(2083) NULL,
  `genre` VARCHAR(155) NOT NULL,
  `studio_id` INT NOT NULL, foreign key to Studios.studio_id
  PRIMARY KEY (`game_id`),


CREATE TABLE IF NOT EXISTS `Smoke`.`Studios` (
  `studio_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NOT NULL,
  `website` VARCHAR(2083) NOT NULL,
  `phone` VARCHAR(10) NULL,
  PRIMARY KEY (`studio_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)


CREATE TABLE IF NOT EXISTS `Smoke`.`Genres` (
  `genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`genre`))

CREATE TABLE IF NOT EXISTS `Smoke`.`GamesGenres` (
  `game_id` INT UNSIGNED NOT NULL, foreign key to Games.game_id
  `genre` VARCHAR(45) NOT NULL, foreign key to Genres.genre
  PRIMARY KEY (`game_id`, `genre`),
