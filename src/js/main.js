class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    get nomeHeroi() {
        return this.nome;
    }

    get idadeHeroi() {
        return this.idade
    }

    get tipoHeroi() {
        return this.tipo
    }

    atacarHeroi(tipo) {
        let mensagemAtaque = `o ${tipo} atacou usando `;

        switch (typeof tipo === 'string') {
            case tipo === 'Mago':
                mensagemAtaque += "magia"
                break;
            case tipo === 'Guerreiro':
                mensagemAtaque += "espada"
                break;
            case tipo === 'Monge':
                mensagemAtaque += "artes marciais"
                break;
            case tipo === 'Ninja':
                mensagemAtaque += "shuriken"
                break;
        }

        return mensagemAtaque;
    }
}

function montaSelectTipoHerois() {
    const select = document.getElementById('tipoHeroi')

    const arrayTiposHerois = [
        'Guerreiro', 'Mago', 'Monge', 'Ninja'
    ];

    for (let tipoHeroi of arrayTiposHerois) {
        select.innerHTML += `<option value=${tipoHeroi}>${tipoHeroi}</option>`
    }
}
montaSelectTipoHerois()

function dadosCadastradosHeroi() {
    const nomeHeroi = document.getElementById('nomeHeroi').value.toString();
    const idadeHeroi = parseInt(document.getElementById('idadeHeroi').value);
    const tipoHeroi = document.getElementById('tipoHeroi').value.toString();

    return {
        'nome': nomeHeroi,
        'idade': idadeHeroi,
        'tipo': tipoHeroi,
    };
}

function atacar() {
    const dadosHeroi = dadosCadastradosHeroi();

    let classeHeroi = new Heroi(dadosHeroi.nome, dadosHeroi.idade, dadosHeroi.tipo)

    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `
            <li>Nome: ${classeHeroi.nomeHeroi}</li>
            <li>Idade: ${classeHeroi.idadeHeroi}</li>
            <li>Tipo: ${classeHeroi.tipoHeroi}</li>
            <li>Ataque: ${classeHeroi.atacarHeroi(classeHeroi.tipoHeroi)}</li>`;
}