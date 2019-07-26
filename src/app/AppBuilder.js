import Customers from './models/customers/Customers';
class App {

    constructor() {
        this.customers = new Customers();
    }

} 

let app;
export { app };
export function build() {
    app = new App();
}