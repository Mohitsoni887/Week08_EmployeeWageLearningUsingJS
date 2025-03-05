// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;


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

// Variables to track total work and wage
let totalWorkHours = 0;
let totalWorkDays = 0;
let totalWage = 0;
let dailyWages = []; // Array to store daily wages

// Loop until max conditions are met
while (totalWorkDays < MAX_WORKING_DAYS && totalWorkHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 3); // Randomly 0, 1, or 2
    let empHours = getWorkHours(empCheck);

    // Ensure we do not exceed MAX_WORKING_HOURS
    if (totalWorkHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalWorkHours;
    }

    let dailyWage = empHours * WAGE_PER_HOUR;
    totalWage += dailyWage;
    totalWorkHours += empHours;
    totalWorkDays++;

    // Store daily wage in the array
    dailyWages.push({ day: totalWorkDays, wage: dailyWage });

    console.log(`Day ${totalWorkDays}: Work Hours = ${empHours}, Daily Wage = $${dailyWage}`);
}

// Output Final Wage and Work Summary
console.log("\nTotal Working Days:", totalWorkDays);
console.log("Total Working Hours:", totalWorkHours);
console.log("Total Monthly Wage: $" + totalWage);

// Print stored daily wages
console.log("\nDaily Wages Breakdown:");
console.table(dailyWages);
