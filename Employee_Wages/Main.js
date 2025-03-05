// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

function getWorkHours(empCheck) {
    switch (empCheck) {
        case 1:
            console.log("Employee worked Part-time");
            return PART_TIME_HOURS;
        case 2:
            console.log("Employee worked Full-time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee did not work today");
            return 0;
    }
}

// Generate Random Employee Work Type (0 - No Work, 1 - Part-Time, 2 - Full-Time)
let empCheck = Math.floor(Math.random() * 3); // Randomly 0, 1, or 2

// Get Work Hours
let empHours = getWorkHours(empCheck);

// Calculate Daily Wage
let dailyWage = empHours * WAGE_PER_HOUR;

// Output Wage
console.log("Employee's Daily Wage: $" + dailyWage);
