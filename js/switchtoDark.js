 let modBtn=document.querySelector("#mode");
/*let currMode="light";

modBtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="Dark";
       // document.querySelector("body").style.backgroundColor="black";
       document.querySelector("body").classList.add("dark");
       document.querySelector("body").classList.remove("light");
    } 
else{
  currMode="light"; 
  //document.querySelector("body").style.backgroundColor="white"; 
document.querySelector("body").classList.add("light"); 
document.querySelector("body").classList.remove("dark");
}
console.log(currMode);
}
  );

  modBtn.addEventListener("click",()=>{
    console.log("you are trying to change mod");  }
  );
  */
  let divi=document.querySelector("#divi");
  let currMode="light";

  divi.addEventListener("mouseover",()=>{
      if(currMode=="light"){
          currMode="Dark";
         // document.querySelector("body").style.backgroundColor="black";
         document.querySelector("body").classList.add("dark");
         document.querySelector("body").classList.remove("light");
      } 
  else{
    currMode="light"; 
    //document.querySelector("body").style.backgroundColor="white"; 
  document.querySelector("body").classList.add("light"); 
  document.querySelector("body").classList.remove("dark");
  }
  console.log(currMode);
  }
    );
  
    divi.addEventListener("mouseover",()=>{
      console.log("you are trying to change mod");  }
    );