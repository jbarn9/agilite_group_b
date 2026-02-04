import { ProductForm } from './components/ProductForm/ProductForm.js';
import { ProductService } from './services/product-service.js';
import { HTTPClient } from './services/http-client.js';

class App {
    #productService;
    #productForm;
    #formContainer;

    constructor() {
        this.#productService = new ProductService(new HTTPClient());
        this.init();
    }

    init() {
        // Créer le formulaire (caché par défaut)
        this.#productForm = new ProductForm(this.#productService, (product) => {
            console.log('Produit ajouté:', product);
            this.#refreshProductList();
            this.#hideAddForm(); // Cacher le formulaire après ajout
        });

        // Rendre le formulaire
        this.#formContainer = document.getElementById('products-container');
        this.#productForm.render(this.#formContainer);

        // Gérer les boutons d'action
        this.#setupActionButtons();

        // Charger la liste initiale
        this.#refreshProductList();
    }

    #setupActionButtons() {
        // Bouton Ajouter
        const btnAdd = document.getElementById('btn-add');
        btnAdd.addEventListener('click', () => {
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
            const products = await this.#productService.getAll();
            console.table(products);
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