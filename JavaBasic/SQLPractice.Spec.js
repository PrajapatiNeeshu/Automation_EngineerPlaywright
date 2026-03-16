
// -- -- create
// -- CREATE TABLE EMPLOYEE (
// --   empId INTEGER PRIMARY KEY,
// --   name TEXT NOT NULL,
// --   dept TEXT NOT NULL
// -- );
// -- CREATE TABLE PROJECT  (
// --   empId INTEGER PRIMARY KEY,
// --   name TEXT NOT NULL,
// --   dept TEXT NOT NULL,
// --   PROJECT
// -- );

// -- -- insert
// -- INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
// -- INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
// -- INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales');

// -- -- fetch 
// -- SELECT * FROM EMPLOYEE WHERE dept = 'Sales';




// -- CREATE TABLE Employee (
// --     employee_id INT PRIMARY KEY,
// --     employee_fname VARCHAR(50) NOT NULL,
// --     employee_lname VARCHAR(50) NOT NULL,
// --     department_id INT,
// --     salary INT
// -- );

// -- INSERT INTO Employee VALUES (1, 'Clark','loom', 101, 50000);
// -- INSERT INTO Employee VALUES (2, 'Dave','beatl', 102, 60000);
// -- INSERT INTO Employee VALUES (3, 'Ava','looms',101, 55000);
// -- INSERT INTO Employee VALUES (4, 'John', 'table',103, 45000);
// -- INSERT INTO Employee VALUES (5, 'Emma', 'yoke',102, 70000);
// -- INSERT INTO Employee VALUES (9, 'Emma','yoker', 104, 90000);




// -- CREATE TABLE Department (
// --     department_id INT PRIMARY KEY,
// --     department_name VARCHAR(50) NOT NULL
// -- );
// -- INSERT INTO Department VALUES (101, 'Sales');
// -- INSERT INTO Department VALUES (102, 'Accounting');
// -- INSERT INTO Department VALUES (103, 'IT');




// -- CREATE TABLE Project (
// --     project_id INT PRIMARY KEY,
// --     project_name VARCHAR(50),
// --     employee_id INT
// -- );

// -- INSERT INTO Project VALUES (201, 'CRM System', 1);
// -- INSERT INTO Project VALUES (202, 'Billing System', 2);
// -- INSERT INTO Project VALUES (203, 'Website Development', 3);
// -- INSERT INTO Project VALUES (204, 'Automation Testing', 5);



// -- 34. Employees working in Sales

// -- SELECT e.employee_fname
// -- FROM Employee e
// -- JOIN Department d
// -- ON e.department_id = d.department_id
// -- WHERE d.department_name = 'Sales';

// -- SELECT *
// -- FROM Employee
// -- ORDER BY salary DESC
// -- LIMIT 1 offset 1;

// -- SELECT *
// -- FROM Employee
// -- WHERE salary >
// -- (SELECT AVG(salary) FROM Employee);

// -- -- Employee + Department

// -- SELECT e.employee_fname, d.department_name
// -- FROM Employee e
// -- JOIN Department d
// -- ON e.department_id = d.department_id;

// -- -- 4️⃣ FULL JOIN
// -- SELECT e.employee_name,
// --       d.department_name
// -- FROM Employee e
// -- FULL JOIN Department d
// -- ON e.department_id = d.department_id;


// -- Employee + Project

// -- SELECT e.employee_fname, p.project_name
// -- FROM Employee e
// -- JOIN Project p
// -- ON e.employee_id = p.employee_id;

// -- //3 Tables Join (Very Important)


// -- SELECT e.employee_fname,
// --       d.department_name,
// --       p.project_name
// -- FROM Employee e
// -- LEFT JOIN Department d
// -- ON e.department_id = d.department_id
// -- LEFT JOIN Project p
// -- ON e.employee_id = p.employee_id;



// -- -- 3️⃣ RIGHT JOIN
// -- SELECT e.employee_fname,
// --       p.project_name
// -- FROM Employee e
// -- RIGHT JOIN Project p
// -- ON e.employee_id = p.employee_id;



// -- -- 2️⃣ LEFT JOIN

// -- SELECT e.employee_fname,
// --       p.project_name
// -- FROM Employee e
// -- LEFT JOIN Project p
// -- ON e.employee_id = p.employee_id;



// -- 1️⃣ INNER JOIN


// -- SELECT e.employee_id,
// --       e.employee_fname,
// --       d.department_name
// -- FROM Employee e
// -- INNER JOIN Department d
// -- ON e.department_id = d.department_id;




// -- Employee
// -- ---------
// -- employee_id
// -- employee_name
// -- department_id
// -- salary

// -- Department
// -- ---------
// -- department_id
// -- department_name

// -- Project

// -- Relation:

// -- Employee.department_id -> Department.department_id
// -- Project.employee_id -> Employee.employee_id
// -- ---------
// -- project_id
// -- project_name
// -- employee_id

