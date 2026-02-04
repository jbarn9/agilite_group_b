export class ProductForm {
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

    render(container) {
        container.appendChild(this.#formElement);
    }
}