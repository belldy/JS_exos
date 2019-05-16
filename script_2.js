

n = prompt("De quel nombre veut tu calculer la factorielle ?")

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(`Le résultat est : ${factorial(n)}`);

