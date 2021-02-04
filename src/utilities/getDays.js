const date = new Date();
const today = date.getDay();

// Repeat the days up to Wednesday
// so that a later day such as Saturday can be selected and show the days leading into the next week
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
];

// Start with today + 1 because the first element will be "today"
// End with today + 5 because the end value is not included (it will stop at today + 4)
const days = daysOfTheWeek.slice(today + 1, today + 5);

days.unshift("Today");

export default days;
