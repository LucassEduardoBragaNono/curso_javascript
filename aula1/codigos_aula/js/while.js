let notas = [10, 4, 7, 6];
let media = notas[0] + notas[1] + notas[2] + notas[3];
let media2 = media / notas.length;
var i = 0;

while(i < 4){
    console.log("["+ (i + 1) +"]:", notas[i]);
    media += notas[i];
    i++;
}

console.log("Média final:", media2);