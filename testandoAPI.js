import { CallOptions, Deal } from './api/APIPloomes.js'
import { Garantidores, Tomadores, DemaisInformacoes } from './metodos/metodos.js'

const garantidores = new Garantidores();
const demaisInformacoes = new DemaisInformacoes();

async function testando() {
    const Dados = new Array();
    const tomadores = new Tomadores(Dados);

    tomadores.tomador_um(
    '1','01/09/2002',2,'48304605805','0','Solteiro','o',
    '07143040', '11951098449', 'teste@gmail.com', 'teste', 'Renda',
    1,1,1,1,1)

    tomadores.tomador_dois('1','01/09/2002',2,'48304605805','0','Solteiro','o',
    '07143040', '11951098449', 'teste@gmail.com', 'teste', 'Renda',
    1,1,1,1,1)


    const json = {
        ContactId: 801772529,
        OtherProperties: Dados
    }
    
    const update = new Deal(json, 801772529);
    const dados_dois = await update.main();

    console.log(dados_dois);
}

testando();