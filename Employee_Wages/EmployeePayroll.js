// EmployeePayroll class with validation
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.setName(name); // Using setter to validate name
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }

    // Name Validation Method
    setName(name) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Starts with uppercase, min 3 characters
        if (!namePattern.test(name)) {
            throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;
    }

    // Method to display employee details
    getDetails = () =>
        `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
}

// Test Cases with Try-Catch
try {
    const emp1 = new EmployeePayroll(101, "Alice", 5000, "Female", "2023-06-15");
    console.log(emp1.getDetails());

    const emp2 = new EmployeePayroll(102, "bob", 6000, "Male", "2022-03-10"); // Invalid Name
    console.log(emp2.getDetails());
} catch (error) {
    console.error("Error:", error.message);
}
