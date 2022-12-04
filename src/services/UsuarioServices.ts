import Usuario from "../model/schemas/Usuario/UsuarioModel";
import criptografia from "../utils/Criptografia";

class UsuarioServices {
  listarTodos() {
    return Usuario.findAll();
  }
  listarPorId(id: number) {
    return Usuario.findByPk(id);
  }
  deletar(id: number) {
    return Usuario.destroy({
      where: {
        id: id,
      },
      force: true,
    });
  }
  criptografar(senha: string): string {
    const senhaHash = String(criptografia.crptografarSenha(senha));
    return senhaHash;
  }


  editar(dadosEditar: object, id: number) {
    return Usuario.update(dadosEditar as object, {
      returning: true,
      where: { id: id },
    });
  }
}

export default new UsuarioServices();
