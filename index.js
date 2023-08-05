

var heading = document.querySelector("#headingtext");







function shakil (){
 
heading.classList.add("headingstyle");

}
function remstyle (){

heading.classList.remove("headingstyle");



}



// second part start now ---------------




var bangla = document.querySelector("#bangla") ;

bangla.addEventListener("mouseover" ,bangladesh);

function bangladesh(){

bangla.classList.add("heading2");


}
bangla.addEventListener("mouseout" ,bangladesh2);

function bangladesh2(){

bangla.classList.remove("heading2");


}

// second part end here 







for(i=0; i< 3;  i++) {


var but=document.querySelectorAll("#butt88")[i];


but.addEventListener("click",function(){
var text =this.innerHTML;

var heading=document.querySelector("#heading0");
heading.innerHTML = text + "  :-" +"it's ok   ";

});

}