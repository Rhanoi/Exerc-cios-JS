<link rel="stylesheet" type="text/css" href="style.css">

# Cálculo Imobiliário: <br> Valorização de Terrenos
## Situação:
Você é um corretor de imóveis autônomo e precisa de uma forma rápida e eficiente de calcular o valor de diferentes terrenos para seus clientes. Muitos dos terrenos que você lida têm medidas com casas decimais (por exemplo, 12,5 metros de largura) e os preços por metro quadrado também variam bastante, com valores como R$ 153,85/m². Para agilizar seu trabalho e evitar erros de cálculo, você decide criar um programa simples que automatiza esse processo.

## Exemplo de uso:

Cliente: "Olá, estou interessado em um terreno que mede 25,8 metros de largura por 38,2 metros de comprimento. Qual seria o valor total, considerando que o metro quadrado naquela região custa R$ 185,50?"


Você: (abre seu programa, insere as medidas e o valor do metro quadrado)


Programa: (calcula e exibe na tela) "A área do terreno é de 986,76 m² e o valor total é de R$ 183.076,18."


Você: (informa o valor ao cliente) "O valor total do terreno seria de R$ 183.076,18."

## Benefícios do programa:
- Agilidade: Cálculos instantâneos, economizando tempo em cada negociação.
- Precisão: Evita erros de cálculo manual, garantindo informações corretas aos clientes.
- Profissionalismo: Demonstra organização e conhecimento técnico, transmitindo confiança aos clientes.
- Personalização: Permite adaptar o cálculo para diferentes terrenos e valores de mercado.

<hr>

<h1>Calcule o valor do Terreno</h1>
Qual é a largura do terreno?<br>
<input type="number" id="larguraInput" placeholder="Digite a largura do terreno"><br>

Qual é o comprimento do terreno?<br>
<input type="number" id="comprimentoInput" placeholder="Digite o comprimento do terreno"><br>
Qual é o valor do metro quadrado?<br>
<input type="number" id="valorMetroQuadradoInput" placeholder="Digite o valor do metro quadrado">


<button id="calcularButton" onclick="calcularEExibir()">Calcular</button>
<div id="resultadoArea"></div>
<div id="resultadoPreco"></div>




<script src="01_terreno.js"></script>  