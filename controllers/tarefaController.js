const Tarefa = require('../models/tarefaModel'); 

let tarefas = [];

function getTarefas(req, res) { 
    tarefas = Tarefa.listarTarefas();
    res.render('tarefas', { tarefas }); 
} 

function addTarefa(req, res) { 
    const { title } = req.body; 
    const tarefa = new Tarefa(Date.now(), title, false); 
    tarefas.push(tarefa); 
    res.redirect('/tarefas'); 
} 

module.exports = { getTarefas, addTarefa };
