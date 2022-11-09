const currentDayDisplay = $("#currentDay"); //getDate.now
const timeBlocksContainer = $(".container");

const currentDay = moment().format("dddd, MMMM Do, YYYY"); // Get Current Date
const currentTimeDisplay = moment().format("hA"); // Get Current Time in AM/PM
const currentTime = moment(currentTimeDisplay, "hA"); // Get Current Time to 'floored' (rounded down) hour


const timeSlots = [
  {time:"9AM", color: "white", savedEvent: "No saved event!"},
  {time:"10AM", color: "white", savedEvent: "No saved event!"},
  {time:"11AM", color: "white", savedEvent: "No saved event!"},
  {time:"12PM", color: "white", savedEvent: "No saved event!"},
  {time:"1PM", color: "white", savedEvent: "No saved event!"},
  {time:"2PM", color: "white", savedEvent: "No saved event!"},
  {time:"3PM", color: "white", savedEvent: "No saved event!"},
  {time:"4PM", color: "white", savedEvent: "No saved event!"},
  {time:"5PM", color: "white", savedEvent: "No saved event!"},
];


  // Display the current time and date in the jumbo-tron
  currentDayDisplay.text(currentDay);


// Function to determine what color each hour block should be based on current time
var determineRelativeTime = function (time) {
  //current time
  var testTime = moment(moment().format("H A"), "H A");
  // block of time being tested and value returned
  var testBlock = moment(time, "H A");
  // change color style of block depending on if statement results
  if (testTime.isBefore(testBlock) === true) {
      return "future";
  } else if (testTime.isAfter(testBlock) === true) {
      return "past";
  } else {
      return "present";
  }
};

timeSlots.forEach(function(hourBlock, index) {
  // variable to set the color of the hourBlock based on determineRelativeTime function
  hourBlock.color = determineRelativeTime(hourBlock.time);

  // row setup and formatting of css in scheduler
  let hourFormat =
  '<div class="time-block" id="' +
  index +
  '"><div class="row no-gutters input-group"><div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
  hourBlock.time +
  '</div><textarea class="form-control ' +
  hourBlock.color +
  ' description">' +
  hourBlock.savedEvent +
      '</textarea><div class="col-sm-2 col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';
  
  // append the hourFormat to the rows based on variable criteria
  $(".container").append(hourFormat);
});



