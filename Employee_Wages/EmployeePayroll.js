// EmployeePayroll class with validation
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.setId(id);
        this.setName(name);
        this.setSalary(salary);
        this.setGender(gender);
        this.setStartDate(startDate);
    }

    // ID Validation (Must be a positive number > 0)
    setId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("Invalid ID! ID must be a positive non-zero number.");
        }
        this.id = id;
    }

    // Name Validation (Must start with uppercase and have at least 3 characters)
    setName(name) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;
    }

    // Salary Validation (Must be a positive number > 0)
    setSalary(salary) {
        if (typeof salary !== "number" || salary <= 0) {
            throw new Error("Invalid Salary! Salary must be a positive non-zero number.");
        }
        this.salary = salary;
    }

    // Gender Validation (Must be 'M' or 'F')
    setGender(gender) {
        const genderPattern = /^[MF]$/;
        if (!genderPattern.test(gender)) {
            throw new Error("Invalid Gender! Gender must be 'M' or 'F'.");
        }
        this.gender = gender;
    }

    // Start Date Validation (Cannot be a future date)
    setStartDate(startDate) {
        const date = new Date(startDate);
        const today = new Date();
        if (isNaN(date.getTime()) || date > today) {
            throw new Error("Invalid Date! Start date cannot be in the future.");
        }
        this.startDate = date;
    }

    // Method to display employee details
    getDetails = () =>
        `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
}

// Test Cases with Try-Catch
try {
    const emp1 = new EmployeePayroll(101, "Alice", 5000, "F", "2023-06-15");
    console.log(emp1.getDetails());

    const emp2 = new EmployeePayroll(0, "Bob", 6000, "M", "2022-03-10"); // Invalid ID
    console.log(emp2.getDetails());

    const emp3 = new EmployeePayroll(103, "Charlie", -5500, "M", "2024-01-01"); // Invalid Salary
    console.log(emp3.getDetails());

    const emp4 = new EmployeePayroll(104, "Diana", 4000, "X", "2023-07-20"); // Invalid Gender
    console.log(emp4.getDetails());

    const emp5 = new EmployeePayroll(105, "Eve", 5000, "F", "2026-05-10"); // Future Date
    console.log(emp5.getDetails());
} catch (error) {
    console.error("Error:", error.message);
}
