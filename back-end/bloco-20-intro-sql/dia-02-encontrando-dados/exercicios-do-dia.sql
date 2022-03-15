SELECT "This is SQL Exercise, Practice and Solution";
SELECT 333, 555, 777;
SELECT 11 * 4;

SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

SELECT * FROM Scientists
ORDER BY Name ASC;

SELECT * FROM Scientists
ORDER BY Name DESC;

SELECT CONCAT ("O projeto ", Name, " precisou de ", Hours, " horas para ser concluído.") FROM Scientists.Projects;

SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM Scientists.AssignedTo;

SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 1;

SELECT Name FROM Scientists.Projects
ORDER BY Hours LIMIT 1 OFFSET 1;

SELECT * FROM Scientists.Projects
ORDER BY Hours LIMIT 5;

SELECT CONCAT("Existem ", COUNT(Name), " cientistas na tabela Scientists.") FROM Scientists;