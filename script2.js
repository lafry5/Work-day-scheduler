// var currentDay = moment().format('LL');
var currentHour = moment().hours();
var j = 0;

// if user hit save the description to local storage
$(document).ready(function () {
  var j = 0;
  //syntax to select an element using Jquery
  var btnArray = $(".saveBtn");
  for (let i = 0; i < btnArray.length; i++) {
    j = i + 9;
    btnArray[i].addEventListener("click", function () {
      j = i + 9;
      //class for the button
      // save description to local storage; i.e. how to get an element using Jquery
      var textvalue = $("#data-" + j).val();
      console.log(j);
      localStorage.setItem("hour-" + j, textvalue); // hour is what is in local storage
    });

    // Get data from local storage and display on the webpage
    var textvalue = localStorage.getItem("hour-" + j);
    $("#data-" + j).val(textvalue); //how to change value of elements in jquery; data is where we want to put the data
  }
  var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
  
  hourformatter();

  function hourformatter() {

    $(".time-block").each(function(){ //hour-9 => [hour, 9]
      var blockHour = parseInt($(this).attr("id").split("-")[1]);// "9" => 9
      console.log("block hour", blockHour);
      if(blockHour < currentHour) {
          $(this).addClass("past");
      } else if(blockHour === currentHour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("future");
      } // end of if
    }); // end of time block
  } // end of hour formatter       

}); //was there
