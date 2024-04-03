 /*
 let newBtn=document.createElement("button");
 newBtn.innerText="click me !";
 
 
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn);*/
//let newHeading=document.createElement("h1");
//newHeading.innerHTML="<i>HI,I am new!</i>";
//document.querySelector("body").prepend(newHeading);
//let para=document.querySelector("p");
//para.remove();
let para=document.querySelector(".para");
para.style.color="red";
//Event Handling in JS
let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);//26
}

//EVENT OBJECT
/*btn1.onclick=(e)=>{
    console.log(e);
}*/
//EVENT LISTENERS
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",() =>{
    console.log("button1 was clicked");

}

);



