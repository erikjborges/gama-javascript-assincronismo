
/**
 * Implementação de funções
 */
function pedirBolo(){
    console.log('Pedindo bolo...');
    return new Promise(
        function(resolve, reject){
            setTimeout(() => {
                console.log('Fazendo bolo...');
                resolve('Bolo de chocolate');
            }, 1000);
        }
    );
}

function festejar(bolo){
    console.log('Fazendo festa com ' + bolo );
}

async function prepararFesta(){
    // Encomendar bolo
    // let bolo = pedirBolo();

    // return bolo;

    // pedirBolo().then(
    //     function(bolo){
    //         // Fazer a festa (festejar)
    //         festejar(bolo);
    //     }
    // );

    let bolo = await pedirBolo();
    // Fazer a festa (festejar)
    festejar(bolo);
}

function trabalhar(){
    console.log('Trabalhando...');
}

function treinar(){
    console.log('Treinando...');
}

function viajar(){
    console.log('Viajando...');
}

/**
 * Chamada de funções / Execução programa
 */

// Preparar a festa
let bolo = prepararFesta();

// Trabalhar
trabalhar();

// Treinar
treinar();

// Viajar
viajar();