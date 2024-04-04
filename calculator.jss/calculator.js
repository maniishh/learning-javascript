const display=document.querySelector("#display");
let divs =document.querySelectorAll("div");
let mode=document.querySelector("#mode-on");
let currMode="light";
function appendToDisplay(input){
display.value+=input;
}
function clearDisplay(){
display.value="";
}
const disbaledivs=()=>{
    for(let div of divs){

        div.disable=true;
    }
};
const enabledivs=()=>{
    for(let div of divs){

        div.disable=false;
    
    }
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function backspace(){
    display.value=display.value.slice(0,-1);
}


mode.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="Dark";
        document.querySelector("#cover").style.backgroundColor="#1d2333";
        document.querySelector("#mode-on").style.backgroundColor="green";
        document.querySelector("#mode-on").innerText="OFF";
       //document.querySelector("#cover").classList.add("dark");
       //document.querySelector("#cover").classList.remove("light");
       enabledivs();
    } 
else{
  currMode="light"; 
  document.querySelector("#cover").style.backgroundColor="#c6bfbf6c"; 
  document.querySelector("#mode-on").innerText="ON";
  document.querySelector("#mode-on").style.backgroundColor="rgb(63, 4, 4)";
  disbaledivs();

 
//document.querySelector("#cover").classList.add("light"); 
//document.querySelector("#cover").classList.remove("dark");
}
 
}
  );

  mode.addEventListener("click",()=>{
       }
  );