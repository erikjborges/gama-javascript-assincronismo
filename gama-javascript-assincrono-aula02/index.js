function passo3(callback){
    setTimeout(() => {
        console.log('Passo 3');
        callback();
    }, 500);
}

function passo4(){
    console.log('Passo 4');
}

// Passo 1
console.log('Passo 1');

// Passo 2
console.log('Passo 2');

// Passo 3
passo3(passo4);