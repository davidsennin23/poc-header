import CustomersList from './CustomersList';
import Customer from './Customer';
import data from '../../../data/users';

class Customers {

    loadCustomersList() {
        const customers = new CustomersList();
        data.forEach(customer => 
            customers.addCustomer(new Customer(
                // {...customer}
                customer.id,
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

    getCustomerByID(customerID) {
        const list = this.loadCustomersList();
        console.log(list.getCustomersList())
        return list
            .getCustomersList()
            .find(customer => customerID === customer.getID());
    }

}

export default Customers;