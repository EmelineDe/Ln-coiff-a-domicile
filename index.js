function myMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

function myWindowSize(){
  var size = window.innerWidth;
  var a = document.getElementById("icon");
  var b = document.getElementById("xl_menu");


  if(size <= 800){
    if(b.style.display = "none"){
      a.style.display = "block";
      b.style.display = "none";
    } 
  }else{
    if(a.style.display === "block"){
      a.style.display = "none";
      b.style.display = "block";
    }
  }
}


window.onresize = myWindowSize;


function openNav() {
  document.getElementById("xl_menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("xl_menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 