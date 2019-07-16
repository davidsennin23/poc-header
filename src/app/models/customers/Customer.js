import utils from '../utils/Utils';

class Customer {

    constructor(id, nome, sobrenome, dataNasc, telefone, email, clienteDesde, urlFoto) {
        this._id = id;
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataNasc = dataNasc;
        this._telefone = telefone;
        this._email = email;
        this._clienteDesde = clienteDesde;
        this._urlFoto = urlFoto;
    }

    getId = () => this._id;
    setId = (id) => this._id = id;

    getNome = () => this._nome;
    setNome = (nome) => this._nome = nome;

    getSobrenome = () => this._sobrenome;
    setSobrenome = (sobrenome) => this._sobrenome = sobrenome;

    getDataNasc = () => this._dataNasc;
    setDataNasc = (dataNasc) => this._dataNasc = dataNasc;

    getTelefone = () => this._telefone;
    setTelefone = (telefone) => this._telefone = telefone;

    getEmail = () => this._email;
    setEmail = (email) => this._email = email;

    getClienteDesde = () => this._clienteDesde;
    setClienteDesde = (clienteDesde) => this._clienteDesde = clienteDesde;

    getUrlFoto = () => this._urlFoto;
    setUrlFoto = (urlFoto) => this._urlFoto = urlFoto;

    desdeFormatted = () => utils.desdeTextFormat(this._clienteDesde)

}

export default Customer;