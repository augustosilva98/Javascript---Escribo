function somatorioDivisiveis(num) {
  let soma = 0;

  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  return soma;
}

// Exemplos de uso:
console.log(somatorioDivisiveis(10)); // Saída: 23
console.log(somatorioDivisiveis(11)); // Saída: 33
