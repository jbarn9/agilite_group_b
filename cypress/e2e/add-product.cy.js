describe('US-2: Ajouter un produit', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('devrait afficher le formulaire d\'ajout de produit', () => {
        cy.get('.product-form').should('be.visible');
        cy.get('#product-name').should('exist');
    });

    it('devrait ajouter un nouveau produit avec succès', () => {
        cy.get('#product-name').type('Nouveau Produit');
        
        cy.get('.btn-primary').click();
        
        cy.get('.notification-success')
            .should('be.visible')
            .and('contain', 'Produit ajouté avec succès');
    });

    it('devrait réinitialiser le formulaire après ajout', () => {
        cy.get('#product-name').type('Test');
        cy.get('.btn-secondary').click();
        
        cy.get('#product-name').should('have.value', '');
    });
});