
export class Limpador {
    static async limparTudo(Model:any): Promise<object> {
        await Model.truncate({ cascade: true, restartIdentity: true });
        return { msg:"tabela limpa com sucesso" };
    }
}

