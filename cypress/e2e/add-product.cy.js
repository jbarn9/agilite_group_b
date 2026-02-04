describe('US-2: Ajouter un produit', () => {
    beforeEach(() => {
      // Mock the GET /collection request
      cy.intercept('GET', '/collection', {
        statusCode: 200,
        body: [] // Return empty array or existing products
      }).as('getProducts');
      
        // Mock the POST /collection request (for adding products)
      cy.intercept('POST', '/collection', {
        statusCode: 201,
        body: { 
            id: 'eaf3', 
            name: 'Nouveau Produit' 
        }
      }).as('addProduct');
  
      cy.visit('http://localhost:3000');
      cy.wait('@getProducts'); // Wait for initial load
    });

    it('devrait afficher le formulaire d\'ajout de produit', () => {
        cy.get('.product-form').should('be.visible');
        cy.get('#product-name').should('exist');
    });

    it('should add a new product', () => {
        cy.get('#product-name').type('Nouveau Produit');
        cy.get('form').submit();
        
        cy.wait('@addProduct'); // Wait for the add request
        cy.get('.notification-success').should('be.visible');
      });

    it('devrait réinitialiser le formulaire après ajout', () => {
        cy.get('#product-name').type('Test');
        cy.get('.btn-secondary').click();
        
        cy.get('#product-name').should('have.value', '');
    });
});