export class ProductService {
    #httpClient;
    #endpoint = '/collection';

    constructor(httpClient) {
        this.#httpClient = httpClient;
    }

    async getAllProducts() {
        return this.#httpClient.get(this.#endpoint);
    }

    async getProductById(productId) {
        try {
            const response = await this.#httpClient.get(`${this.#endpoint}/${productId}`);
            return response;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }

    async createProduct(product) {
        return this.#httpClient.post(this.#endpoint, product);
    }

    async deleteProduct(productId) {
        try {
            const response = await this.#httpClient.delete(`${this.#endpoint}/${productId}`);
            return response;
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    }

    async updateProduct(product) {
        try {
            const response = await this.#httpClient.put(`${this.#endpoint}/${product.id}`, product);
            return response;
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }   
    }
}

