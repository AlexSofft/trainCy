describe('open', () => {
  it('login', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get('ul > li > a', { timeout: 1000 }).each(($el, index, $list) => {
      if ($el.text() === 'Checkboxes') {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click()
      }
    })


  })
})
