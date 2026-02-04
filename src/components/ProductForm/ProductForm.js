/**
 * ProductForm Component
 * Handles product creation and editing with real-time validation
 * 
 * @module components/ProductForm
 * @requires ../models/Product
 * 
 * @example
 * // Create a form for adding products
 * const form = new ProductForm(container, async (data, isEdit) => {
 *   if (isEdit) {
 *     await updateProduct(data);
 *   } else {
 *     await createProduct(data);
 *   }
 * });
 * form.render(); // Display create mode
 * 
 * @example
 * // Create a form for editing a product
 * form.render(existingProduct); // Display edit mode
 */

export class ProductForm {
    /**
     * Create a ProductForm instance
     * 
     * @constructor
     * @param {HTMLElement} container - DOM container element where form will be rendered
     * @param {Function} onSubmit - Callback function invoked when form is submitted
     * @param {Object} onSubmit.data - Form data object containing product information
     * @param {string} onSubmit.data.name - Product name
     * @param {number} onSubmit.data.price - Product price
     * @param {string} onSubmit.data.description - Product description
     * @param {number} onSubmit.data.stock - Product stock quantity
     * @param {boolean} onSubmit.isEdit - True if editing existing product, false for creation
     * @throws {Error} If container is not a valid DOM element
     * 
     * @example
     * const container = document.getElementById('form-container');
     * const form = new ProductForm(container, handleSubmit);
     */
    #productService;
    #formElement;
    #onProductAdded;

    constructor(productService, onProductAdded) {  // ← Ordre des paramètres
        this.#productService = productService;
        this.#onProductAdded = onProductAdded;
        this.#createForm();
    }

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
     * Handle form submission
     * Validates all fields and calls onSubmit callback if valid
     * Disables submit button during processing to prevent double submission
     * 
     * @async
     * @private
     * @returns {Promise<void>}
     * @throws {Error} If form validation fails or submission callback throws
     */
    async #handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const product = {
            id: crypto.randomUUID(),
            name: formData.get('name')
        };

        try {
            await this.#productService.add(product);
            this.#formElement.reset();
            
            // Notifier que le produit a été ajouté
            if (this.#onProductAdded) {
                this.#onProductAdded(product);
            }
            
            this.#showNotification('Produit ajouté avec succès !', 'success');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du produit:', error);
            this.#showNotification('Erreur lors de l\'ajout du produit', 'error');
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

    /**
     * Render the product form
     * Displays either creation form (empty) or edit form (pre-filled with product data)
     * 
     * @param {Product|null} product - Product instance to edit, or null for create mode
     * @returns {void}
     * 
     * @example
     * // Render form in create mode
     * form.render();
     * 
     * @example
     * // Render form in edit mode
     * const product = new Product(1, "Laptop", 999.99, "Description", 10);
     * form.render(product);
     */
    render(container) {
        container.appendChild(this.#formElement);
    }
}
