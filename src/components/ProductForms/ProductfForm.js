import { updateProduct, getProductById } from '../../services/productService.js';

export const renderEditForm = async (productId) => {
    const product = await getProductById(productId);
    const formContainer = document.querySelector('#form-container');

    formContainer.innerHTML = `
        <form id="edit-product-form">
            <input type="text" id="edit-name" value="${product.name}" required>
            <input type="number" id="edit-price" value="${product.price}" required>
            <input type="number" id="edit-stock" value="${product.stock}" required>
            <button type="submit">Enregistrer les modifications</button>
        </form>
    `;

    document.querySelector('#edit-product-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const updatedData = {
            name: document.querySelector('#edit-name').value,
            price: parseFloat(document.querySelector('#edit-price').value),
            stock: parseInt(document.querySelector('#edit-stock').value)
        };
        await updateProduct(productId, updatedData);
        // Ici, ajouter le déclenchement du Toaster et fermer la modale
    });
};