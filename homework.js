// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Scenario is const but the values within can be viewed and changed. Verdict will show murderer name





// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// murderer is now a simple variable and cannot be amended. Function of change murderer will have no effect.
// Declare murderer will show original - Professor Plum

// NOTE TO SELF - it actually errored while trying to reassign murderer name






// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// First verdict will be Mrs Peacock as the function will change the murderer (as it as a let)
// Second verdict will be Professor Plum as function only changes the murderer within the function 





// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Logging suspects will show the string "The suspects are Miss Scarlett, Professor Plum and Colonel Mustard." 
// We have only changed suspect three within this, the variable 'suspect 3' is still globally Mrs. Peacock



// Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// As you can change within objects even with a const, the change weapon function changes candle stick to revolver within the function.
// Declare weapon provides the string using the global variables.
// The verdict will still use the weapon candle stick

// NOTE - got this one wrong. Within change weapon we are not creating a new variable, we are amending the existing variable. 
// Therefore, it changes globally. 




// Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// murderer has been declared as a let and can be amended. We change it from Col Mustard to Mr Green and then using plot twist, we
// change to Mrs White. 
// The murdered will be declared as Mrs White



// Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Murdered is a let variable and can be amended. 
// Firstly, we run change murderer. This changes murderer to Mr Green. Then runs unexpected outcome, changing to Miss Scarlett.
// We then run plot twist which changes it to Col Mustard
// We then declare murderer as Col Mustard

// NOTE - because the plot twist function is within change murderer, it does not have the scope to change the global variable.
// Change murderer will always return the murdered as Mr Green here, which is the answer



// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// First thing we call is change scenario. This changes the murderer to Mrs Peacock and room to dining room. 
// We then call plotTwist(dining room) which changes the murderer to Col Mustard. We then call unexOutcome(col M) which changes
// weapon to candle stick. 

// Verdict will be candle stick


// Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Murderer is Prof Plum
// If statement changes Murderer but only within the if statement as the let variable remains within local scope of the if 
// Verict will be Prof Plum



// 7/9 - I'll take it!