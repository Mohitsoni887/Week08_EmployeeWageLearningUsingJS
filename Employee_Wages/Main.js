// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;


const getWorkHours = (empCheck) => {
    switch (empCheck) {
        case 1: return PART_TIME_HOURS;
        case 2: return FULL_TIME_HOURS;
        default: return 0;
    }
};

// Variables to track total work and wage
let totalWorkHours = 0;
let totalWorkDays = 0;
let dailyWageMap = new Map();  // Stores (Day → Daily Wage)
let dailyHourMap = new Map();  // Stores (Day → Daily Hours)

// Loop until max conditions are met
while (totalWorkDays < MAX_WORKING_DAYS && totalWorkHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 3); // Randomly 0, 1, or 2
    let empHours = getWorkHours(empCheck);

    // Ensure we do not exceed MAX_WORKING_HOURS
    if (totalWorkHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalWorkHours;
    }

    let dailyWage = empHours * WAGE_PER_HOUR;
    totalWorkHours += empHours;
    totalWorkDays++;

    // Store (Day → Daily Wage & Daily Hours) in Maps
    dailyWageMap.set(totalWorkDays, dailyWage);
    dailyHourMap.set(totalWorkDays, empHours);
}

//  (a) Calculate Total Wage and Total Hours Worked
const totalWage = Array.from(dailyWageMap.values()).reduce((acc, wage) => acc + wage, 0);
const totalHours = Array.from(dailyHourMap.values()).reduce((acc, hours) => acc + hours, 0);

console.log(`\nTotal Wage Earned: $${totalWage}`);
console.log(`Total Hours Worked: ${totalHours} hrs`);

//  (b) Show Full Working Days, Part Working Days, and No Working Days
const fullWorkingDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => day);
const partWorkingDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => day);
const noWorkingDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === 0).map(([day]) => day);

console.log("\nFull Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);
