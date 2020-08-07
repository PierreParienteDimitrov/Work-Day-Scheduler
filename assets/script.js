var timeSlots = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
  "12am",
];

console.log(timeSlots);

for (i = 0; i < timeSlots.length; i++) {
  
  // get local storage on load
  var storedInput = localStorage.getItem(timeSlots[i]);
  
  // creating html elements
  var newRow = $("<div>").addClass("row new-row");
  var hour = $("<div>").addClass("col-md-1 col-sm-12 hour");
  // var inputDiv = $("<div>").addClass("col-md-10 col-sm-12 inputDiv");
  var input = $("<input>").addClass("input col-md-10 col-sm-12");
  input.attr("data-value", timeSlots[i]);
  hour.text(timeSlots[i]);

  // adding local storage to input
    input.val(storedInput);

  // current time
  var currentTime = parseInt(moment().format("H"));

  // setting background colour
  if (i + 9 < currentTime) {
    newRow.addClass("grey-bg");
  } else if (i + 9 === currentTime) {
    newRow.addClass("green-bg");
  } else {
    newRow.addClass("red-bg");
  }

  var btn = $("<button>", {
    type: "button",
    value: timeSlots[i],
    on: {
      click: function saveToLocal() {
        var currentEl = $("input[data-value='" + this.value + "']");
        // console.log(currentEl.val())
        var selectedHour = currentEl.data("value");
        // console.log(currentEl)
        // console.log(typeof(currentEl))
        // console.log(selectedHour)
        if (currentEl) {
          var inputText = currentEl.val();
          localStorage.setItem(selectedHour, inputText);
        }
      },
    },
  });

  btn.addClass("col-md-1 col-sm-12 text-center button-save");

  // adding html elements to the page
  $(".calendar").append(newRow);
  newRow.append(hour);
  newRow.append(input);
  // textInput.append(task);
  newRow.append(btn);
}

