import Customers from './models/customers/Customers';
import ThemeLoader from './theme/ThemeLoader';
class App {

    constructor() {
        this.customers = new Customers();
        this.themeLoader = new ThemeLoader(); 
    }

    getTheme() {
        return this.themeLoader.loadTheme();
    }

} 

let app;
export { app };
export function build() {
    app = new App();
}