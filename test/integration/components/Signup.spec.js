describe('Signup form', () => {
  beforeEach(() => {
    cy.visit('/mission');
  });

  it('sends mail address', () => {
    cy.get('form.form input[type=email]').focus().type('my@email.com').blur();
    cy.get('form.form button').contains('Anmelden').click();

    cy.get('form.form button.is-loading');

    // TODO: Assert XHR was sent
  });
});
