// Constants
const PRESENT = 1;

// Generate a random number (0 or 1)
let empCheck = Math.floor(Math.random() * 2); // Randomly 0 or 1

// Check Employee Status
if (empCheck === PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
