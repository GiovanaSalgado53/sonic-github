function pesquisar(){
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
    console.log(section); // Loga no console para verificar se a seção foi encontrada

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum personagem foi encontrado. Você precisa digitar o nome do personagem.</p>"
        return 
    };

    campoPesquisa = campoPesquisa.toLowerCase(); 


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = ""; 
    let descricao = ""; 
    let tags = ""; 

    // Itera sobre cada personagem na lista de personagens
    for (let personagem of personagens) {
        nome = personagem.nome.toLowerCase()
        descricao = personagem.descricao.toLowerCase()
        tags = personagem.tags.toLowerCase()
        

        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                    // Constrói o HTML para cada item de resultado
        resultados += `
            <div class="item-resultado"> <h2> <a href="#"           target="_blank" class="nome-personagem">${personagem.nome}</a>
            </h2>
                <div class="descricao-img-personagem"> <p class="descricao-meta">${personagem.descricao} <br> <br>Primeira aparição: ${personagem.primeiroJogo} <br> <br>
                Jogos: ${personagem.jogos} <br> <br>
                Habilidades: ${personagem.habilidades}</p> <img class="personagens-img" src=${personagem.imagem} alt=""> </div> <br>
                <a href=${personagem.maisInformacoes} target="_blank">Mais informações</a> </div>
        `

        }

  

    }

    if(!resultados) {
        resultados = "<p>Nenhum personagem foi encontrado. Esse personagem não existe.</p>"
    }

    // Atribui os resultados HTML à seção
    section.innerHTML = resultados; 
}
