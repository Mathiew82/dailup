describe('App tests e2e', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Agregar usuario')
  })
})
