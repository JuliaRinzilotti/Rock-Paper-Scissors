let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let outPutCompPoints = document.getElementById("compPoints");
let outPutUserPoints = document.getElementById("userPoints");
let compPoints = 0;
let userPoints = 0;
let stand = document.getElementById("stand");

//  wie viele Runden

let five = document.getElementById("five");
let ten = document.getElementById("ten");
let fifteen = document.getElementById("fifteen");
let twenty = document.getElementById("twenty");

// was checked ist, dann value als Number in console.log

let wieOft = document.getElementsByClassName("wieOft");

let count = 0;
const rounds = 5;
let runden = document.getElementById("runden");

let HowMany = () => {

    if (five.checked == true) {
        console.log(Number(five.value))
        const rounds = 5;
        runden.innerHTML = `${count}/${rounds}`
    } else if (ten.checked == true) {
        console.log(Number(ten.value))
        const rounds = 10;
        runden.innerHTML = `${count}/${rounds}`
    } else if (fifteen.checked == true) {
        console.log(Number(fifteen.value))
        let rounds = 15;
        runden.innerHTML = `${count}/${rounds}`
    } else if (twenty.checked == true) {
        console.log(Number(twenty.value))
        let rounds = 20;
        runden.innerHTML = `${count}/${rounds}`
    }

    rock.addEventListener('click', (e) => {
        console.log("button was clicked");
        count++
        runden.innerHTML = `${count}/${rounds}`
        if (count > rounds) {
            console.log("Schluss")
            return;
        }
    });

    paper.addEventListener('click', (e) => {
        console.log("button was clicked");
        count++
        runden.innerHTML = `${count}/${rounds}`;
        if (count > rounds) {
            console.log("Schluss")
            return;
        }
    });

    scissors.addEventListener('click', (e) => {
        console.log("button was clicked");
        count++
        runden.innerHTML = `${count}/${rounds}`
        if (count > rounds) {
            console.log("Schluss")
            return;
        }
    });
}

// Computer spielt - computerChoice
// zwischen 0 und 1 und 2

let computerChoice = () => {
    return Math.floor(Math.random() * 3);
}

// wenn user einen Button klickt – userChoice

let clickRock = () => {
    console.log("UserChoice:" + rock.value)
    let pcChoice = computerChoice();
    console.log(pcChoice)

    if (Number(rock.value) == pcChoice) {
        console.log("Draw!")
        stand.innerHTML = "That's a draw!"
    } else if (Number(rock.value) == 0 && pcChoice == 2) {
        console.log("Yeah. you won!")
        stand.innerHTML = "Rock beats Scissors – you got a point!"
        userPoints++;
        outPutUserPoints.innerHTML = userPoints;
    } else {
        console.log("The computer won.")
        stand.innerHTML = "Paper beats Rock – the computer got a point!"
        compPoints++;
        outPutCompPoints.innerHTML = compPoints
    }
}

let clickPaper = () => {
    console.log("UserChoice:" + paper.value)
    let pcChoice = computerChoice();
    console.log(pcChoice)

    if (Number(paper.value) == pcChoice) {
        console.log("Draw!")
        stand.innerHTML = "That's a draw!"
    } else if (Number(paper.value) == 1 && pcChoice == 2) {
        console.log("The computer won.")
        stand.innerHTML = "Scissors beats Paper – the computer got a point!"
        compPoints++;
        outPutCompPoints.innerHTML = compPoints
    } else {
        console.log("Yeah, you won!")
        stand.innerHTML = "Paper beats Rock – you got a point!"
        userPoints++;
        outPutUserPoints.innerHTML = userPoints;
    }
}

let clickScissors = () => {
    console.log("UserChoice:" + scissors.value)
    let pcChoice = computerChoice();
    console.log(pcChoice)

    if (Number(scissors.value) == pcChoice) {
        console.log("Draw!")
        stand.innerHTML = "That's a draw!"
    } else if (Number(scissors.value) == 2 && pcChoice == 0) {
        console.log("The computer won.")
        stand.innerHTML = "Rock beats Scissors – the computer got a point!"
        compPoints++;
        outPutCompPoints.innerHTML = compPoints
    } else {
        console.log("Yeah, you won!")
        stand.innerHTML = "Scissors beat Paper – you got a point!"
        userPoints++;
        outPutUserPoints.innerHTML = userPoints;
    }
}






