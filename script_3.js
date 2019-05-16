

stairs = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

console.log("Voici la pyramide :")


let space = " "
let symbol = "#"

function pyramid(stairs) {
  for (let i = 0; i <= stairs; i++) {
  	let print = '';
  //initialize with i = 0, while i <= stairs keep incrementing by 1

  for (let j = 0; j <= (stairs - i - 1); j++) {
  	print += space; 
  }

  for (let k = 0; k <= i; k++) {
  	print += symbol;
  }

  console.log(print);
  }
} 

pyramid(stairs);


