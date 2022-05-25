$(document).ready(function(){


var summa =0;





  mat1 = localStorage.getItem("prod1");
  summa += mat1 *109;
  $("#mat1").text(+mat1);
if(mat1>=1){

    $("#id1").show();
}else{
  $("#id1").hide();
}
$("#remove-btn-1").click(function(){
  localStorage.removeItem("prod1")
  $("#id1").hide();
  summa-=mat1*109;
    $("#total").text(+summa+ " kr");

});
mat2 = localStorage.getItem("prod2");
summa += mat2 *79;
$("#mat2").text(+mat2);
if(mat2>=1){

  $("#id2").show();
}else{
$("#id2").hide();
}
$("#remove-btn-2").click(function(){
  localStorage.removeItem("prod2")
  $("#id2").hide();
  summa-=mat2*79;
    $("#total").text(+summa+ " kr");

});
mat3 = localStorage.getItem("prod3");
$("#mat3").text(+mat3);
summa += mat3 *85;
if(mat3>=1){

  $("#id3").show();
}else{
$("#id3").hide();
}
$("#remove-btn-3").click(function(){
  localStorage.removeItem("prod3")
  $("#id3").hide();
  summa-=mat3*85;
    $("#total").text(+summa+ " kr");

});
mat4 = localStorage.getItem("prod4");
$("#mat4").text(+mat4);
summa += mat4 *95;
if(mat4>=1){

  $("#id4").show();
}else{
$("#id4").hide();
}
$("#remove-btn-4").click(function(){
  localStorage.removeItem("prod4")
  $("#id4").hide();
  summa-=mat5*95;
    $("#total").text(+summa+ " kr");

});
mat5 = localStorage.getItem("prod5");
$("#mat5").text(+mat5);
summa += mat5 *90;
if(mat5>=1){

  $("#id5").show();
}else{
$("#5").hide();
}
$("#remove-btn-5").click(function(){
  localStorage.removeItem("prod5")
  $("#id5").hide();
  summa-=mat5*90;
    $("#total").text(+summa+ " kr");

});
mat6 = localStorage.getItem("prod6");
$("#mat6").text(+mat6);
summa += mat6 *59;
if(mat6>=1){

  $("#id6").show();
}else{
$("#id6").hide();
}
$("#remove-btn-6").click(function(){
  localStorage.removeItem("prod6")
  $("#id6").hide();
  summa-=mat6*59;
    $("#total").text(+summa+ " kr");

});
mat7 = localStorage.getItem("prod7");
$("#mat7").text(+mat7);
summa += mat7 *159;
if(mat7>=1){

  $("#id7").show();
}else{
$("#id7").hide();
}
$("#remove-btn-7").click(function(){
  localStorage.removeItem("prod7")
  $("#id7").hide();
  summa-=mat7*159;
    $("#total").text(+summa+ " kr");

});
mat8 = localStorage.getItem("prod8");
$("#mat8").text(+mat8);
summa += mat8 *10;
if(mat8>=1){

  $("#id8").show();
}else{
$("#id8").hide();
}
$("#remove-btn-8").click(function(){
  localStorage.removeItem("prod8")
  $("#id8").hide();
  summa-=mat8*10;
    $("#total").text(+summa+ " kr");

});
mat9 = localStorage.getItem("prod9");
$("#mat9").text(+mat9);
summa += mat9 *25;
if(mat9>=1){

  $("#id9").show();
}else{
$("#id9").hide();
}
$("#remove-btn-9").click(function(){
  localStorage.removeItem("prod9")
  $("#id9").hide();
  summa-=mat9*25;
    $("#total").text(+summa+ " kr");
});


  $("#remove-all-btn").click(function(){
    localStorage.removeItem("prod1")
    $("#id1").hide();
    localStorage.removeItem("prod2")
    $("#id2").hide();
    localStorage.removeItem("prod3")
    $("#id3").hide();
    localStorage.removeItem("prod4")
    $("#id4").hide();
    localStorage.removeItem("prod5")
    $("#id5").hide();
    localStorage.removeItem("prod6")
    $("#id6").hide();
    localStorage.removeItem("prod7")
    $("#id7").hide();
    localStorage.removeItem("prod8")
    $("#id8").hide();
    localStorage.removeItem("prod9")
    $("#id9").hide();

    $("#all").hide();

  });

  $("#check-out").click(function(){
    alert("Du kan inte betala. Vi har även nu din kredit information :)");
  });



    $("#total").text("Total Summa: "+summa+ " kr");



    });
