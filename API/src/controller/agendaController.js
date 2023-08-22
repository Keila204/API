import { inserirAgenda, listarAgenda, buscarNomes, buscarFavoritos } from "../repository/agendaRepository.js";

import { Router } from "express";
const server = Router();


server.post('/agenda', async (req, resp) => {
    try {
        const agendaParaInserir = req.body;

        const agendaInserida = await inserirAgenda(agendaParaInserir);

        resp.send(agendaInserida)
    } catch (err) {
        resp.send(400).send({
            erro: err.message
        })
    }
})

server.get('/agenda/listar', async (req, resp) => {
    let dados = await listarAgenda();
    resp.send(dados);
})

server.get('/agenda/busca', async (req, resp) =>{
    let nome = req.query.nome
    let dice = await buscarNomes(nome);
    resp.send(dice);
})

server.get('/agenda/favorito', async (req, resp) =>{
    let fav = req.query.fav
    let back = await buscarFavoritos(fav);
    resp.send(back);
})



export default server;