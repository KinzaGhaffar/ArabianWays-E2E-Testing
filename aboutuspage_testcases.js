    cy.contains('About Us').click()
    cy.wait(500)
    

    //Enter Email to Subscribe
    cy.get('[placeholder="Email"]').type('kinzaghaffar.qa@gmail.com')
    cy.contains('Submit').click()
    cy.wait(500)
    cy.get('[placeholder="Email"]').clear()


    //Scroll to Top
    cy.scrollTo('top', { duration: 500 })
