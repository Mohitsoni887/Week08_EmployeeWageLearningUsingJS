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

// Variables
let totalWorkHours = 0;
let totalWorkDays = 0;
let empDailyRecords = []; // Array to store employee work details

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

    // Store details in an object and push to array
    empDailyRecords.push({
        day: totalWorkDays,
        hoursWorked: empHours,
        dailyWage: dailyWage
    });
}

//  (a) Calculate Total Wage & Total Hours using Arrow Function
const totalWage = empDailyRecords.reduce((sum, record) => sum + record.dailyWage, 0);
const totalHours = empDailyRecords.reduce((sum, record) => sum + record.hoursWorked, 0);

console.log(`\n Total Wage Earned: $${totalWage}`);
console.log(` Total Hours Worked: ${totalHours} hrs`);

//  (b) Show Full Working Days (8 hours) using forEach
console.log("\n Full Working Days:");
empDailyRecords.forEach(record => {
    if (record.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day ${record.day}: ${record.hoursWorked} hrs, Wage: $${record.dailyWage}`);
    }
});

//  (c) Show Part Working Days using map → Reduce to String Array
const partTimeDays = empDailyRecords
    .filter(record => record.hoursWorked === PART_TIME_HOURS)
    .map(record => `Day ${record.day}`);

console.log(`\n Part Working Days: ${partTimeDays.join(", ")}`);

//  (d) Show No Working Days using map
const noWorkingDays = empDailyRecords
    .filter(record => record.hoursWorked === 0)
    .map(record => `Day ${record.day}`);

console.log(`\n No Working Days: ${noWorkingDays.join(", ")}`);
