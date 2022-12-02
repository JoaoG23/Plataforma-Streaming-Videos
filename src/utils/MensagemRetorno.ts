export class MensagemRetorno {
    public ok?:boolean = true;
    public msg?:string;
    constructor(ok:boolean, msg:string ){
        this.ok = ok;
        this.msg = msg;
    }
}