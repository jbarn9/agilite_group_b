import { HTTPClient } from '../../services/http-client.js';
import { ProductService } from '../../services/product-service.js';
/**
 * Contrôleur gérant les opérations CRUD des produits
 */
export class ProductController {
    /**
     * Initialise le contrôleur avec ses dépendances
     */
    constructor() {
        /** @type {HTTPClient} */
        this.httpClient = new HTTPClient();
        /** @type {ProductService} */
        this.productService = new ProductService(this.httpClient);
    }

    /**
     * Récupère et affiche tous les produits
     * @returns {Promise<void>}
     */
    async index() {
        const products = await this.productService.getAll();   
        this.render(products);
    }

    /**
     * Génère le tableau HTML des produits
     * @param {Array<{id: string, name: string}>} items - Liste des produits
     * @returns {void}
     */
    render(items) {
         // rowData doit être défini AVANT gridOptions
        const rowData = items.map(item => ({
            id: item.id,
            name: item.name,
            selected: false
        }));

        const defaultColDef = {
            editable: true,
            flex: 1,
            minWidth: 100,
            filter: true
        };

        const columnDefs = [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'selected', headerName: 'Sélectionner' }
        ];

        const gridOptions = {
            theme: agGrid.themeQuartz,
            columnDefs,
            rowData,
            defaultColDef
        };

        agGrid.createGrid(document.querySelector('#myGrid'), gridOptions);
    }
}