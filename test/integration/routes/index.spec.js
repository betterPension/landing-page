describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Sparen für die Pension muss');
  });

  it('shows signup form on selection', () => {
    cy.get('.choice button.button').first().contains('Ja').click();
    cy.get('form.form button.button').contains('Halte mich am Laufenden');
  });
});
