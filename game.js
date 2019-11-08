/**
 * John McCarthy
 * 
 * Javascript Game Lab 1
 */


// Prompt user if they want to play
//     - on yes ask for name

let cpuHP = 10;
let userHP = 40;
let userWins = 0;
let cpuName = "Grant";
let userName = "";

userName = prompt(`Who dares to challenge the mighty ${cpuName}?`);

if (userName !== null) {
    while (userHP > 0 && userWins < 3) {
        // removing random HP from both players
        damageHP();

        // log out remaining HP
        displayStatus(cpuHP, userHP, cpuName, userName);

        if (cpuHP <= 0) {
            console.log(`${userName} wins!`);
            userWins++;
            cpuHP = 10;
        }
    }
    if (userWins >= 3 && cpuHP <= 0 && userHP <= 0) {
        console.log("I've never seen anything like this! No winner!");
    } else if (userHP <= 0) {
        console.log(`${cpuName} is the victor!`);
    } else if (userWins >= 3) {
        console.log(`${userName} is the supreme victor!`)
    } else {
        console.log('Well this is embarassing. Something went wrong.');
    }
}

/**
 * Generates a random number inclusively between min and max
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * 
 * @param {Number} min Inclusive minimum
 * @param {Number} max Inclusive maximum
 */
function RNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    //The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Removes a specified amount of HP from each player
 */
function damageHP() {
    userHP -= RNG(1, 2);
    cpuHP -= RNG(1, 2);
}

/**
 * Displays remaining health points for both Grant and the user
 * 
 * @param {Number} cpuHealth Remaining health points for CPU
 * @param {Number} userHealth Remaining helath points for the user
 * @param {Number} nameCPU Name for CPU
 * @param {Number} nameUser Name for the user
 */
function displayStatus(cpuHealth, userHealth, nameCPU, nameUser) {
    console.log(`${nameUser} has ${userHealth} health left.`);
    console.log(`${nameCPU} has ${cpuHealth} health left`);
}