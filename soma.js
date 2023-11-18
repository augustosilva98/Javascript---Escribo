function soma_multiplos(n) {
    // Verifica se o número é positivo
    if (n < 1) {
      throw new Error("O número deve ser positivo");
    }
  
    // Inicializa a variável de soma
    let soma = 0;
  
    // Itera sobre todos os números inteiros de 1 até n
    for (let i = 1; i < n; i++) {
      // Verifica se o número é divisível por 3 ou 5
      if (i % 3 === 0 || i % 5 === 0) {
        // Adiciona o número à soma
        soma += i;
      }
    }
  
    // Retorna a soma
    return soma;
  }
  