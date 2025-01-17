// pokedex.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains(/ivysaur/i)
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Individual pokemon page can be opened', () => {
    cy.contains(/pikachu/i).click()
    cy.contains(/lightning rod/i)
  })
})
