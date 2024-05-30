const larguraInput = document.getElementById('larguraInput');
const comprimentoInput = document.getElementById('comprimentoInput');
const valorMetroQuadradoInput = document.getElementById('valorMetroQuadradoInput');
const resultadoArea = document.getElementById('resultadoArea');
const resultadoPreco = document.getElementById('resultadoPreco');

function calcularEExibir() {
  const largura = larguraInput.value;
  const comprimento = comprimentoInput.value;
  const valorMetroQuadrado = valorMetroQuadradoInput.value;

  // Verifica se algum dos valores é NaN
  if (isNaN(largura) || isNaN(comprimento) || isNaN(valorMetroQuadrado)) {
    resultadoArea.textContent = "Por favor, insira valores numéricos válidos.";
    resultadoPreco.textContent = ""; // Limpa o resultado do preço
    return; // Sai da função para evitar cálculos com valores inválidos
  }

  const area = largura * comprimento;
  const preco = area * valorMetroQuadrado;

  resultadoArea.textContent = `Área do terreno é de ${area.toFixed(2)} m²`;
  resultadoPreco.textContent = `Valor total do terreno é de R$ ${preco.toFixed(2)}`;
}
