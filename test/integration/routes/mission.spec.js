describe('Mission page', () => {
  beforeEach(() => {
    cy.visit('/mission');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Mission');
  });

  it('shows signup form', () => {
    cy.get('form.form button.button').contains('Halte mich am Laufenden');
  });
});
