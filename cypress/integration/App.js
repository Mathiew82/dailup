describe('App tests e2e', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('Agregar usuario')
  })
})
