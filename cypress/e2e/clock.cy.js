describe('clock', () => {
  it('freezes the date on 1982/04/15', () => {
    const dateInThePast = new Date(Date.UTC(1982, 3, 15)) // month is 0-indexed

    cy.clock(dateInThePast)

    cy.visit('/index.html')

    cy.contains('p', 'Current date: 1982-04-15')
      .should('be.visible')
  })
})
