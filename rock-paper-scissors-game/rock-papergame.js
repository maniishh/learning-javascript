let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options =["rock","paper","scissors"];
//rock paper and scissors
const randIdx =Math.floor(Math.random() * 3);
return options[randIdx];
}
const showWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }else{
         compScore++;
         compScorePara.innerText=compScore;
        msg.innerText=`You lost! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
}
}
const drawgame=()=>{
     
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="#081b31";
};
const playGame=(userChoice)=>{
console.log("user choice = ",userChoice);
const CompChoice=genCompChoice();
console.log("comp choice =",CompChoice);
if(userChoice===CompChoice){
    drawgame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=CompChoice==="paper" ? false:true;
    }
    else  if(userChoice==="paper"){
        userWin=CompChoice==="scissors" ? false:true;
}
else{

        userWin=CompChoice==="rock" ? false:true;
}
showWinner(userWin,userChoice,CompChoice);
}
};
choices.forEach((choice)=> {
     choice.addEventListener("click",()=>
    {
        const userChoice= choice.getAttribute("id");
         
        playGame(userChoice);
    });
});