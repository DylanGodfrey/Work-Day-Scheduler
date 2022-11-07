const currentDayDisplay = $("#currentDay"); //getDate.now
const timeBlocksContainer = $(".container");

const currentDay = moment().format("dddd, MMMM Do, YYYY"); // Get Current Date
const currentTimeDisplay = moment().format("hA"); // Get Current Time in AM/PM
const currentTime = moment(currentTimeDisplay, "hA"); // Get Current Time to 'floored' (rounded down) hour

init();

function init() {
  const timeSlots = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ];

  // Display the current time and date in the jumbo-tron
  currentDayDisplay.text(currentDay);

  console.log(currentTimeDisplay);

  // Check each time slot to compare if that timeSlot is before, now or after the current time. (in AM/PM format)
  for (i in timeSlots) {
    if (moment(timeSlots[i], "hA").isSame(currentTime)) {
      console.log("same time");
    } else if (moment(timeSlots[i], "hA").isBefore(currentTime)) {
      console.log("before time");
    } else if (moment(timeSlots[i], "hA").isAfter(currentTime)) {
      console.log("after time");
    }
  }
};
