let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".message-container");
let msg =document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const disbaleBoxes=()=>{
    for(let box of boxes){

        box.disable=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){

        box.disable=false;
        box.innerText="";
    }
};
const resetGame=()=> {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText='Congratulations , Winner is ${winner} ';
    msgContainer.classList.remove("hide");
    disbaleBoxes();
};



       const checkWinner=()=>{
        for(let pattern of winPatterns){
    
            let pos1Val= boxes[pattern[0]].innerText ;
            let pos2Val= boxes[pattern[1]].innerText;
            let pos3Val= boxes[pattern[2]].innerText;
            if(pos1Val!="" && pos2Val!=""&&pos3Val !=""){
                if(pos1Val==pos2Val && pos2Val==pos3Val){
                    showWinner(pos1Val);
                }
            }
        }
    };
            newBtn.addEventListener("click",resetGame);
            resetbtn.addEventListener("click",resetGame);
    
    
