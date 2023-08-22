import { con } from './connection.js'



export async function inserirAgenda(agenda) {
    const comando = 
        `INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
	             VALUES (?, ?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [agenda.contato, agenda.telefone, agenda.email, agenda.favorito, agenda.cadastro])
    
    
    return agenda;
}

export async function listarAgenda(){

    let sql = 'select * from tb_agenda';
    let resp = await con.query(sql);
    let dados = resp[0];

    return dados;
}

export async function buscarNomes(nome) {
    let comando = `SELECT nm_contato from tb_agenda
    where nm_contato like ?`

    let volt = await con.query(comando, [`%${nome}%`]);

    return volt[0];
}

export async function buscarFavoritos() {
    let comando = `SELECT nm_contato, bt_favorito from tb_agenda
    where bt_favorito = true;`

    let back = await con.query(comando);

    return back[0];
}