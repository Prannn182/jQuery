alert("Events");
$("h1").addClass("big a");
$("button").click(function () {
  $("h1").css("background-color", "red");
}); //is equals to js document.querySelector("button").addEventListener("click", function(){document.querySelector("h1").style.backgroundColor = "red";}); with a for loop
$("input").keypress(function (event) {
    $("h1").text(event.key);
    
});
$('input').keypress(function(event){
    console.log(event.key);
    
});
//using on function
$("h1").on("mouseover",function(){
    $("h1").css("color","red");
})