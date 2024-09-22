$(document).ready(function () {
  //     $("p").text("tag name wala text");
  //     $("#my-id").text("My New Id text").addClass("border rounded w-50 text-center py-4 bg-warning text-dark fw-bold ");
  //   $(".my-class").html("My new <b>Class</b> added");

  //   $("body").addClass(
  //     " d-flex justify-content-center align-items-center mx-auto my-5"
  //   );

  //   let myDiv = $(".my-div");
  //   let myInfo = $("#info");
  //   let input = $("input");

  //   myDiv.click(function () {
  //     myInfo.text("single click");
  //   });
  //   myDiv.dblclick(function () {
  //     myInfo.text("Double click");
  //   });

  //   myDiv.mouseenter(function(e){
  //     myInfo.text("mouse enter");
  //   })
  //   myDiv.mouseleave(function(){
  //     myInfo.text("mouse leave");
  //   })
  //   myDiv.contextmenu(function(){
  //     myInfo.text("Right Clicked")
  //   })

  //   $("input").keyup(function () {
  //     myInfo.text("key Up");
  //   });
  //   $("input").keydown(function () {
  //     myInfo.text("keydown");
  //   });
  //   $("input").keypress(function () {
  //     myInfo.text("keypress");
  //   });

  // $("#sform").addClass("border p-4 rounded")
  // $("#sform input").addClass("mt-2")

  // $("#sname,#sclass").focus(function(){
  //     $(this).addClass("bg-warning");
  // })

  // $("#sname,#sclass").blur(function(){
  //     $(this).removeClass("bg-warning");
  // })

  // $("#sform").submit(function(){
  //     alert("Form Submited");
  // })

  //   $("#myBtn").click(function () {
  //     var res = $("#my-input").val();
  //     alert(res);
  //   });

  //   $(".myBtn").click(function () {
  //     $(this).css({ transform: "scale(2,2)" });
  //   });

  //   $(".mydiv p").append("<code>This is append</code>");
  //   $(".mydiv p").prepend("<code>This is prepend </code> ");
  //   $(".mydiv").before("<code>This is Before() </code> ");
  //   $(".mydiv").after("<code>This is After() </code> ");

  //   $(".hideBtn").click(function () {
  //     $(".mydiv").hide(3000);
  //   });

  //   $(".showBtn").click(function () {
  //     $(".mydiv").show(3000);
  //   });

  //   $(".toggleBtn").click(function () {
  //     $(".mydiv").toggle(3000);
  //   });

  //   $(".fadeIn").click(function () {
  //     $(".myPara").fadeIn(3000);
  //   });
  //   $(".fadeOut").click(function () {
  //     $(".myPara").fadeOut(3000);
  //   });
  //   $(".fadeToggle").click(function () {
  //     $(".myPara").fadeToggle(3000);
  //   });
  //   $(".fadeTo").click(function () {
  //     $(".myPara").fadeTo(3000, 0.5);
  //   });

  //   $(".slideUp").click(function () {
  //     $(".myPara").slideUp(3000);
  //   });
  //   $(".slideDown").click(function () {
  //     $(".myPara").slideDown(3000);
  //   });
  //   $(".slideToggle").click(function () {
  //     $(".myPara").slideToggle(3000);
  //   });

  $(".rise").click(function () {
    $(".sun").animate({ top: "7%", left: "10%" }, 9000);
    $(".bird1").animate({ top: "20%", left: "80%" }, 15000);
    $(".bird2").animate({ top: "30%", left: "60%" }, 15000);
    $(".bird3").animate({ top: "40%", left: "30%" }, 15000);
    $(".bird4").animate({ top: "50%", left: "80%" }, 15000);
    $(".bird5").animate({ top: "60%", left: "40%" }, 15000);

    $(".fly1").animate({ top: "20%", left: "10%" }, 15000);
    $(".fly2").animate({ top: "30%", left: "50%" }, 15000);
    $(".fly3").animate({ top: "40%", left: "80%" }, 15000);
    $(".fly4").animate({ top: "50%", left: "40%" }, 15000);
    $(".fly5").animate({ top: "60%", left: "23%" }, 15000);
  });

  $(".shine").click(function () {
    $(".mySun").css(
      "background",
      "linear-gradient(rgb(0, 0, 0),rgb(36, 25, 20),rgb(37, 50, 88))"
    );

    $(".moon").animate({ top: "7%", left: "30%" }, 1000);

        $(".star1").animate({top:"20%",left:"5%"},1000);
        $(".star2").animate({top:"20%",left:"10%"},1000);
        $(".star3").animate({top:"20%",left:"15%"},1000);
        $(".star4").animate({top:"20%",left:"20%"},1000);
        $(".star5").animate({top:"20%",left:"25%"},1000);
        $(".star6").animate({top:"20%",left:"30%"},1000);
        $(".star7").animate({top:"20%",left:"35%"},1000);
        $(".star8").animate({top:"20%",left:"40%"},1000);
        $(".star9").animate({top:"20%",left:"45%"},1000);
        $(".star10").animate({top:"20%",left:"50%"},1000);
        $(".star11").animate({top:"20%",left:"55%"},1000);
        $(".star12").animate({top:"20%",left:"60%"},1000);

        $(".star1").animate({top:"30%",left:"27%"},1000);
        $(".star2").animate({top:"10%",left:"20%"},1000);
        $(".star3").animate({top:"40%",left:"25%"},1000);
        $(".star4").animate({top:"50%",left:"10%"},1000);
        $(".star5").animate({top:"20%",left:"55%"},1000);
        $(".star6").animate({top:"70%",left:"70%"},1000);
        $(".star7").animate({top:"10%",left:"85%"},1000);
        $(".star8").animate({top:"50%",left:"93%"},1000);
        $(".star9").animate({top:"9%",left:"35%"},1000);
        $(".star10").animate({top:"3%",left:"60%"},1000);
        $(".star11").animate({top:"30%",left:"75%"},1000);
        $(".star12").animate({top:"80%",left:"90%"},1000);


        $(".sun").animate({ top: "7%", left: "100%" }, 1000);
        $(".bird1").animate({ top: "20%", left: "100%" }, 1000);
        $(".bird2").animate({ top: "30%", left: "100%" }, 1000);
        $(".bird3").animate({ top: "40%", left: "100%" }, 1000);
        $(".bird4").animate({ top: "50%", left: "100%" }, 1000);
        $(".bird5").animate({ top: "60%", left: "100%" }, 1000);

        $(".fly1").animate({ top: "20%", left: "-10%" }, 1000);
        $(".fly2").animate({ top: "30%", left: "-10%" }, 1000);
        $(".fly3").animate({ top: "40%", left: "-10%" }, 1000);
        $(".fly4").animate({ top: "50%", left: "-10%" }, 1000);
        $(".fly5").animate({ top: "60%", left: "-13%" }, 1000);
  });

});
