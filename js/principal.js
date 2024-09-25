var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente');
    for (let i = 0; i < pacientes.length; i++){
        var peso = pacientes[i].querySelector('.info-peso').textContent;
        var altura = pacientes[i].querySelector('.info-altura').textContent;
        var imc = peso / (altura*altura);
        pacientes[i].querySelector('.info-imc').textContent = imc;
    }