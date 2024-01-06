// npm i inquirer 
// @types/inquirer 
// install this before coding 


import inquirer from 'inquirer';



(async () => {

const systemGeneratedNo = Math.floor(Math.random() * 10) + 1;


const { userGuess }: { userGuess: number } = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "Guess the number (between 1 and 10):"
});


if (userGuess === systemGeneratedNo) {
    console.log("Congratulations! You guessed it right.");
} else {
    console.log(`Oops! The correct number was ${systemGeneratedNo}. Better luck next time!`);

}
})();
