
function imprimePrimeiro(){
    console.log("Primeiro");
}

function imprimeSegundo(){
    setTimeout(() => console.log("Segundo"), 500); // Espera 1 segundo
}

function imprimeTerceiro(){
    console.log("Terceiro");
}

imprimePrimeiro();
imprimeSegundo();
imprimeTerceiro();