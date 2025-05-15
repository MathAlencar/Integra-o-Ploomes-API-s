import apiPloomes from '../service/axios.js';
import { formatadorInput } from '../metodos/metodos.js'

export class CallOptions{
    constructor(){}

    async main(TableId){
        try{
            const response = await apiPloomes.get(`/Fields@OptionsTables@Options?$select=Id,TableId,Name&$filter=TableId eq ${TableId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': 'TOKEN_PLOOMES'
                }
            })

            const data = await response.data;

            return data

        }catch(error){
            if(error.response){
                console.error('Erro API: ', error.response.data)
            } else {
                console.error('Erro geral: ', error.message)
            }
        }
    }
}

export class Deal{
    constructor(dados_update, Id){
        this.dados = dados_update;
        this.Id = Id;
    }

    async main(){
        console.log(this.dados)

        try{
            const response = await apiPloomes.patch(`/Deals(${this.Id})`, this.dados , {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': 'TOKEN_PLOOMES'
                }
            })

            const data = await response.data;

            return data;
        }catch(error){
            if(error.response){
                console.error('Erro API: ', error.response.data)
            } else {
                console.error('Erro geral: ', error.message)
            }
        }
    }
}