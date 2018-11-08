describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Die unabhängige Pensionsplattform für Arbeitgeber');
  });

  it('shows signup form', () => {
    cy.get('form.form button.button').contains('Anmelden');
  });
});
