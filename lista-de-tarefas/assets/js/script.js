var lista = []


var btn_cadastrar = document.getElementById("btn-cadastrar")
btn_cadastrar.addEventListener("click", function(){
    let input_tarefa = document.getElementById("input-tarefa")
    lista.push(input_tarefa.value)

    input_tarefa.value = ""
    carregar_Cadastros()
}) 

function carregar_Cadastros () {
    let lista_tarefas = document.getElementById("lista-tarefas")
    lista_tarefas.innerHTML = ""
    for (let [indice, percorre] of lista.entries()){
        // esse for com entries retorna a chave (íncice) e o seu valor (percorre)
        let paragrafo = document.createElement("p")
        paragrafo.textContent = indice+1 + "° - " + percorre
        paragrafo.setAttribute("class", "item-add")
        paragrafo.setAttribute("data-indice", indice)
        // dataAtribute: adiciona um atributo que você mesmo cria

        let btn = document.createElement("button")
        btn.setAttribute("class", "btn-lista")
        btn.textContent = "OK"
        btn.onclick = deletar_Tarefa
        // outra forma de realizar eventos
        // uma função de callBack não pode ter parênteses

        paragrafo.appendChild(btn)
        lista_tarefas.appendChild(paragrafo)
    }
}

function deletar_Tarefa () {
    let pai_elemento = this.parentNode
    let indice = pai_elemento.getAttribute("data-indice")
    lista.splice(indice, 1)

    carregar_Cadastros()
}