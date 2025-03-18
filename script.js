let amigos = [];  // Array que vai armazenar os nomes dos amigos

// Função para adicionar amigo
document.getElementById('adicionar').addEventListener('click', function() {
  let nome = document.getElementById('nome').value;  // Captura o nome digitado

  if (nome === "") {
    alert("Por favor, insira um nome.");  // Valida se o campo não está vazio
  } else {
    amigos.push(nome);  // Adiciona o nome ao array
    document.getElementById('nome').value = '';  // Limpa o campo de entrada
    atualizarLista();  // Atualiza a lista de amigos
  }
});

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  let lista = document.getElementById('lista-amigos');
  lista.innerHTML = '';  // Limpa a lista antes de adicionar novos itens

  amigos.forEach(function(nome) {
    let li = document.createElement('li');  // Cria um item de lista <li>
    li.textContent = nome;  // Atribui o nome ao item da lista
    lista.appendChild(li);  // Adiciona o item na lista HTML
  });
}

// Função para sortear um amigo secreto
document.getElementById('sortear').addEventListener('click', function() {
  if (amigos.length === 0) {
    alert("Adicione amigos antes de sortear.");  // Verifica se há amigos para sortear
  } else {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  // Gera um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];  // Obtém o nome sorteado

    document.getElementById('resultado').textContent = "O amigo secreto é: " + amigoSorteado;  // Exibe o resultado
  }
});
