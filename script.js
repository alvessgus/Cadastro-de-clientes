// Seleciona os elementos do formulário e tabela
const form = document.getElementById('dataForm');
const tableBody = document.getElementById('tableBody');

// Evento que captura os dados do formulário e adiciona uma nova linha na tabela
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Captura os valores do formulário (const), ou seja ele ta transformando o valor do imput em variavel assim podemos usa-lo
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

// Isso aqui é a validação do e-mail, que Gabriel sugeriu e continua lá embaixo
if (!isValidEmail(email)) {
  alert('O e-mail informado não é válido. Por favor, insira um endereço de e-mail correto.');
  return; // E com isso cancela o envio do formulário, caso não seja válido
}

  // Aqui cria uma nova linha na tabela
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${gender}</td>
    <td><button class="delete-btn">Excluir</button></td>
  `;

  // Adiciona nova linha ao corpo da tabela
  tableBody.appendChild(newRow);

  // Adiciona funcionalidade ao botão "Excluir"
  newRow.querySelector('.delete-btn').addEventListener('click', function() {
    tableBody.removeChild(newRow);
  });

  // Limpa o formulário
  form.reset();
});

// Esta é a função Regex, para validar o formato do e-mail
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailRegex.test(email);
}
