import { HTTPClient } from '../../services/http-client.js';
import { ProductService } from '../../services/product-service.js';

export class ProductController {
    constructor() {
        this.httpClient = new HTTPClient();
        this.productService = new ProductService(this.httpClient);
    }

    async index() {
        const products = await this.productService.getAllProducts();

        products.forEach(item => {
            console.log(item.id);
            console.log(item.name);
        });
        
        
        this.render(products)
    }

    render(items) {
       document.getElementById('products-container').innerHTML =`
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map(product => `
                        <tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}