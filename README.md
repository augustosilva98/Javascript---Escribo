# soma
1. A função somatorioDivisiveis recebe um número inteiro positivo como parâmetro.
2. Inicializamos a variável soma com o valor 0, que será usada para armazenar a soma dos números divisíveis por 3 ou 5.
3. Em seguida, usamos um loop for para iterar por todos os números de 1 até o número passado como parâmetro (num - 1). Isso é feito usando a condição i < num.
4. Dentro do loop, verificamos se o número i é divisível por 3 ou por 5 usando o operador % (que retorna o resto da divisão). Se o resto da divisão de i por 3 ou por 5 for igual a 0, isso significa que i é divisível por 3 ou 5.
5. Se a condição for verdadeira, adicionamos o valor de i à variável soma usando o operador +=.
6. Após o loop, retornamos o valor da variável soma, que contém a soma dos números divisíveis por 3 ou 5 menores que o número passado como parâmetro.

Nos exemplos fornecidos, a função somatorioDivisiveis é chamada com os números 10 e 11 como argumentos. O resultado é 23 para o número 10 e 33 para o número 11, que são as somas dos números divisíveis por 3 ou 5 menores que esses números.
