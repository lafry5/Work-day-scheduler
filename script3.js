// var rightNow = moment();
var j = 0;

// if user hit save the description to local storage
$(document).ready(function(){  //syntax to select an element using Jquery
    var btnArray = $(".saveBtn");
    for (var i=0; i<=btnArray.length; i++) { 

        btnArray[i].click(function(){  //class for the button
        // save description to local storage; i.e. how to get an element using Jquery
        var j = i+9;
        var textvalue = $("#data-"+j).val();
        localStorage.setItem("hour-"+j, textvalue);   // hour is what is in local storage
        });

        // Get data from local storage and display on the webpage
        var textvalue = localStorage.getItem("hour-"+j);
        $("#data-"+j).val("test");  //how to change value of elements in jquery; data is where we want to put the data
    
    }
  });
  


  $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

