export class ProductForm {

    #productService;
    #formElement;
    #onProductAdded;

    /**
     * Creates a new ProductForm instance
     * @param {Object} productService - Service for managing product operations
     * @param {Function} onProductAdded - Callback function triggered when a product is successfully added
     */
    constructor(productService, onProductAdded) {
        this.#productService = productService;
        this.#onProductAdded = onProductAdded;
        this.#createForm();
    }

    /**
     * Creates and configures the form element with its HTML structure and event listeners
     * @private
     */
    #createForm() {
        this.#formElement = document.createElement('form');
        this.#formElement.className = 'product-form';
        this.#formElement.innerHTML = `
            <h2>Ajouter un produit</h2>
            <div class="form-group">
                <label for="product-name">Nom du produit</label>
                <input type="text" id="product-name" name="name" required>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Ajouter</button>
                <button type="reset" class="btn-secondary">Réinitialiser</button>
            </div>
        `;

        this.#formElement.addEventListener('submit', (e) => this.#handleSubmit(e));
    }

    /**
     * Handles form submission: prevents default behavior, creates a product object,
     * saves it via the product service, and displays a notification
     * @private
     * @param {Event} event - The form submit event
     */
    async #handleSubmit(event) {
        event.preventDefault();
        
        // Extract form data
        const formData = new FormData(event.target);
        const product = {
            id: crypto.randomUUID(),
            name: formData.get('name')
        };

        try {
            // Add product through the service
            await this.#productService.add(product);
            this.#formElement.reset();
            
            // Notify that the product has been added
            if (this.#onProductAdded) {
                this.#onProductAdded(product);
            }
            
            this.#showNotification('Produit ajouté avec succès !', 'success');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du produit:', error);
            this.#showNotification('Erreur lors de l\'ajout du produit', 'error');
        }
    }

    /**
     * Displays a temporary notification message
     * @private
     * @param {string} message - The message to display
     * @param {string} type - The notification type ('success' or 'error')
     */
    #showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const container = document.getElementById('notification-container');
        container.appendChild(notification);
        
        // Auto-remove notification after 3 seconds
        setTimeout(() => notification.remove(), 3000);
    }

    /**
     * Renders the form by appending it to the specified container element
     * @param {HTMLElement} container - The DOM element where the form will be rendered
     */
    render(container) {
        container.appendChild(this.#formElement);
    }
}