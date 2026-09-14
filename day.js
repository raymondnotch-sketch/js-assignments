
const nowInMs = Date.now();


const msInADay = 1000 * 60 * 60 * 24;
const totalDays = Math.floor(nowInMs / msInADay);


const dayOfWeekIndex = (totalDays + 4) % 7;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Day Index:", dayOfWeekIndex);
console.log("Current Day:", days[dayOfWeekIndex]);