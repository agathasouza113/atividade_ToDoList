let valorTotal = 0;
let horaTotal = 0;
let htmlTarefas ='';

function adicionar(){
    const titulo = document.getElementById('titulo').value;
    const valorHora = document.getElementById('valor').value;
    const horas = document.getElementById ('horas').value;

    const valorTask = valorHora * horas;
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
            <button type="button" class="editar_tarefa" onclick="editar()" title="Editar">
                <img src="../img/edit.png" alt="Editar">
            </button>
            <button type="button" class="excluir_tarefa" onclick="exluir()" title="Excluir">
                <img src="../img/delete.png" alt="Excluir">
            </button>
        </div>                    
    </article>
    `;

    document.getElementById('taskList').innerHTML = htmlTarefas;
}