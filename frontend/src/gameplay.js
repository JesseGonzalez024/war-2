const newgame = document.getElementById("new-game")

newgame.addEventListener("click", startgame)

function startGame() {
    // Upon game Initialization a randomized number of territories are to be distributed.
    // Player object is to be created, and territories appeared.
    renderMap()
}

function renderMap(){
    // Display Territories and Continents
}


// Start of turn 
//      - Identify all territories belonging to player and count them.
//      - Based on total count of territories, player gets rewarded a certain number of troops.
//      - Player can only select and place the troops wherever he already has troops.
//      - "From Territories belonging to player, depemnding on the amount, give player available troops"
//      - Player selects a territory and chooses how many available troops to deploy.
//      - If the deployment is satisfcatofry the player can confirm the move each time he deploys troops.
//      - This cycle is to continue untill there are no more remianing troops.
//      - Once there are no more Troops left, the gameplay will switch to Attack mode.


// Attack Mode
//