function getWeekDays(date: Date): Date[] {
    
  // Get today's weekDay
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
  // Return a string in the format "DD MMM"
    return `${dateObj.getDate()} ${dateObj.toLocaleString('en-US', { month: 'short' })}`;
}
function addDays(date: Date, days: number): Date {
  // Create a new date object, adding the specified number of days
  date.setDate(date.getDate() + days);
    return date;
  }
  
export { getWeekDays, dateToShortString,addDays };