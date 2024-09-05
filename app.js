function pesquisar(){
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
    console.log(section); // Loga no console para verificar se a seção foi encontrada

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = ""

    // Itera sobre cada personagem na lista de personagens
    for (let personagem of personagens) {
        // Constrói o HTML para cada item de resultado
        resultados += `
            <div class="item-resultado"> <h2> <a href="#" target="_blank" class="nome-personagem">${personagem.nome}</a>
                </h2>
                <div class="descricao-img-personagem"> <p class="descricao-meta">${personagem.descricao} <br> <br>Primeira aparição: ${personagem.primeiroJogo} <br> <br>
                Jogos: ${personagem.jogos} <br> <br>
                Habilidades: ${personagem.habilidades}</p> <img class="personagens-img" src=${personagem.imagem} alt=""> </div> <br>
                <a href=${personagem.maisInformacoes} target="_blank">Mais informações</a> </div>
        `
    }

    // Atribui os resultados HTML à seção
    section.innerHTML = resultados; 
}