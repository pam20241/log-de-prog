let soma = 0;
function contarVogais(palavra){
    for (let i=0; i<vogais.length; i++){
    
        if  (palavra[i]== "A" || palavra[i] == "E" ||palavra[i] == "I" || palavra[i] == "O" || palavra[i] == "U"){

            soma++;
    }
}
    return soma;
}

let vogais = prompt("Digite uma palavra: ");
vogais = vogais.toUpperCase()
contarVogais(vogais);
console.log("Essa é a quantidade de vogais: " + soma);