const currentDayDisplay = $("#currentDay"); //getDate.now
const timeBlocksContainer = $(".container");

const currentDay = moment().format("dddd, MMMM Do, YYYY"); // Get Current Date
const currentTimeDisplay = moment().format("hA"); // Get Current Time in AM/PM
const currentTime = moment(currentTimeDisplay, "hA"); // Get Current Time to 'floored' (rounded down) hour


init();

function init() {

  // display current date in the header
  currentDayDisplay.text(currentDay);
}
