class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    update(modelo) {
        this._elemento.html(this.template(modelo));
    }
}
