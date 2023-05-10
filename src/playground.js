const prompt = require('prompt-sync')({ sigint: true });
let optMenu=[`1-Play a guessing game!`,
`2-Words of Affirmation`,
`3-Random Advice`,
`4-Quit`];
let name;
let sayBye= `Aww bye ${name}!!Hope you come back soon`;
let startGame=`Awesome choice, Lets get started!! Have Fun!!!`;
const randomAffirmation=()=>{};
const randomAdvice=()=>{};

const welcome=()=>{
    name=prompt("Welcome. Thank you for playing. Whats your name?!")
    
};

const greetUser=()=>{
welcome()
console.log(`Hey ${name}, I hope you enjoy playing !!!`);
console.log(`Here are your gaming options today!!: 
${optMenu}`);
};

greetUser();

const randomInt=(val)=>{
    return Math.floor(Math.random()*val);
};

 const userGuessNum=()=> prompt(`Pick a number between 0 and 25:`);
 
let check;
const checkGuess=(user,comp)=>{
    check = (user > comp ? console.log(`Take a smaller guess.`): user < comp ? console.log(`Take a larger guess.`):console.log("YOU DID IT!!"));
     };

const guessThatNumber=()=>{
   const compGuess=randomInt(25);
  
   let userGuess=Number(userGuessNum());
   while(userGuess!==compGuess){
       checkGuess(userGuess,compGuess);
       userGuess=Number(userGuessNum());
     
   }
   if(userGuess==compGuess){
       console.log(`Yay ${name}, You did it!!`);
   }
   
    
};


  
const startMenu=()=>{ 
let userMenuPrompt=prompt(`What are you looking to play?`);
    while(userMenuPrompt!==`4`){
      if(userMenuPrompt==`1`){
          console.log(startGame);
          guessThatNumber();
        userMenuPrompt=prompt(`What are you looking to play?`);
    
      }else if(userMenuPrompt==`2`){
          console.log(startGame);
          randomAffirmation();
          userMenuPrompt=prompt(`What are you looking to play?`);
      }
      else if(userMenuPrompt==`3`){
        console.log(startGame);
          randomAdvice();
          userMenuPrompt=prompt(`What are you looking to play?`);
         
      }
      else if(userMenuPrompt==`4`){
        console.log(sayBye);
          break;
      }
    }
};
startMenu();

