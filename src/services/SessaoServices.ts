import validacao from "../utils/Validacao";
import { UsuarioInput } from "../model/schemas/Usuario/interface/Usuario";
import Usuario from "../model/schemas/Usuario/UsuarioModel";
import criptografia from "../utils/Criptografia";
import autenticacao from "../utils/Autenticacao";

class SessaoServices {
  async validarSeExisteEmailSistema(email: string) {
    return await validacao.validarSeExistePropriedade(
      { email: email },
      Usuario
    );
  }
  async validarSeExisteUsuarioSistema(usuario: string) {
    return await validacao.validarSeExistePropriedade(
      { usuario: usuario },
      Usuario
    );
  }
  async validarSeSenhaCorreta(senha: string, usuario: string) {
    const dadosUsuario = await this.validarSeExisteUsuarioSistema(usuario);
    const senhaBancoDados = dadosUsuario.senha;

    return await criptografia.verificarSenhasCombinam(senha, senhaBancoDados);
  }

  criptografar(senha: string): string {
    const senhaHash = String(criptografia.crptografarSenha(senha));
    return senhaHash;
  }

  async inserirTokenSessao(dadosSessao: object) {
    return await autenticacao.gerarTokenSessao(dadosSessao);
  }

  async registrar(dadosLogin: UsuarioInput) {
    return await Usuario.create(dadosLogin);
  }
}

export default new SessaoServices();
