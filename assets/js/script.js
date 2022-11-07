const currentDayDisplay = $("#currentDay"); //getDate.now
const timeBlocksContainer = $(".container");

const currentDay = moment().format("dddd, MMMM Do, YYYY"); // Get Current Date
const currentTimeDisplay = moment().format("hA"); // Get Current Time in AM/PM
const currentTime = moment(currentTimeDisplay, "hA"); // Get Current Time to 'floored' (rounded down) hour

init();

function init() {
  
  const timeSlots = {
    NineAM: {time:"9AM", color: "white", savedEvent: "none"},
    TenAM:{time:"10AM", color: "white", savedEvent: "none"},
    ElevenAM:{time:"11AM", color: "white", savedEvent: "none"},
    NoonPM:{time:"12PM", color: "white", savedEvent: "none"},
    OnePM:{time:"1PM", color: "white", savedEvent: "none"},
    TwoPM:{time:"2PM", color: "white", savedEvent: "none"},
    ThreePM:{time:"3PM", color: "white", savedEvent: "none"},
    FourPM:{time:"4PM", color: "white", savedEvent: "none"},
    FivePM:{time:"5PM", color: "white", savedEvent: "none"},
  };

  // Display the current time and date in the jumbo-tron
  currentDayDisplay.text(currentDay);

  //console.log(currentTime);

  
  // Retrieves innerKey/value pairs of the timeSlots object (Nested ForEach)
  Object.entries(timeSlots).forEach(([key, val]) => {
    
    let hourBlock = (`<p value=${key} style="background-color: ${val.color}">${val.time}`);

    //hourBlock.val(`${val.color}`);

    //console.log(`key: ${key} val: ${val}`);


    //Object.entries(val).forEach(([innerKey, innerVal]) => {
      //console.log(`innerKey: ${innerKey} innerVal: ${innerVal}`);
      //let innerBlock = (`<p class='innerBlock'>${innerVal}`);
      
      //timeBlocksContainer.append(innerBlock);
      //console.log(`key: ${key} val: ${val.time}`);
      if (moment(val.time, "hA").isSame(currentTime)) {
        console.log("same time");
        hourBlock.addClass("present");
        timeBlocksContainer.append(hourBlock);
        //innerKey.color = "red";
        //innerBlock.css("background-color", "red");
        //color = red;
      }
      else if (moment(val.time, "hA").isBefore(currentTime)) {
        console.log("before time");
        hourBlock.addClass("past");
        timeBlocksContainer.append(hourBlock);
        //innerVal = "grey";
        //hourBlock.css("background-color", "grey");
      } 
      else if (moment(val.time, "hA").isAfter(currentTime)) {
        console.log("after time");
        hourBlock.addClass("future");
        timeBlocksContainer.append(hourBlock);
        //innerVal = "green";
        //hourBlock.css("background-color", "green");
      }


      // if (moment(innerVal, "hA").isSame(currentTime)) {
      //   console.log("same time");
      //   innerKey.color = "red";
      //   //hourBlock.css("background-color", "red");
      //   //color = red;
      // }
      // else if (moment(innerVal, "hA").isBefore(currentTime)) {
      //   console.log("before time");
      //   innerVal = "grey";
      //   //hourBlock.css("background-color", "grey");
      // } 
      // else if (moment(innerVal, "hA").isAfter(currentTime)) {
      //   console.log("after time");
      //   innerVal = "green";
      //   //hourBlock.css("background-color", "green");
      // }
      
    });
    
  //});
  
};
