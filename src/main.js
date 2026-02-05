// import { ProductForm } from './components/ProductForm/ProductForm.js';
import { ProductService } from './services/product-service.js';
import { HTTPClient } from './services/http-client.js';
import { ProductController } from './components/ProductList/ProductList.js'
/**
 * Classe principale de l'application
 */
class App {
    /** @type {ProductService} */
    #productService;
    
    /** @type {ProductForm} */
    #productForm;

    /** @type {ProductList} */
    #productList;

    #container;
    /**
     * Initialise l'application avec ses dépendances
     */
    constructor() {
        this.#productService = new ProductService(new HTTPClient());
        this.init();
    }

    
    init() {
        this.#productList = new ProductController();
        const products = this.#productList.index();
        this.#container = document.getElementById('product-container');
        this.#productList.render(products);       
    }
    /**
     * Configure le formulaire et charge les produits
     * @returns {void}
     */
    displayForm(){
         // Je crée le formulaire avec un callback pour rafraîchir la liste après ajout
        this.#productForm = new ProductForm(this.#productService, (product) => {
            console.log('Produit ajouté:', product);
            this.#refreshProductList();
        });

        // Je rends le formulaire dans le conteneur
        this.#container = document.getElementById('modal-container');
        // this.#productForm.render(container);

        // // Je charge la liste initiale des produits
        // this.#refreshProductList();
    }

    /**
     * Récupère et affiche la liste des produits
     * @returns {Promise<void>}
     */
    async #refreshProductList() {
        try {
            const products = await this.#productService.getAll();
            console.table(products);
        } catch (error) {
            console.error('Erreur lors du chargement des produits:', error);
        }
    }
}

// Je démarre l'application au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    new App();
});