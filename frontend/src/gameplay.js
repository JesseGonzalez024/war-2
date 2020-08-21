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


// Create a function that identifies which territories belong to player and which ones do not.

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
//      - Identify which territories belong to current player
//      - Allow the selection of an available territory.
//      - Identify how many troops are stationed in that selected territory.
//      - If Selected territory has more than 1 troop than player may attack neighboring territories.
//      - If both territories are avaiable for an attack move then the "ATTACK" button is made avaialble.
//      - If the attack button is selcted then then both territories selcetd go to war.


// Regroup Mode
//      - Identify territories belonging to player.
//      - Allow the selection of an aviable territory beloning to the player.
//      -  The selected territory displays all available troops.
//      - Player can select a neighboring territory that ALSO belongs to the player.
//      - If both selections satisfy then a player can move a certain number of troops and confirm the move.
//      - The cycle will repeat itself until player selects "End of Turn" option.

