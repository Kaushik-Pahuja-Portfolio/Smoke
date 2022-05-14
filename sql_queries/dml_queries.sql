-- Quantities with a ':' before them indicate a back-end variable

--Select players by all params. I think we can just indicate that each parameter is optional and it should be fine
select * from players where player_id = :id and username = :username and email = :email and phone = :phone and birthdate = :birthdate
--select licenses by all params. Same as above (oof but not really)
select player_id, username, game_id, title, store_page, purchase_date purchase_price, valid from license join players using(player_id) join games using game_id
--Select games by all params, same as above.
select distinct game_id, title, release_date, store_page, studio_id, studio_name from games join (select * from gamegenres where genre=:genre) using(games.game_id) where title = :title and release_date = :release_date and studio = :studio
--select studios by all params, same as  above. I guess studio name should start with the set of characters, not be an exact match. Not sure if we even need this query
select * from studios where studio_id = :studio_id and studio_name = :studio_name and studio_phone = :studio_phone
--select licenses owned by player
select game_id, title, store_page, studio, license_id purchase_date, purchase_price, valid from licenses join games using (game_id) where player_id = :player_id
--select players that own a game
with (game = select * from games where title = :title)
select * from (select * from licenses where game_id = game.game_id) join players using(player_id)
--select players that own genre
select player_id, username, email, phone, birthdate from players join licenses using(player_id) join genres using(game_id) where genre = :genre;
--select games by players who own them
SELECT game_id FROM games
JOIN licenses ON games.game_id=licenses.game_id
JOIN players ON players.player_id=licenses.player_id
--Add studio
INSERT INTO studios (name, website, phone)
VALUES (:name, :website, :phone)
--Add player
INSERT INTO players (username, email, phone, birthdate)
VALUES (:username, :email, :phone, :birthdate)
--Add game
INSERT INTO games (game_id, title, release_date, store_page, studio_id )
VALUES (:game_id, :purchase_date, :price, :valid)
--Add license
INSERT INTO licenses (player_id, game_id, purchase_date, price, valid )
VALUES (:game_id, :purchase_date, :price, :valid)
--Remove license
DELETE FROM licenses 
WHERE player_id = :player_id and game_id = :game_id
--Edit Studio
UPDATE studios 
SET name=:name, website=:website, phone=:phone,
WHERE studio_id=studio_id
--edit player
UPDATE players 
SET username=:username
WHERE player_id=:player_id
--edit game
UPDATE game 
SET store_page=:store_page
WHERE game_id=:game_id
--edit license
UPDATE license
SET valid=:valid
WHERE player_od=:player_id AND game_id=:game_id
