// Imported dependencies and modules
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require('dotenv').config();

// Makes a connection to the MySQL database
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
);

// Allows query function to be asynchronous
const queryAsync = (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database', err);
        throw err;
    }
    console.log('Connected to the employess_db database.');
    console.log('Welcome to the Employee Tracker System.');
    promptUser();
});

// Function to prompt the user for actions
function promptUser() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Add an employee role',
                    'Delete a department',
                    'Delete a role',
                    'Delete and employee',
                    'Exit',
                ],
            },
        ])
        .then((answers) => {
            switch (answers.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployeeRole();
                    break;
                case "Delete a department":
                    deleteDepartment();
                    break;
                case "Delete a role":
                    deleteRole();
                    break;
                case "Delete an employee":
                    deleteEmployee();
                    break;
                case "Exit":
                    console.log("Goodbye");
                    // Close the database connection
                    db.end();
                    break;
            }
        });
};