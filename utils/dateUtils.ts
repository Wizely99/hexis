function getWeekDays(date: Date): Date[] {
    // Handle different input formats gracefully
    if (!(date instanceof Date)) {
      date = new Date(date); // Attempt to convert from string or number
    }
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date input provided.");
    }
  
    // Determine day of the week (0-based: Sunday=0, Monday=1)
    const dayOfWeek = date.getDay();
  
    // Calculate offset to adjust date to the previous Monday
    const offset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  
    // Create an array to store weekdays
    const weekDays: Date[] = new Array(7);
  
    // Iterate through the week, adjusting dates accordingly
    for (let i = 0; i < 7; i++) {
      const adjustedDate = new Date(date.getTime());
      adjustedDate.setDate(date.getDate() - offset + i);
      weekDays[i] = adjustedDate;
    }
  
    return weekDays;
}
  
function dateToShortString(dateObj: Date): string {
    return `${dateObj.getDate()} ${dateObj.toLocaleString('en-US', { month: 'short' })}`;
}
function addDays(date:Date, days:number):Date {
    date.setDate(date.getDate() + days);
    return date;
  }
  
export { getWeekDays, dateToShortString,addDays };
  
  // Example usage:
  
  
//   console.log("Current week days (Monday to Sunday):");
//   for (const day of weekDays) {
//     console.log(day.toLocaleDateString()); // Format based on user's locale
//   }
  