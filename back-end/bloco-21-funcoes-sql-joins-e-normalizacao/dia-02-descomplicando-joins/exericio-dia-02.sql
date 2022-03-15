SELECT mov.title, box.domestic_sales, box.international_sales
FROM Movies AS mov
INNER JOIN BoxOffice AS box
ON mov.id = box.movie_id;

SELECT mov.title AS filme, (box.domestic_sales + box.international_sales) AS vendas
FROM Movies AS mov
INNER JOIN BoxOffice AS box
ON mov.id = box.movie_id
WHERE box.international_sales > box.domestic_sales;

SELECT mov.title AS filme, box.rating AS avaliacao
FROM Movies AS mov
INNER JOIN BoxOffice AS box
ON mov.id = box.movie_id
ORDER BY box.rating DESC;

SELECT c.`name`, c.location, mov.title, mov.director, mov.`year`, mov.length_minutes
FROM Theater AS c
LEFT JOIN Movies AS mov
ON c.id = mov.theater_id
ORDER BY c.`name`;

SELECT mov.title, mov.director, mov.`year`, mov.length_minutes, c.`name`, c.location
FROM Theater AS c
RIGHT JOIN Movies AS mov
ON c.id = mov.theater_id
ORDER BY c.`name`;