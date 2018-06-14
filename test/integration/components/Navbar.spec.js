describe('Navbar', () => {
  describe('on desktop', function() {
    beforeEach(() => {
      cy.visit('/');
      cy.viewport('macbook-13');
    });

    it('navigates to /mission', () => {
      cy.get('.navbar-item').contains('Mission').click();
      cy.url().should('include', '/mission');
    });

    it('navigates to /', () => {
      cy.get('.navbar-item').first().click();
      cy.url().should('include', '/');
    });
  });

  describe('on mobile', function() {
    beforeEach(() => {
      cy.visit('/');
      cy.viewport('iphone-6');
    });

    it('should show menu on burger click', () => {
      cy.get('.navbar-burger').click();
      cy.get('.navbar-item').contains('Mission');
    });

    it('navigates to /mission', () => {
      cy.get('.navbar-burger').click();
      cy.get('.navbar-item').contains('Mission').click();
      cy.url().should('include', '/mission');
    });

    it('navigates to /', () => {
      cy.get('.navbar-item').first().click();
      cy.url().should('include', '/');
    });
  });
});
