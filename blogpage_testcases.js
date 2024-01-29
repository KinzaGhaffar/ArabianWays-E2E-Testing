    cy.contains('Blog').click({force:true})
    cy.wait(3000)

    //Open a Blog
    cy.get('.MuiContainer-maxWidthLg > :nth-child(1)').click()
    cy.wait(3000)

    cy.go(-1)

    //Open a Blog
    cy.get('.MuiContainer-maxWidthLg > :nth-child(12)').scrollIntoView({ duration: 3000 }).click()
    cy.wait(3000)

    cy.go(-1)

    
    //Scroll to Enter Email to Subscribe
    cy.scrollTo('bottom', { duration: 4000 })
    cy.get('[placeholder="Email"]').type('kinzaghaffar.qa@gmail.com')
    cy.contains('Submit').click()
    cy.wait(500)

    //scroll to top
    cy.scrollTo('top', { duration: 4000 })
