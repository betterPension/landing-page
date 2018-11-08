describe('Mission page', () => {
  beforeEach(() => {
    cy.visit('/mission');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Wir stellten uns eine einfache Frage:');
  });

  it('shows signup form', () => {
    cy.get('form.form button.button').contains('Anmelden');
  });
});
