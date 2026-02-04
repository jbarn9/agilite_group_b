import { ProductForm } from './components/ProductForm/ProductForm.js';
import { ProductService } from './services/product-service.js';
import { HTTPClient } from './services/http-client.js';

class App {
    #productService;
    #productForm;

    constructor() {
        this.#productService = new ProductService(new HTTPClient());
        this.init();
    }

    init() {
        // Créer le formulaire avec callback
        this.#productForm = new ProductForm(this.#productService, (product) => {
            console.log('Produit ajouté:', product);
            this.#refreshProductList();
        });

        // Rendre le formulaire
        const container = document.getElementById('products-container');
        this.#productForm.render(container);

        // Charger la liste initiale
        this.#refreshProductList();
    }

    async #refreshProductList() {
        try {
            const products = await this.#productService.getAll();
            console.table(products);
        } catch (error) {
            console.error('Erreur lors du chargement des produits:', error);
        }
    }
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', () => {
    new App();
});