$(document).ready(function(){
  var mat1;
  var produkt1;
  produkt1 = 0;
  var mat2;
  var produkt2;
  produkt2 = 0;
  var mat3;
  var produkt3;
  produkt3 = 0;
  var mat4;
  var produkt4;
  produkt4 = 0;
  var mat5;
  var produkt5;
  produkt5 = 0;
  var mat6;
  var produkt6;
  produkt6 = 0;
  var mat7;
  var produkt7;
  produkt7 = 0;
  var mat8;
  var produkt8;
  produkt8 = 0;
  var mat9;
  var produkt9;
  produkt9 = 0;

  $("#cart").hide();


  $("#flip").click(function(){
    $("#cart").slideToggle("smooth");
  });






  $("#btn-1").click(function(){
    produkt1++;
    localStorage.setItem("prod1", produkt1);
    mat1 = localStorage.getItem("prod1");
    if(mat1>=1){
      $("#id1").show();
    }else{
      $("#id1").hide();
    }
  });


  $("#btn-2").click(function(){
    produkt2++;
    localStorage.setItem("prod2", produkt2);
    mat2 = localStorage.getItem("prod2");
    if(mat2>=1){
      $("#id2").show();
    }else{
      $("#id2").hide();
    }
  });
  $("#btn-3").click(function(){
    produkt3++;
    localStorage.setItem("prod3", produkt3);
    mat3 = localStorage.getItem("prod3");
    if(mat3>=1){
      $("#id3").show();
    }else{
      $("#id3").hide();
    }
  });
  $("#btn-4").click(function(){
    produkt4++;
    localStorage.setItem("prod4", produkt4);
    mat4= localStorage.getItem("prod4");
    if(mat4>=1){
      $("#id4").show();
    }else{
      $("#id4").hide();
    }
  });
  $("#btn-5").click(function(){
    produkt5++;
    localStorage.setItem("prod5", produkt5);
    mat5 = localStorage.getItem("prod5");
    if(mat5>=1){
      $("#id5").show();
    }else{
      $("#id5").hide();
    }
  });
  $("#btn-6").click(function(){
    produkt6++;
    localStorage.setItem("prod6", produkt6);
    mat6 = localStorage.getItem("prod6");
    if(mat6>=1){
      $("#id6").show();
    }else{
      $("#id6").hide();
    }
  });
  $("#btn-7").click(function(){
    produkt7++;
    localStorage.setItem("prod7", produkt7);
    mat7 = localStorage.getItem("prod7");
    if(mat7>=1){
      $("#id7").show();
    }else{
      $("#id7").hide();
    }
  });
  $("#btn-8").click(function(){
    produkt8++;
    localStorage.setItem("prod8", produkt8);
    mat8 = localStorage.getItem("prod8");
    if(mat8>=1){
      $("#id8").show();
    }else{
      $("#id8").hide();
    }
  });
  $("#btn-9").click(function(){
    produkt9++;
    localStorage.setItem("prod9", produkt9);
    mat9 = localStorage.getItem("prod9");
    if(mat9>=1){
      $("#id9").show();
    }else{
      $("#id9").hide();
    }
  });

  $("#remove-btn-1").click(function(){
    $("#id1").hide();

  });
  $("#remove-btn-2").click(function(){
    $("#id2").hide();
  });
  $("#remove-btn-3").click(function(){
    $("#id3").hide();
  });
  $("#remove-btn-4").click(function(){
    $("#id4").hide();
  });
  $("#remove-btn-5").click(function(){
    $("#id5").hide();
  });
  $("#remove-btn-6").click(function(){
    $("#id6").hide();
  });
  $("#remove-btn-7").click(function(){
    $("#id7").hide();
  });
  $("#remove-btn-8").click(function(){
    $("#id8").hide();
  });
  $("#remove-btn-9").click(function(){
    $("#id9").hide();
  });

});
