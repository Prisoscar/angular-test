export class ElementoLista{
    public nome: string;
    public prezzo: number;
    public quantita: number;

    constructor(nome:string, prezzo:number, quantita:number){
        this.nome = nome;
        this.quantita = quantita;
        this.prezzo = prezzo;
    } 
}
