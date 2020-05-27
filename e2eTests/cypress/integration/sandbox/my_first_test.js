describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('visits our website', () => {
    // Cherry visits our website
    cy.visit('http://localhost:3000')

    // She is greeted with a welcome text
    cy.get('p').should('contain.text', 'Welcome to Express')

    // She enters her name & clicks send
    cy.get('#name').type('Cherry');
    cy.get('#send').click()

    // She is greeted with her name
    cy.get('h1').should('contain.text', 'Cherry')
    cy.get('#magic').should('not.be.visible')

    // She clicks on the "magic" button
    cy.get('button').click()

    // Magic happens
    cy.get('#magic').should('be.visible')
  })
})
