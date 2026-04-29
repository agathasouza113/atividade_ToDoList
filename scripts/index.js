let valorTotal = 0;
let horaTotal = 0;
let htmlTarefas ='';

//Aqui é a função de abrir o menu e fechar
function abrir_menu(){
    const botaoAbrir = document.getElementById('abrir');
    const barraMenu = document.querySelector('.barra_menu');

    barraMenu.classList.toggle('aberto');
}

// Aqui é a função de adiconar a tarefa
function adicionar(){
    const urgencia = document.getElementById('urgencia').value;

    const titulo = document.getElementById('titulo').value;
    const valorHora = document.getElementById('valor').value;
    const horas = document.getElementById ('horas').value;

    let valorTask = valorHora * horas; //Para ele variar o valor, ou seja, adicionar a urgência no valor total

    if(urgencia === 'Média'){
        valorTask = valorTask * 1.20;
    } else if(urgencia === "Alta"){
        valorTask = valorTask * 1.50;
    }

    horaTotal += parseFloat(horas);
    valorTotal += valorTask;
    
    document.getElementById('valorAcumulado').innerText = "R$ " + valorTotal.toFixed(2);
    document.getElementById('horaAcumulada').innerText = horaTotal + "H";

    htmlTarefas+= `
    <article>
        <div class="coluna_tarefa">
            <h4>Tarefa</h4>
            <p>${titulo}</p>
        </div>
        <div class="coluna_tarefa">
            <h4>Duração</h4>
            <p>${horas}h</p>
        </div>
        <div class="coluna_tarefa">
            <h4>Valor total</h4>
            <p>R$ ${valorTask.toFixed(2)}</p>
        </div>
        <div class="acoes">
            <button type="button" class="editar_tarefa" onclick="editar(this)" title="Editar">
                <img src="../img/edit.png" alt="Editar">
            </button>
            <button type="button" class="excluir_tarefa" onclick="exluir(this)" title="Excluir">
                <img src="../img/delete.png" alt="Excluir">
            </button>
        </div>                    
    </article>
    `;

    document.getElementById('taskList').innerHTML = htmlTarefas;

    // Aqui limpa os valor pra escrever denovo
    document.getElementById('titulo').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('horas').value = '';
    document.getElementById('urgencia').value = '';
}

//Aqui vai ser o botão excluir
function editar(botao) {
    let nomeP = botao.closest('article').querySelector('.coluna_tarefa p');
    let novoNome = prompt('Novo nome:');
    if (novoNome) {
        nomeP.textContent = novoNome;
    }
}

//Aqui vai ser o botão excluir
function exluir(botao) {
    const article = botao.closest('article');
    
    // Pega todos os <p> do meu html para achar onde está o <p> das horas e do valor
    let pegarP = article.querySelectorAll('p');
    let horas = Number(pegarP[1].textContent.replace('h', '')); 
    let valor = Number(pegarP[2].textContent.replace('R$ ', ''));
    
    horaTotal -= horas;
    valorTotal -= valor;
    //Aqui ele tira o que eu deletei e pega o que ja tem na tela e adiciona o novo, pra não ter erro de substituição
    article.remove();
    htmlTarefas = document.getElementById('taskList').innerHTML;

    document.getElementById('horaAcumulada').innerText = horaTotal + 'H';
    document.getElementById('valorAcumulado').innerText = 'R$ ' + valorTotal.toFixed(2);
}