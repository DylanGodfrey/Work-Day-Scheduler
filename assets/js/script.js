const currentDayDisplay = $("#currentDay"); //getDate.now
const timeBlocksContainer = $(".container");

const currentDay = moment().format("dddd, MMMM Do, YYYY"); // Get Current Date
const currentTimeDisplay = moment().format("hA"); // Get Current Time in AM/PM
const currentTime = moment(currentTimeDisplay, "hA"); // Get Current Time to 'floored' (rounded down) hour


let timeSlots = [
  {time:"9AM", relative: "", savedEvent: ""},
  {time:"10AM", relative: "", savedEvent: ""},
  {time:"11AM", relative: "", savedEvent: ""},
  {time:"12PM", relative: "", savedEvent: ""},
  {time:"1PM", relative: "", savedEvent: ""},
  {time:"2PM", relative: "", savedEvent: ""},
  {time:"3PM", relative: "", savedEvent: ""},
  {time:"4PM", relative: "", savedEvent: ""},
  {time:"5PM", relative: "", savedEvent: ""},
];

// Display the current time and date in the jumbo-tron
currentDayDisplay.text(currentDay);

// Get savedEvents from localStorage (if exists)
(JSON.parse(localStorage.getItem("allSavedEvents")) !== null) 
 ? timeSlots = JSON.parse(localStorage.getItem("allSavedEvents"))
 : null;

// Function to determine what color each hour block should be based on current time
var determineRelativeTime = function (time) {
  // Get current time
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
  // Set the color of the hourBlock based on determineRelativeTime function
  hourBlock.relative = determineRelativeTime(hourBlock.time);

  // Create a new row for each timeSlot index to show that time, the color and the savedEvent (if any is saved locally)
  let hourFormat =
  `<div class="time-block" id="${index}">
    <div class="row no-gutters input-group">
      <div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">${hourBlock.time}</div>
        <textarea class="form-control ${hourBlock.relative} description">${hourBlock.savedEvent}</textarea>
        <div class="col-sm-2 col-lg-1 input-group-append">
          <button class="saveBtn btn-block" type="submit">
            <i class="far fa-save"></i>
          </button>
      </div>
    </div>
  </div>`;
  
  // Append each new row to the container
  $(".container").append(hourFormat);
});

// jQuery Event Listener on 'saveBtn' to set localStorage when button is clicked 
$(".saveBtn").on("click", function(event) {
  // Store which hourBlock was clicked
  let timeBlockID = parseInt($(this).closest(".time-block").attr("id"));

  // Store the user input of the selected block
  let userInput = $.trim($(this).parent().siblings("textarea").val());

  // Save to savedEvent in timeSlots array
  timeSlots[timeBlockID].savedEvent = userInput;

  // save to local storage
  localStorage.setItem("allSavedEvents", JSON.stringify(timeSlots));
});