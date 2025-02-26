function calcularIdade() {
    let anoDigitado = document.getElementById("anoDeNascimento").value;

    let idade = 2025 - anoDigitado;

    console.log(idade);

    document.getElementById("resultado").innerHTML `idade é ${idade}`;
}