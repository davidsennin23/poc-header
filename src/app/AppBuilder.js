import CustomersList from './models/customers/CustomersList';
import data from '../data/users';
import Customer from './models/customers/Customer';

class App {

    constructor() {
    }

    loadCustomersList() {
        const customers = new CustomersList();
        data.forEach(customer => 
            customers.addCustomer(new Customer(
                // {...customer}
                customer.nome,
                customer.sobrenome,
                customer.dataNasc,
                customer.telefone,
                customer.email,
                customer.clienteDesde,
                customer.urlFoto
            ))
        );
        return customers;
    }

} 

let app;
export { app };
export function build() {
    app = new App();
}