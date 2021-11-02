describe('open', () => {
  it('login', () => {
    cy.visit('http://automationpractice.com/index.php')
    //button
    cy.contains('Women').click();

    //list items
    cy.get('.product_img_link').as('items')
    //list prices
    cy.get('.right-block .content_price [itemprop="price"]').as('prices')

    //PRISE
    cy.get('@prices')
      .first()
      .as('price')
    let text;
    // cy.get('@price').invoke('text').as('text')
    //  cy.log(this.text)
    cy.get('@price')
      .then($pr => {
        text = $pr.text().trim().slice(1)
        console.log(`PRICE:  ${text}`)
      })

    cy.get('@items')
      .first()
      .click()

    cy.get('#group_1').select('2')
    cy.get('[name ="Blue"]').click()

    //add to cart
    cy.intercept('POST', "/index.php?rand=*").as('addToCart')
    cy.contains('Add to cart').click()
    cy.wait('@addToCart')
    //check message
    cy.get('.clearfix h2').first().should(($div) => {
      expect($div.text().trim()).equal("Product successfully added to your shopping cart")});

      cy.get('.clearfix [title="Proceed to checkout"]').click()




      // .find('.quick-view span')
      // .first()
      // .invoke('show')
    })
  })


// cy.get('ul > li > a', { timeout: 1000 }).each(($el, index, $list) => {
    //   if ($el.text() === 'Checkboxes') {
    //     // wrap this element sothat we can  use cypress commands on it
    //     cy.wrap($el).click()
    //   }
    // })