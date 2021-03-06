SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT JOB_ID, (MAX_SALARY + MIN_SALARY) / 2 AS MEDIA_SALARIAL
FROM hr.jobs
ORDER BY MEDIA_SALARIAL DESC;

SELECT SUM(SALARY) FROM hr.employees;

SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM hr.employees;

SELECT COUNT(*) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(SALARY) FROM hr.employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(SALARY) AS MEDIA FROM hr.employees
WHERE JOB_ID != 'IT_PROG'
GROUP BY JOB_ID
ORDER BY MEDIA DESC;

SELECT COUNT(EMPLOYEE_ID) AS how_many, DEPARTMENT_ID, (MAX(SALARY) + MIN(SALARY)) / 2 AS media FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING how_many > 10;

UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

SELECT * FROM hr.employees
WHERE char_length(FIRST_NAME) >= 8;

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE)
FROM hr.employees;

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE)
FROM hr.employees;

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE)
FROM hr.employees;

SELECT UCASE(FIRST_NAME), UCASE(LAST_NAME) FROM hr.employees;

SELECT LAST_NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE LIKE '1987-07%';

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE)
FROM hr.employees;