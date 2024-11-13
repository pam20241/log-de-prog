let pessoa;
let maiorAltura;
let menorAltura;

for (i = 0; i < 5; i++) {
  pessoa = Number(prompt("Digite sua altura: "));
  if (i === 0) {
    maiorAltura = pessoa;
    menorAltura = pessoa;
  } else {
    if (pessoa > maiorAltura) {
      maiorAltura = pessoa;
    }
    if (pessoa < menorAltura) {
      menorAltura = pessoa;
    }
  }
}

alert("A maior altura é: " + maiorAltura);
