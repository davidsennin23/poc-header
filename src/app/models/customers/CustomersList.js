import Customer from './Customer';

class CustomersList { 

    constructor() {
        this._customers = [];
    }

    addCustomer(customer) {
        if (!customer) throw new Error("Não é possível adicionar dados nulos ou de tipo diferende de clientes");
        this._customers.push(customer);        
    }

    getCustomersList() {
        return [].concat(this._customers);
    }

}

export default CustomersList;