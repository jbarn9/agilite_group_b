export class Router {
    constructor(routes) {
        this.routes = routes;
        
        window.addEventListener('hashchange', () => this.navigate());
        window.addEventListener('DOMContentLoaded', () => this.navigate());
    }
    
    navigate() {
        const path = window.location.hash.slice(1) || '/';
        const route = this.routes[path];
        
        if (route) {
            route();
        } else {
            document.getElementById('app').innerHTML = '<h1>404</h1>';
        }
    }
}