"use strict";
// npm i inquirer 
// @types/inquirer 
// install this before coding 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
(async () => {
    const systemGeneratedNo = Math.floor(Math.random() * 10) + 1;
    const { userGuess } = await inquirer_1.default.prompt({
        type: "number",
        name: "userGuess",
        message: "Guess the number (between 1 and 10):"
    });
    if (userGuess === systemGeneratedNo) {
        console.log("Congratulations! You guessed it right.");
    }
    else {
        console.log(`Oops! The correct number was ${systemGeneratedNo}. Better luck next time!`);
    }
})();
