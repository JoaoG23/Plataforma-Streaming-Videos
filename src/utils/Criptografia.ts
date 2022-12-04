import bcrypt from 'bcryptjs';
class Criptografia {
    verificarSenhasCombinam(senhaEntrada: string, senhaBancoDados: string) {
        return bcrypt.compareSync(senhaEntrada ,senhaBancoDados );
    }
    crptografarSenha(senhaEntrada: string) {
        return bcrypt.hashSync(senhaEntrada);
    }
}

export default new Criptografia();