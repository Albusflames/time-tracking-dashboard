/* data */

const dailyPrevious =  ["7hrs", "2hrs", "1hr", "1hr", "3hrs", "3hrs"]; 
const dailyCurrent = ["5hrs", "1hrs", "0hr", "1hr", "1hrs","0hrs"];
const weeklyPrevious = ["36hrs", "8hrs", "7hr", "5hr", "10hrs", "2hrs"];
const weeklyCurrent = ["32hrs", "10hrs", "4hr", "4hr",  "5hrs", "2hrs"];
const monthlyPrevious = ["128hrs", "2hrs", "19hr", "18hr", "23hrs", "11hrs"];
const monthlyCurrent = ["103hrs", "23hrs", "13hr", "11hr", "5hrs", "7hrs"];

const currentHours = document.querySelectorAll('#current');
const previousHours = document.querySelectorAll('#previous');
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

for (i=0; i < currentHours.length; i++) { 
    currentHours[i].textContent = weeklyCurrent[i];
    previousHours[i].textContent = 'Last Week - ' + weeklyPrevious[i];
    
}

i=0;
daily.addEventListener('click', function () {
for (i=0; i < currentHours.length; i++) { 
    currentHours[i].textContent = dailyCurrent[i];
    previousHours[i].textContent = 'Yesterday - ' + dailyPrevious[i];
    
}})
weekly.addEventListener('click', function () {
    for (i=0; i < currentHours.length; i++) { 
        currentHours[i].textContent = weeklyCurrent[i];
        previousHours[i].textContent = 'Last Week - ' + weeklyPrevious[i];
        
    }})

monthly.addEventListener('click', function () {
        for (i=0; i < currentHours.length; i++) { 
            currentHours[i].textContent = monthlyCurrent[i];
            previousHours[i].textContent = 'Last Month- ' + monthlyPrevious[i];
        }})
        
    
