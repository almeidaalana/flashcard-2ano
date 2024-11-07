function criarCartao(categoria,pergunta,resposta){
    let container = document.getElementyById('cotainer')
    //VARIAVEL COTAINER BUSCADA PELO IDE 'cotainer' 
    let cartao = document.createElement('article')
    //VARIAVEL CARTAO QUE CRIA <ARTICLE> NO HTML
    cartao.className = 'cartao'
    //CRIA CLASSE "cartao" para o elemento criado
    cartao.innerHTML = 
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p></p>
    </div>

    
    