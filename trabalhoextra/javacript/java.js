//willian fedel 00249931
function ordenarValores() {
    let valores = [];
    let inputElements = document.getElementsByClassName("valor");

    for (var i = 0; i < inputElements.length; i++) {
        let valor = parseInt(inputElements[i].value);
        if (!isNaN(valor) && valores.indexOf(valor) === -1) {
            valores.push(valor);
          } else {
            alert("Digite um valor inteiro diferente dos anteriores.");
            return;
          }
        }
        valores.sort(function(a, b) {
            return b - a;
          });
          var outputElement = document.getElementById("resultado1");
          outputElement.innerHTML = "Valores em ordem decrescente: " + valores.join(", ");
        }
        function verificarTriangulo() {
            var lado1 = parseFloat(document.getElementById("lado1").value);
            var lado2 = parseFloat(document.getElementById("lado2").value);
            var lado3 = parseFloat(document.getElementById("lado3").value);

            if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
                if (lado1 === lado2 && lado2 === lado3) {
                  document.getElementById("resultado2").innerHTML = "Triângulo Equilátero";
                } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                  document.getElementById("resultado2").innerHTML = "Triângulo Isósceles";
                } else {
                  document.getElementById("resultado2").innerHTML = "Triângulo Escaleno";
                }
              } else {
                document.getElementById("resultado2").innerHTML = "Os valores fornecidos não formam um triângulo.";
              }
            }
            function calcularNotas() {
                var valor = parseInt(document.getElementById("valor").value);
          
                var notas100 = Math.floor(valor / 100);
                valor = valor % 100;
          
                var notas50 = Math.floor(valor / 50);
                valor = valor % 50;
          
                var notas10 = Math.floor(valor / 10);
                valor = valor % 10;
          
                var notas5 = Math.floor(valor / 5);
                valor = valor % 5;
          
                var notas1 = valor;
          
                document.getElementById("resultado3").innerHTML = "Valor lido: " + document.getElementById("valor").value +
                  "<br>Notas de 100: " + notas100 +
                  "<br>Notas de 50: " + notas50 +
                  "<br>Notas de 10: " + notas10 +
                  "<br>Notas de 5: " + notas5 +
                  "<br>Notas de 1: " + notas1;
              }
              function calcularImposto() {
                var ano = parseInt(document.getElementById("ano").value);
                var valorTabela = parseFloat(document.getElementById("valorTabela").value);
          
                var taxa;
                if (ano < 1990) {
                  taxa = 0.01; // 1% para carros antes de 1990
                } else {
                  taxa = 0.015; // 1.5% para carros a partir de 1990
                }
          
                var imposto = valorTabela * taxa;
          
                document.getElementById("resultado4").innerHTML = "Imposto a ser pago: R$ " + imposto.toFixed(2);
              }
              function calcularNovoSalario() {
                var salario = parseFloat(document.getElementById('salario').value);
                var cargo = document.getElementById('cargo').value;
                var novoSalario = 0;
          
                if (cargo === 'gerente') {
                  novoSalario = salario + (salario * 0.1);
                } else if (cargo === 'engenheiro') {
                  novoSalario = salario + (salario * 0.2);
                } else if (cargo === 'tecnico') {
                  novoSalario = salario + (salario * 0.3);
                } else {
                  novoSalario = salario + (salario * 0.4);
                }
          
                var aumento = novoSalario - salario;
          
                document.getElementById('resultado5').innerHTML = 'Salário antigo: R$ ' + salario.toFixed(2) + '<br>' +
                                                                 'Novo salário: R$ ' + novoSalario.toFixed(2) + '<br>' +
                                                                 'Aumento de: R$ ' + aumento.toFixed(2);
              }
              function calcularCredito() {
                var saldo = parseFloat(document.getElementById('saldo').value);
                var credito = 0;
          
                if (saldo >= 0 && saldo <= 200) {
                  credito = saldo * 0;
                } else if (saldo > 200 && saldo <= 400) {
                  credito = saldo * 0.2;
                } else if (saldo > 400 && saldo <= 600) {
                  credito = saldo * 0.3;
                } else if (saldo > 600) {
                  credito = saldo * 0.4;
                }
          
                document.getElementById('resultado6').innerHTML = 'Saldo Médio: R$ ' + saldo.toFixed(2) + '<br>' +
                                                                  'Valor do Crédito: R$ ' + credito.toFixed(2);
              }
              function calcularValor() {
                var produto = parseInt(document.getElementById('produto').value);
                var quantidade = parseInt(document.getElementById('quantidade').value);
                var valorTotal = 0;
          
                if (produto === 1) {
                  valorTotal = 11 * quantidade;
                } else if (produto === 2) {
                  valorTotal = 8.5 * quantidade;
                } else if (produto === 3) {
                  valorTotal = 8 * quantidade;
                } else if (produto === 4) {
                  valorTotal = 9 * quantidade;
                } else if (produto === 5) {
                  valorTotal = 10 * quantidade;
                } else if (produto === 6) {
                  valorTotal = 4.5 * quantidade;
                }
          
                document.getElementById('resultado7').innerHTML = 'Valor a ser pago: R$ ' + valorTotal.toFixed(2);
              }
              function calcularPesoIdeal() {
                var altura = parseFloat(document.getElementById("altura").value);
                var sexo = document.getElementById("sexo").value;
          
                var pesoIdeal;
          
                if (sexo === "masculino") {
                  pesoIdeal = (72.7 * altura) - 58;
                } else if (sexo === "feminino") {
                  pesoIdeal = (62.1 * altura) - 44.7;
                } else {
                  document.getElementById("resultado8").innerHTML = "Sexo inválido.";
                  return;
                }
          
                document.getElementById("resultado8").innerHTML = "Peso Ideal: " + pesoIdeal.toFixed(2) + " kg";
              }

              function calcularPagamento() {
                var precoEtiqueta = parseFloat(document.getElementById("precoEtiqueta").value);
                var condicaoPagamento = document.getElementById("condicaoPagamento").value;
          
                var valorPago;
          
                switch (condicaoPagamento) {
                  case "a":
                    valorPago = precoEtiqueta * 0.9; // Desconto de 10% para pagamento à vista em dinheiro ou cheque
                    break;
                  case "b":
                    valorPago = precoEtiqueta * 0.85; // Desconto de 15% para pagamento à vista no cartão de crédito
                    break;
                  case "c":
                    valorPago = precoEtiqueta; // Preço normal de etiqueta para pagamento em duas vezes sem juros
                    break;
                  case "d":
                    valorPago = precoEtiqueta * 1.1; // Preço normal de etiqueta mais juros de 10% para pagamento em duas vezes
                    break;
                  default:
                    document.getElementById("resultado9").innerHTML = "Condição de pagamento inválida.";
                    return;
                }
          
                document.getElementById("resultado9").innerHTML = "Valor a ser pago: R$ " + valorPago.toFixed(2);
              }
              function calcularSalario() {
                var nivel = parseInt(document.getElementById("nivel").value);
                var qtdAula = parseInt(document.getElementById("qtdAula").value);
          
                var valorHoraAula;
          
                switch (nivel) {
                  case 1:
                    valorHoraAula = 12.00;
                    break;
                  case 2:
                    valorHoraAula = 17.00;
                    break;
                  case 3:
                    valorHoraAula = 25.00;
                    break;
                  default:
                    document.getElementById("resultado10").innerHTML = "Nível de professor inválido.";
                    return;
                }
          
                var salario = valorHoraAula * qtdAula * 4.5;
          
                document.getElementById("resultado10").innerHTML = "Salário do professor: R$ " + salario.toFixed(2);
              }