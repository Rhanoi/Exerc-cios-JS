//pegando os elementos html pelos seus ids
const larguraInput = document.getElementById('larguraInput');
const comprimentoInput = document.getElementById('comprimentoInput');
const valorM2Input = document.getElementById('valorM2Input');
const areaDoTerreno = document.getElementById('areaDoTerreno');
const precoDoTerreno = document.getElementById('precoDoTerreno');


function precificacaoDoTerreno(){
  //.value é necessário para acessar o valor dentro do elemento html e não o elemento em sí.
  const largura = parseFloat(larguraInput.value) 
  const comprimento = parseFloat(comprimentoInput.value)
  const valorM2 = parseFloat(valorM2Input.value)

  //testando se algum valor é NaN
  if(isNaN(largura)||isNaN(comprimento)||isNaN(valorM2)){
    areaDoTerreno.textContent = "Atenção: Preencha os campos corretamente!"
    precoDoTerreno.textContent = ""
    console.log(areaDoTerreno)
    return // aqui ele sai da função evitando cálculos desnecessários
  }

  let area = (largura*comprimento).toFixed(2);
  let valor = (area*valorM2).toFixed(2);

  areaDoTerreno.textContent = `Área do terreno: ${area} m²`
  precoDoTerreno.textContent = `Preço do terreno: R$ ${valor}`
}