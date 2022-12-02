import Usuario from "../../schemas/Usuario/UsuarioModel";

export interface UsuarioInterface {
  listarTodos(): Promise<Usuario[]>;
  listarPorId(id: number): Promise<Usuario>;
  deletar(id: number): Promise<Usuario>;
  editar(id: number, dadosEditar: object): Promise<Usuario>;
}
