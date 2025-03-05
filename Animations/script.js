$("h1").addClass("big a");
$("button").click(function() {
  $("h1").slideUp().slideDown().animate({margin: "200px"}); //when we are using animate we can only use numeric values
})
// $("h1").show() //to make it reappear
// $("h1").toggle() //to make it appear and disappear
// $("h1").fadeOut() //to make it fade out
// $("h1").fadeIn() //to make it fade in
// $("h1").fadeToggle()
// $("h1").slideUp()
// $("h1").slideDown()
// $("h1").slideToggle()
// $("h1").animate({opacity: 0.5});