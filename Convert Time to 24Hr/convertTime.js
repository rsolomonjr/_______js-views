// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM");    // 00:10
// convertTo24HrsFormat("5:00AM");     // 05:00
// convertTo24HrsFormat("12:33PM");    // 12:33
// convertTo24HrsFormat("01:59PM");    // 13:59
// convertTo24HrsFormat("11:8PM");     // 23:08
// convertTo24HrsFormat("10:02PM");    // 22:02

const convert12To24 = (time12) => {   
    let [hours, mins] = time12.split(':');
    hours = parseInt(hours);
    mins = parseInt(mins);
    let hours24 = hours >= 12 ? hours - 12 : hours + 12;
    return `${hours24}:${mins}`
  };
  
  // Example usage:
 const time12 = '03:30PM'; // Change this to your 12-hour time input
 const time24 = convert12To24(time12);
console.log(time24); // Output: '15:30'
  
  
  
  
  
  
  