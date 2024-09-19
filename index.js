function calcular() {
    // Obter os valores
    const primeiroValor = Number(document.getElementById('primeiroValor').value);
    const segundoValor = Number(document.getElementById('segundoValor').value);

    // Exibir as informações
    document.getElementById('resultSoma').innerText = `Soma: ${primeiroValor + segundoValor}`;
    document.getElementById('resultSubt').innerText = `Subtração: ${primeiroValor - segundoValor}`;
    document.getElementById('resultMulti').innerText = `Multiplicação: ${primeiroValor * segundoValor}`;
    document.getElementById('resultDivi').innerText = `Divisão: ${primeiroValor / segundoValor}`;

    // Áárea de resultado visível
    document.getElementById('resultado').display = 'block';
}