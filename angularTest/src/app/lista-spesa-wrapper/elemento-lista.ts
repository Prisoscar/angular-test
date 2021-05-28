export class ElementoLista{
    public id: number;
    public idLista: number;
    public nome: string;
    public prezzo: number;
    public quantita: number;

    constructor(idLista: number, nome:string, prezzo:number, quantita:number){
        this.idLista = idLista;
        this.id = Math.random() * 100000000000000000;
        this.nome = nome;
        this.quantita = quantita;
        this.prezzo = prezzo;
    } 
}
