let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let game = document.querySelector(".game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newgame-btn");

let turnO = true;
let click = 0;
let winChanse =  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgamebtn = () => {
    turnO = true;
    click = 0;
    enabledboxes();
    msgcontainer.classList.add("hide");
};


    boxes.forEach((box) => {
        box.addEventListener("click", () => {
    
            if(turnO) {
                box.innerText = "O";
                box.style.color = "red";
                turnO = false;
            }else {
                box.innerText = "X";
                box.style.color = "blue";
                turnO = true;
            }
            click++;
            box.disabled = true;
            checkwinner();
        });
    });

    const disabledboxes = () => {
        for(let box of boxes) {
            box.disabled = true;
        }
    };

    const enabledboxes = () => {
        for(let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showwinner = (winner) => {
        msg.innerText = `Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disabledboxes();
    };

    const drawmatch = () => {
        msg.innerText = "Match Is Draw, Play Again!";
        msgcontainer.classList.remove("hide");
        disabledboxes();
    }

const checkwinner = () => {
    for(let pattern of winChanse) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);   
            } else if (click === 9 && pos1val !== pos2val && pos2val !== pos3val) {
                drawmatch();
            }
        } 
    }
};

newbtn.addEventListener("click", resetgamebtn);
resetbtn.addEventListener("click", resetgamebtn);