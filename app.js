
let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#rest-btn");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

let winningPatterns=[
    [0, 1, 2],
    [3, 4, 5],   
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

const resetGame = () => {
    turn0 = true;
     boxes.forEach((box) => {
            box.textContent = "";
            box.disabled = false;
        });
    msgContainer.classList.add("hide");
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log(box);
        if(turn0){
            box.textContent = "X";
            turn0 = false;
        }else{
            box.textContent = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
        
    });
    const showWinner = (winner) => {

        msg.innerText = `Congratulations! ${winner} is the winner!`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    } 

    const disableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    };

    


    const checkWinner = () =>{
        for(let pattern of winningPatterns){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 !="" && pos2 != "" && pos3 !=""){
                if(pos1 === pos2 && pos2 === pos3){
                   showWinner(pos1);
                  
                }
            }
        }
    } 
} )

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
    