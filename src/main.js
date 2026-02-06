// import { ProductForm } from './components/ProductForm/ProductForm.js';
import { ProductService } from './services/product-service.js';
import { HTTPClient } from './services/http-client.js';
import { ProductController } from './components/ProductList/ProductList.js';
import { ProductForm } from './components/ProductForm/ProductForm.js';

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
    #formContainer

    constructor() {
        this.#productService = new ProductService(new HTTPClient());
        this.init();
    }
    
    async init() {       
        this.#productList = new ProductController();
        await this.#productList.index();
        // Créer le formulaire (caché par défaut)
        this.#productForm = new ProductForm(this.#productService);
        this.#hideAddForm()        
        // Gérer les boutons d'action
        this.#setupActionButtons();
    }


    #setupActionButtons() {
        // Bouton Ajouter
        const btnAdd = document.getElementById('btn-add');
        btnAdd.addEventListener('click', () => {              
            // Rendre le formulaire
            this.#formContainer = document.getElementById('products-container');
            this.#productForm.render(this.#formContainer);    
            this.#toggleAddForm();   
        });

        // Bouton Modifier
        const btnEdit = document.getElementById('btn-edit');
        btnEdit.addEventListener('click', () => {
            this.#showNotification('Fonctionnalité "Modifier" à venir', 'info');
        });

        // Bouton Supprimer
        const btnDelete = document.getElementById('btn-delete');
        btnDelete.addEventListener('click', () => {
            this.#showNotification('Fonctionnalité "Supprimer" à venir', 'info');
        });
    }

    #toggleAddForm() {        
        const formElement = document.querySelector('.product-form');
        if (formElement) {
            formElement.classList.toggle('visible');
        }
    }

    #hideAddForm() {
        const formElement = document.querySelector('.product-form');
        if (formElement) {
            formElement.classList.remove('visible');
        }
    }

    #showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const container = document.getElementById('notification-container');
        container.appendChild(notification);
        
        setTimeout(() => notification.remove(), 3000);
    }

    async #refreshProductList() {
        try {            
            this.#productList = new ProductController();
            this.#productList.index();
            // Ici vous pourrez afficher la liste des produits plus tard
        } catch (error) {
            console.error('Erreur lors du chargement des produits:', error);
        }
    }
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', () => {
    new App();
});