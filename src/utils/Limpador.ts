
export class Limpador {
    
    static async limparTodaTabela(Model:any): Promise<object> {
        await Model.truncate({ cascade: true, restartIdentity: true });
        return { msg:"tabela limpa com sucesso" };
    }
}

