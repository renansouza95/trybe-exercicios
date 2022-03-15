SELECT * FROM user;
SELECT ROUND(SUM(duration) / 60) FROM track INNER JOIN user ON user.id = track.user_id WHERE user.tribe = 'A';
SELECT ROUND(SUM(duration) / 60) FROM track INNER JOIN user ON user.id = track.user_id WHERE user.tribe = 'B';
SELECT SUM(track.id) FROM user INNER JOIN track ON user.id = track.user_id;

SELECT art.name, COUNT(*) AS Qtde
FROM artist AS art INNER JOIN album AS alb
ON alb.artist_id = art.id INNER JOIN track AS t
ON t.album_id = alb.id
GROUP BY art.name
ORDER BY Qtde DESC;

SELECT gnr.genre, COUNT(*) AS Qtde
FROM genres AS gnr INNER JOIN albumGenre as albgnr
ON albgnr.genre_id = gnr.id INNER JOIN album AS alb
ON alb.id = albgnr.album_id
GROUP BY gnr.genre
ORDER BY Qtde DESC;