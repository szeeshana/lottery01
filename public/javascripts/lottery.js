var i = 0;

$('select').on('change', function() {
    $(".data-tables").hide();
    $("."+this.value).show();
    $("."+this.value).removeClass("hide");



//   function move() {
    
//   }
//   move()
  });


function myFunction(event) {
  $(".confetti").css("display","none");
  $("#submitBtn").css("display","none");
  $("#resetBtn").css("display","none");
  $("#waitImg").css("display","block");
  $('.main-winner').html('')
    const val = $('select').val()
    $.getJSON( "json/lotto-user.json", function( data ) {
       console.log(data[val]);
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
            $('.temp-winner').html(data[val][random])
            console.log(width);
          if (width >= 100) {
            console.log(`And the winner is ${data[val][random]}`);
            $('.temp-winner').html('')
            $('.main-winner').html(`And the winner is ....... ${data[val][random]}`)
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