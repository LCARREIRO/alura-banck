class NegociacoesView extends View {
    template(modelo) {
        return `<table class="table table-hover table-bordered">
         <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
           </tr>
        </thead>
        <tbody>
            ${modelo.paraArray().map(negociacao => ` <tr>
                   <td>${negociacao.data.getDay()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                   <td>${negociacao.quantiade}</td>
                   <td>${negociacao.valor}</td>
                   <td>${negociacao.volume}</td>
                
                </tr>`).join('')}
        </tbody>

        <tfoot>
        </tfoot>
        </table>`;
    }
}
