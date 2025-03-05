// EmployeePayroll class
class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
}

// Creating Employee Objects
const emp1 = new EmployeePayroll(101, "Alice Johnson", 5000);
const emp2 = new EmployeePayroll(102, "Bob Smith", 6000);
const emp3 = new EmployeePayroll(103, "Charlie Davis", 5500);

// Storing Employees in an Array
let employeeList = [emp1, emp2, emp3];

// Displaying Employee Details
employeeList.forEach(emp => console.log(emp.getDetails()));
