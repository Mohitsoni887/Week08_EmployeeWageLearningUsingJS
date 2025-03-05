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
    totalWorkHours += empHours;
    totalWorkDays++;

    // Store daily wage in the array
    dailyWages.push({ day: totalWorkDays, hours: empHours, wage: dailyWage });
}

//  (a) Calculate Total Wage using reduce()
const totalWage = dailyWages.reduce((acc, day) => acc + day.wage, 0);
console.log("\nTotal Monthly Wage: $" + totalWage);

//  (b) Show Day along with Daily Wage using map()
const dailyWageMap = dailyWages.map(day => `Day ${day.day}: Wage = $${day.wage}`);
console.log("\nDaily Wages Breakdown:\n", dailyWageMap.join("\n"));

//  (c) Show Days when Full-Time Wage (160) was earned using filter()
const fullTimeDays = dailyWages.filter(day => day.wage === 160).map(day => day.day);
console.log("\nDays with Full-Time Wage (160$):", fullTimeDays);

//  (d) Find the first occurrence when Full-Time Wage was earned using find()
const firstFullTimeDay = dailyWages.find(day => day.wage === 160);
console.log("\nFirst Day Full-Time Wage Earned:", firstFullTimeDay ? firstFullTimeDay.day : "Never");

//  (e) Check if Every Element of Full Time Wage is truly holding Full time wage
const allFullTime = dailyWages.every(day => day.wage === 160);
console.log("\nIs Every Day a Full-Time Wage? ", allFullTime);

//  (f) Check if there is any Part-Time Wage using some()
const hasPartTime = dailyWages.some(day => day.wage === 80);
console.log("\nIs There Any Part-Time Wage? ", hasPartTime);

//  (g) Find the Number of Days the Employee Worked using reduce()
const daysWorked = dailyWages.reduce((count, day) => (day.hours > 0 ? count + 1 : count), 0);
console.log("\nTotal Days Employee Worked:", daysWorked);
