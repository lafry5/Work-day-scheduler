var currentDay = moment().format('LL');
var currentHour = moment().hours();
var j = 0;

// if user hit save the description to local storage
$(document).ready(function(){  //syntax to select an element using Jquery
     var btnArray = $(".saveBtn");
     console.log(btnArray);
     
     for (var i=0; i<=btnArray.length; i++) {  
        $(".saveBtn").click(function(){  //class for the button
        btnArray[i];
        // save description to local storage; i.e. how to get an element using Jquery
        //var j = i+9;
    
        var textvalue = $("#data-9").val();
        localStorage.setItem("hour-9", textvalue);   // hour is what is in local storage
    
    }); // end of saveBtn click function

        // Get data from local storage and display on the webpage
        var textvalue2 = localStorage.getItem("hour-9");
        $("#data-9").val(textvalue2);  //how to change value of elements in jquery; data is where we want to put the data

        // end of hour 9

        $(".saveBtn").click(function(){  
            btnArray[i];
        
            var textvalue = $("#data-10").val();
            localStorage.setItem("hour-10", textvalue);   

        }); // end of saveBtn click function
    
             var textvalue2 = localStorage.getItem("hour-10");
            $("#data-10").val(textvalue2);  
   
        // end of hour 10
        
        $(".saveBtn").click(function(){  
            btnArray[i];
        
            var textvalue = $("#data-11").val();
            localStorage.setItem("hour-11", textvalue);   

        }); // end of saveBtn click function
    
             var textvalue2 = localStorage.getItem("hour-11");
            $("#data-11").val(textvalue2);  
   
        // end of hour 11  

  } // end of for loop

});   // end of document ready function
  
hourformatter();
  
  $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

  function hourformatter() {
    var blockhour = ("#data-9");
    console.log('blockhour is '+blockhour);
    if (blockhour === currentHour) {
        #hour-9="background-color:#ff0000";  // this line doesn't work
    }
    else if (blockhour < currentHour) {
        // textarea background = grey
    }
    else {
        // textarea background = green
    } 
  } // end of hourformatter function