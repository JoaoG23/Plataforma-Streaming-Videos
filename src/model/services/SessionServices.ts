import Usuario from "../schemas/Usuario/UsuarioModel";
import { SessionInterface } from "./interfaces-services/SessionInterface";

class SessionServices implements SessionInterface {
    logar(dadosLogin: any): Promise<object> {
        throw new Error("Method not implemented.");
    }
    registrar(dadosLogin: any): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    esqueciSenha(dadosLogin: any): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

}

export default SessionServices;
