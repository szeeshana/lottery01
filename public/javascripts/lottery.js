var i = 0;

$('select').on('change', function() {
    $(".data-tables").hide();
    $("."+this.value).show();
    $("."+this.value).removeClass("hide");



//   function move() {
    
//   }
//   move()
  });


  // function copyToClipboard(text) {
  //   console.log(text,"pp");
  //   var textArea = document.createElement("textarea");
  //   textArea.value = text;
  //   document.body.appendChild(textArea);
  //   textArea.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(textArea);
  // }
  function getNextMonday() {
    var today = new Date();
    var nextMonday = new Date(today.getTime() + (7 - today.getDay()) % 7 * 24 * 60 * 60 * 1000);
    var dates = [];
    for (var i = 0; i < 7; i++) {
      var date = new Date(nextMonday.getTime() + i * 24 * 60 * 60 * 1000);
      if (date.getDay() === 1) {
        dates.push(date);
      }
    }
    // return dates;
    // return only date not time
    return dates.map(date => date.toISOString().split('T')[0]);
  }
  
  function getTomorrowOrNextMonday() {
    var today = new Date();
    var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    var day = tomorrow.getDay();
    if (day === 0 || day === 6) { // 0 = Sunday, 6 = Saturday
      var daysToMonday = (7 - day) % 7;
      tomorrow = new Date(tomorrow.getTime() + daysToMonday * 24 * 60 * 60 * 1000);
    }
    // return tomorrow;
    // return only date not time
    return tomorrow.toISOString().split('T')[0];
  }
  function copyToClipboard(text,type) {
    console.log(text,type);
    if(type == "iConiSoftTacticalCall") {
      navigator.clipboard.writeText("/me Winner for the call dated "+type+" on "+getNextMonday()+" is @"+text).then(() => {
        console.log("Text copied to clipboard");
      }).catch((err) => {
        console.error("Error copying text to clipboard: ", err);
      });
      alert("Text copied to clipboard, you can use this text now");

    } else {
      navigator.clipboard.writeText("/me Winner for the Scrum call dated for "+type+" on "+getTomorrowOrNextMonday()+" is @"+text).then(() => {
        console.log("Text copied to clipboard");
      }).catch((err) => {
        console.error("Error copying text to clipboard: ", err);
      });
      alert("Text copied to clipboard, you can use this text now");
    }
   
  }
  
  

function myFunction(event) {
  $(".confetti").css("display","none");
  $("#submitBtn").css("display","none");
  $("#resetBtn").css("display","none");
  $("#waitImg").css("display","block");
  $('.main-winner').html('')
    const val = $('select').val()
    $.getJSON( "json/lotto-user.json", function( data ) {
      
      console.log(val);
       console.log(data[val]);
       const mapper = {
        "Scrum" : "PermissionizeScrumCall",
        "Tactical" : "iConiSoftTacticalCall",
        "ScrumOne" : "Gain200ScrumCall",
       }
       
       if (i == 0) {
        i = 1;
        console.log(i);
        var elem = document.getElementById("myBar");
        console.log(elem,'elem');
        var width = 1;
        var id = setInterval(frame, 50);
        function frame() {
            const random = Math.floor(Math.random() * data[val].length);
            console.log(random, data[val][random]);
            $("#row"+data[val][random]+mapper[val]).css("background","red");
            setTimeout(() => {
              // if (width < 100) {
                $("#row"+data[val][random]+mapper[val]).css("background","none");
              // }
            }, 500);
          

            $('.temp-winner').html(data[val][random])
            console.log(width);
          if (width >= 100) {
            console.log(`And the winner is ${data[val][random]}`);
            $('.temp-winner').html('')
            $('.main-winner').html(`And the winner is ....... <img width="100px" src="images/loader.webp">`)

            setTimeout(() => {
              $('.main-winner').css("margin-bottom","5px");
              $('.main-winner').html("And the winner is ....... "+data[val][random]+"</br><a type=\"button\" class=\"btn btn-default\" onClick=copyToClipboard('"+data[val][random]+"','"+mapper[val]+"')>Share on <image src=\"images/skype.svg\"></a> <br>")

              $("#row"+data[val][random]+mapper[val]).css("background","red");
            }, 2000);
            $(".confetti").css("display","flex");
            $("#submitBtn").css("display","inline");
            $("#resetBtn").css("display","inline");
            $("#waitImg").css("display","none");
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
       
    });
    console.log(val,'val');
    // alert("The form was submitted");

    
}