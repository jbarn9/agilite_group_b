import { HTTPClient } from './http-client.js';

export class ProductService {
    #httpClient;
    #endpoint = '/collection';

    constructor(httpClient) {
        this.#httpClient = httpClient;
    }

    async getAll() {
        return this.#httpClient.get(this.#endpoint);
    }

    async getOne(productId) {
        try {
            const response = await this.#httpClient.get(`${this.#endpoint}/${productId}`);
            return response;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }

    async add(product) {
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

    async update(product) {
        try {
            const response = await this.#httpClient.put(`${this.#endpoint}/${product.id}`, product);
            return response;
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }   
    }
}

//essayer de communiquer avec le backend
const httpClient = new HTTPClient();
const productService = new ProductService(httpClient); 

const program = async () => {
    await productService.getAll();
    await productService.getOne('eaf3');
    await productService.add({id: 'fcf9', name: 'Added Product' });
    await productService.deleteProduct('fcf9');

    console.log('Product service operations completed.');
    console.table(await productService.getAll());
};

program()