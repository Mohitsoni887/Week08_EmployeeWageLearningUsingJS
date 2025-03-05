// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WORKING_DAYS_IN_MONTH = 20;

/**
 * Function to get work hours based on employee type
 * @param {number} empCheck - Random number (0, 1, or 2)
 * @returns {number} - Work hours (0, 4, or 8)
 */
function getWorkHours(empCheck) {
    switch (empCheck) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Variable to store total monthly wage
let totalMonthlyWage = 0;

// Loop through 20 working days
for (let day = 1; day <= WORKING_DAYS_IN_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 3); // Randomly 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    let dailyWage = empHours * WAGE_PER_HOUR;
    totalMonthlyWage += dailyWage;

    console.log(`Day ${day}: Work Hours = ${empHours}, Daily Wage = $${dailyWage}`);
}

// Output Monthly Wage
console.log("\nTotal Monthly Wage: $" + totalMonthlyWage);
