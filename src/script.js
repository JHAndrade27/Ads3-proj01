function calcularIdade() {
    let anoDigitado = document.getElementById("anoDeNascimento").value;
    if (anoDigitado == "") {
        alert("Por favor, digite o ano de nascimento");
        return;
    }

    if (2025 - anoDigitado > 125){
        alert ("Idade inválida, Digite um ano de nascimento válido, maior que 1899");
        return;
    }

    let idade = 2025 - anoDigitado;
    document.getElementById("resultado").innerHTML = `idade é ${idade}`;
}