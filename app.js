function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById ('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao' 



cartao.innerHTML = `

<div class="cartao__conteudo">
<h3 class="programacao">Geografia</h3>
<div class="cartao__conteudo__pergunta">
<p> Qual é o país que possuí mais ilhas no mundo?</p>
</div>
<div class="cartao__conteudo__resposta">
<p> O país que possuí mais ilhas no mundo é a Suécia.</p>
</div>
</div>

  `
let respostaEstaVisivel=false

function viraCartao(){
  respostaEstaVisivel = !respostaEstaVisivel
  cartao.classList.toggle('active', respostaEstaVisivel)
}

cartao.addEventListener('click', viraCartao)


  container.appendChild(cartao)
}
