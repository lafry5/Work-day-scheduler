// var currentDay = moment().format('LL');
var currentHour = moment().hours();
var j = 0;

// if user hit save the description to local storage
$(document).ready(function() {
  var j = 0;
  //syntax to select an element using Jquery
  var btnArray = $(".saveBtn");
  for (let i = 0; i < btnArray.length; i++) {
    j = i + 9;
    btnArray[i].addEventListener("click", function() {
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
});

// moment().format('MMMM Do YYYY, h:mm:ss a'); Need to extract the hour, 'h' for hourformatter

hourformatter();

function hourformatter() {
  var blockhourArray = $(".description");
  console.log('blockhourArray is '+blockhourArray);
 
  var i =0;

   for (let i = 9; i < blockhourArray.length; i++) {

      if (blockhourArray[i] === currentHour) {
          // if it is the same then textarea background = red
          // #hour-9="background-color:#ff0000";  // this line doesn't work
        }
        else if (blockhourArray < currentHour) {
            // textarea background = grey
        }
        else {
            // textarea background = green
        } //end of if blockhourArray
        
    }    
} // end of hourformatter function

