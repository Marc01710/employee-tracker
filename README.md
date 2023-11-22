# employee-tracker

## Description
The employee tracker is a command line application that uses Node.js, MySql and Inquirer.  It allows for the organization of a business.  My motivation for making this application came from wanting to create a place where a business can have all the information they need about their company.  Including the knowledge of the departments, salary, employee's and the employee's role.  Through this project I learned how to use Inquirer for user input, Mysql2 for MySQL databases.  As well as implementing database Schema.

## Installation

- How to install and run Employee Tracker on your local machine:

1. Clone github repository onto your machine, using this command: git clone git@github.com:Marc01710/employee-tracker.git
2. Enter your MySQL password onto line 15 of the index.js file
3. Run npm install to install all dependencies, navigate to the integrated terminal
4. While in the terminal log into MySQL using the command mysql -u root -p
5. SOURCE both schema.sql and seeds.sql
6. Start the application by running node index.js

## Usage

The Employee Tracker application provides the following functionality:

1. View All Departments: Lists all departments in the company along with their IDs.
2. View All Roles: Displays a table with job titles, role IDs, department names, and salaries for each role.
3. View All Employees: Shows a formatted table with employee data, including employee IDs, first names, last names, job titles, departments, salaries, and manager details.
4. Add a Department: Allows you to add a new department by providing the department name.
5. Add a Role: Enables you to add a new role by entering the role title, salary, and department ID.
6. Add an Employee: Lets you add a new employee by providing their first name, last name, role ID, and manager ID.
7. Update an Employee Role: Allows you to update the role of an existing employee by selecting the employee from a list and choosing their new role.
8. Delete a Department: Allows you to delete a department by selecting the department name.
9. Delete a Role: Allows you to delete a role by selecting the role name.
10. Delete an Employee: Allows you to delete an employee by selecting the employee name.

![image of application](<./images/employee tracker image.png>)

- Github Repository: https://github.com/Marc01710/employee-tracker

- Link to walkthrough video: https://drive.google.com/file/d/1Uh0XStEcMA34d3hmnVmiL7zGtbDEEpu6/view



