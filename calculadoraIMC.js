function calculoIMC(){
    
    //Entrada
    let valorPeso = document.getElementById("peso").value; // Precisa usar o ".value" no final para obter os valores inseridos nos inputs
    let valorAltura = document.getElementById("altura").value;

    if (!valorPeso || !valorAltura) {
        alert("Necessário preencher a altura e peso");
        return;
    }

    //Processamento
    let imc = valorPeso / (valorAltura * valorAltura);

    document.getElementById("resultado").textContent = imc.toFixed(2); // "toFixed(2)" limita as casas decimais

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
        } else if (imc < 25) {
        classificacao = "Normal ";
        } else if (imc < 30) {
        classificacao = "Sobrepeso I";
        } else if (imc < 40) {
        classificacao = "Obesidade grau II";
        } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("classificacao").textContent = classificacao;

    //Saída


}