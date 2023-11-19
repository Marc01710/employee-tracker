USE employees_db;

INSERT INTO department (id, name)
VALUES (1, 'Management'),
       (2, 'Sales'),
       (3, 'Customer Service'),
       (4, 'Human Resources');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Operations Manager', 150000, 1),
       (2, 'Sales Person', 75000, 2),
       (3, 'Customer Representative', 45000, 3),
       (4, 'Human Resource', 60000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Alfonso', 'Hernandez', 1, NULL),
       (2, 'Jesus', 'Sanchez', 2, 1),
       (3, 'Marc', 'Hernandez', 3, 1),
       (4, 'Emma', 'Pena', 4, 1);