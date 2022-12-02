import Usuario from "../../schemas/Usuario/UsuarioModel";

export interface SessionInterface {
  logar(dadosLogin:any): Promise<object>;
  registrar(dadosLogin:any): Promise<Usuario>;
  esqueciSenha(dadosLogin:any): Promise<Usuario>;
}