// -- SELECT employee_name, department_name
// -- FROM Employee e
// -- INNER JOIN Department d
// -- ON e.department_id = d.department_id;

// -- Select MAX(salary) from Employee WHERE salary<(Select MAX(salary) from Employee);

// -- Select employee_name as duplicate_NAME from Employee group by employee_name having count(*) >1;


// -- SELECT employee_name, COUNT(*) as count 
// -- FROM Employee 
// -- GROUP BY employee_name 
// -- HAVING COUNT(*) > 1;

// -- Select *  from Employee  order by salary desc LIMIT 3;
// -- Select * from Employee order by salary desc LIMIT 3 OFFSET 1;
// -- select * from Employee where employee_fname LIKE '%E'



// -- -- Count employees per department
// -- SELECT department, COUNT(*) as emp_count 
// -- FROM Employees 
// -- GROUP BY department;
// -- select Department , count(*) as emp_count from Employee group by Department;



// -- SELECT AVG(salary) as avg_salary_finance 
// -- FROM Employee 
// -- WHERE department = 'Finance';


// -- SELECT employee_fname , count(*) as duplicate_name 
// -- group by employee_fname 
// -- Having count (employee_fname) > 1;

// -- SELECT e.employee_fname, d.department_name
// -- FROM Employee e
// -- INNER JOIN Department d
// -- ON e.department_id = d.department_id;

// -- SELECT MAX(salary) FROM Employee;

// -- SELECT department_id, MAX(salary)
// -- FROM Employee
// -- GROUP BY department_id;

// -- SELECT * 
// -- FROM Employee
// -- ORDER BY salary DESC;


// -- SELECT department_id, COUNT(employee_id)
// -- FROM Employee
// -- GROUP BY department_id;

// -- SELECT department_id, COUNT(employee_id)
// -- FROM Employee
// -- GROUP BY department_id
// -- HAVING COUNT(employee_id) > 1;


// -- Bhai agar tum AI Testing (LLM / RAG / Vector Database) me kaam karna chahte ho, to tumhe Embedding + Vector Database + SQL similarity search samajhna bahut zaroori hai.
// -- Main tumhe practice setup de raha hoon jo AI QA engineers use karte hain. 🚀

// -- Concept simple hai:

// -- Text  →  Embedding Model  →  Vector (numbers)
// -- Vector  →  Vector Database
// -- User Query → Embedding → Similarity Search → Result

// -- Example

// -- Text: "Login page error"
// -- Embedding → [0.21, -0.44, 0.88, 0.31, ...]
// -- CREATE EXTENSION IF NOT EXISTS vector;
// -- CREATE TABLE documents (
// --     id SERIAL PRIMARY KEY,
// --     content TEXT,
// --     embedding VECTOR(3)
// -- );



// -- CREATE TABLE continents (
// --     id INT AUTO_INCREMENT PRIMARY KEY,
// --     name VARCHAR(50) NOT NULL
// -- );

// -- INSERT INTO continents (name) VALUES
// -- ('Africa'),
// -- ('Antarctica'),
// -- ('Asia'),
// -- ('Europe'),
// -- ('North America'),
// -- ('South America'),
// -- ('Australia');



// CREATE TABLE Department1 (
//     department_id INT PRIMARY KEY,
//     department_name VARCHAR(50)
// );

// CREATE TABLE Employee1 (
//     employee_id INT PRIMARY KEY,
//     employee_name VARCHAR(50),
//     department_id INT,
//     salary INT
// );

// CREATE TABLE Project1 (
//     project_id INT PRIMARY KEY,
//     project_name VARCHAR(50),
//     employee_id INT
// );


// INSERT INTO Department1 VALUES
// (101,'Sales'),
// (102,'Accounting'),
// (103,'IT'),
// (104,'HR'),
// (105,'Marketing');


// WITH RECURSIVE emp_gen AS (
//     SELECT 1 AS id
//     UNION ALL
//     SELECT id + 1
//     FROM emp_gen
//     WHERE id < 500
// )
// INSERT INTO Employee1 (employee_id, employee_name, department_id, salary)
// SELECT 
// id,
// CONCAT('Employee_', id),
// 101 + (id % 5),
// 30000 + (id * 100)
// FROM emp_gen;


// WITH RECURSIVE proj_gen AS (
//     SELECT 1 AS id
//     UNION ALL
//     SELECT id + 1
//     FROM proj_gen
//     WHERE id < 300
// )
// INSERT INTO Project1 (project_id, project_name, employee_id)
// SELECT
// id,
// CONCAT('Project_', id),
// 1 + (id % 500)
// FROM proj_gen;

// -- SELECT e.employee_name, d.department_name
// -- FROM Employee1 e
// -- JOIN Department1 d
// -- ON e.department_id = d.department_id;



// SELECT e.employee_name
// FROM Employee1 e
// LEFT JOIN Project p
// ON e.employee_id = p.employee_id
// WHERE p.project_id IS NULL;

