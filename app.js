const modal = document.querySelector('.modal-container')

// Função para abrir o modal
function openModal() {
  modal.classList.add('active')
}

// Função para fechar o modal
function closeModal() {
  modal.classList.remove('active')
}

// Função para realizar a pesquisa
function pesquisar(){
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa"); 
  console.log(section); // Loga no console para verificar se a seção foi encontrada

  // Obtém o valor digitado no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if(!campoPesquisa){
    // Se estiver vazio, exibe uma mensagem de erro
    section.innerHTML = "<p>Nenhum personagem foi encontrado. Você precisa digitar o nome do personagem.</p>";
    return;
  };

  // Converte o valor da pesquisa para minúsculas para facilitar a comparação
  campoPesquisa = campoPesquisa.toLowerCase(); 

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada personagem na lista de personagens (assumindo que 'personagens' é uma array de objetos)
  for (let personagem of personagens) {
    // Converte os dados do personagem para minúsculas para facilitar a comparação
    nome = personagem.nome.toLowerCase()
    descricao = personagem.descricao.toLowerCase()
    tags = personagem.tags.toLowerCase()

    // Verifica se o termo de pesquisa está presente no nome, descrição ou tags do personagem
    if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Constrói o HTML para cada item de resultado
      resultados += `
        <div class="item-resultado">
          <h2> <a href="#" target="_blank" class="nome-personagem">${personagem.nome}</a></h2>
          <div class="descricao-img-personagem">
            <p><b>${personagem.fraseInicial}</b><br><br><br>
            <class="descricao-meta">${personagem.descricao} <br><br>
            ${personagem.dicas}</p>
            <img class="personagens-img" src=${personagem.imagem} alt="">
          </div> 
          <a href=${personagem.maisInformacoes} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Verifica se nenhum resultado foi encontrado
  if(!resultados) {
    resultados = "<p> Nenhum personagem foi encontrado. Esse personagem não existe.</p>";
  }

  // Atribui os resultados HTML à seção
  section.innerHTML = resultados; 
}
