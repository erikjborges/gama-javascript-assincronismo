function getCatFact(){
    let endpoint = 'https://catfact.ninja/fact';
    fetch(endpoint)
        .then(response => {

            if(!response.ok){
                return new Error('Requisição falhou');
            }

            return response.json();
        })
        .then(data => {
            let catFactDiv = document.getElementById('cat-fact');
            catFactDiv.textContent = data.fact;
        })
        .catch(error => {
            console.error('Requisicao falhou com o erro: ' + error);
        })
}

getCatFact();

function checkAge(name){
    let endpoint = 'https://api.agify.io?name=' + name;
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            let ageSpan = document.getElementById('age-value');
            ageSpan.textContent = data.age;
        });
}

let ageForm = document.getElementById('age-form');

ageForm.onsubmit = (event) => {
    let name = document.getElementById('name');
    checkAge(name.value);
    event.preventDefault();
}