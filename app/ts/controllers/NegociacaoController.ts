class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    // TESTE 123
    adiciona(event: Event){

        event.preventDefault();
        
        const negociacao = new Negociacao (
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );    

        this._negociacoes.adicionar(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}


// class NegociacaoController {
//     private _inputData: HTMLInputElement;
//     private _inputQuantidade: HTMLInputElement;
//     private _inputValor: HTMLInputElement;
//     private _negociacoes = new Negociacoes();
//     private _negociacoesView = new NegociacoesView('#negociacoesView');
//     private _mensagemView = new MensagemView('#mensagemView');

//     constructor() {
//         this._inputData = <HTMLInputElement>document.querySelector('#data');
//         this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
//         this._inputValor = <HTMLInputElement>document.querySelector('#valor');
//         this._negociacoesView.update(this._negociacoes);
//     }

//     adiciona(event: Event){

//         event.preventDefault();
        
//         const negociacao = new Negociacao (
//             new Date(this._inputData.value.replace(/-/g, ',')),
//             parseInt(this._inputQuantidade.value),
//             parseFloat(this._inputValor.value)
//         );    

//         this._negociacoes.adicionar(negociacao);
//         this._negociacoesView.update(this._negociacoes);
//         this._mensagemView.update('Negociação adicionada com sucesso!');
//     }
// }