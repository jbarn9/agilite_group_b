import { HTTPClient } from '../../services/http-client.js';
import { ProductService } from '../../services/product-service.js';

/**
 * Contrôleur gérant les opérations CRUD des produits
 */
export class ProductController {
    /**
     * Initialise le contrôleur avec ses dépendances
     */
    constructor() {
        /** @type {HTTPClient} */
        this.httpClient = new HTTPClient();
        /** @type {ProductService} */
        this.productService = new ProductService(this.httpClient);
    }

    /**
     * Récupère et affiche tous les produits
     * @returns {Promise<void>}
     */
    async index() {
        const products = await this.productService.getAll();   
        this.render(products);
    }

    /**
     * Génère le tableau HTML des produits
     * @param {Array<{id: string, name: string}>} items - Liste des produits
     * @returns {void}
     */
    render(items) {
        document.getElementById('products-container').innerHTML = `
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