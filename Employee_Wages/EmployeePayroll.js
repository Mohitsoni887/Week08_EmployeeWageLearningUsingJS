// EmployeePayroll class with extended properties
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); // Convert to Date object
    }

    // Method to display employee details
    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
}

// Creating Employee Objects
const emp1 = new EmployeePayroll(101, "Alice Johnson", 5000, "Female", "2023-06-15");
const emp2 = new EmployeePayroll(102, "Bob Smith", 6000, "Male", "2022-03-10");
const emp3 = new EmployeePayroll(103, "Charlie Davis", 5500, "Male", "2024-01-01");

// Storing Employees in an Array
let employeeList = [emp1, emp2, emp3];

// Displaying Employee Details
employeeList.forEach(emp => console.log(emp.getDetails()));
