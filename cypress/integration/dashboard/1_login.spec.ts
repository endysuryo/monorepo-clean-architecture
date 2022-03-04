context('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('DASHBOARD_STAGING_URL'))
  })

  it('Login', () => {
    cy.get('input[type=email]', { timeout: 10000 }).type(Cypress.env('EMAIL'))
    cy.get('input[type=password]', { timeout: 10000 }).type(
      Cypress.env('EMAIL_PASSWORD'),
    )
    cy.get('form', { timeout: 10000 }).submit()
    cy.wait(20000)
    cy.url().should('include', '/dashboard')
  })
})
