abstract class View <T> {

    private _elemento: JQuery;

    constructor (seletor: string) {
        this._elemento = $(seletor);           
    }

    update(modelo: T): void {
        this._elemento.html(this.template(modelo));
     }

    abstract template(modelo: T): string;
}