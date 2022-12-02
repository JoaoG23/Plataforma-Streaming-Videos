import Usuario from "../schemas/Usuario/UsuarioModel";
import { UsuarioInterface } from "./interfaces-services/UsuarioInterface";

class UsuarioServices implements UsuarioInterface {
  
  listarTodos(): Promise<Usuario[]> {
    Usuario.findAll();
    throw new Error("Method not implemented.");
  }
  listarPorId(id: number): Promise<Usuario> {
    throw new Error("Method not implemented.");
  }
  deletar(id: number): Promise<Usuario> {
    throw new Error("Method not implemented.");
  }
  editar(id: number, dadosEditar: object): Promise<Usuario> {
    throw new Error("Method not implemented.");
  }
}

export default UsuarioServices;
