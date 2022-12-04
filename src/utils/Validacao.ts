import { UsuarioAttributes } from "../model/schemas/Usuario/interface/Usuario"

class Validacao {
     async validarSeExistePropriedade( propriedadeAValidar: UsuarioAttributes, ModeloEntidade:any ) {
         return await ModeloEntidade.findOne({
             where:propriedadeAValidar
         })
     }
}

export default new Validacao()