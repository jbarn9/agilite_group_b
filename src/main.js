import { Router } from './router/router.js';
import { ProductController } from './components/ProductList/ProductList.js';

const productController = new ProductController();

const routes = {
    '/': () => productController.index(),
    '/products': () => productController.index()
};

new Router(routes);