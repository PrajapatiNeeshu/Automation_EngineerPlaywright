it('should display career page', () => {    
    cy.visit('/career');
    cy.contains('h1', 'Join Our Team').should('be.visible');
    cy.contains('We are looking for talented individuals to join us.').should('be.visible');
});