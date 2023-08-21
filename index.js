let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("#player-1").setAttribute("src", `./assets/images/dice${randomNumber1}.png`);
document.querySelector("#player-2").setAttribute("src", `./assets/images/dice${randomNumber2}.png`);

function whoWins() {
    if (randomNumber1 === randomNumber2) {
        document.getElementsByClassName("h1-refresh-me")[0].textContent = "Draws! ⚔️";
    }
    else if (randomNumber1 > randomNumber2) {
        document.getElementsByClassName("h1-refresh-me")[0].textContent = "🥇 Player 1 Wins!";
    } else {
        document.getElementsByClassName("h1-refresh-me")[0].textContent = "Player 2 Wins! 🥇";
    }
}

whoWins();