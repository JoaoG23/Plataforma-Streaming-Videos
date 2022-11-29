import { UsuarioOuput } from "../model/schemas/Usuario/interface/Usuario";
import Usuario from "../model/schemas/Usuario/UsuarioModel";

class UsuarioServices {
  listaTodos() {
    return Usuario.findAll();
  }
  listaPorId(id: number) {
    return Usuario.findByPk(id);
  }
  listaPorUsuario() {}
  deletarUm() {}
  editarUm(){

  }
}

export default new UsuarioServices();
