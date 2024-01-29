    //Click on Market Page Button
    cy.contains('Market').click({force:true})

    //CLick on Spot Market Tab
    cy.contains('Spot Market').click()
    cy.wait(500)

    //Click on All Detail Buttons
    cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click()
    cy.wait(500)
    cy.get(':nth-child(2) > :nth-child(6) > .MuiButtonBase-root').click()
    cy.wait(500)
    cy.get(':nth-child(3) > :nth-child(6) > .MuiButtonBase-root').click()
    cy.wait(500)
    cy.get(':nth-child(4) > :nth-child(6) > .MuiButtonBase-root').click()
    cy.wait(500)
    cy.get(':nth-child(5) > :nth-child(6) > .MuiButtonBase-root').click()
    cy.wait(500)

    //CLick on All Crypto Tab
    cy.contains('All Crypto').click()
    cy.wait(500)

    //scroll to bottom
    cy.scrollTo('bottom', { duration: 2000 })
    cy.get('[placeholder="Email"]').type('kinzaghaffar.qa@gmail.com')
    cy.contains('Submit').click()
    cy.wait(500)
    cy.get('[placeholder="Email"]').clear()

    //scroll to top
    cy.scrollTo('top', { duration: 2000 })

    //Click to Change Theme
    cy.get('.MuiSvgIcon-root[data-testid="Brightness7Icon"]').click()
    cy.wait(1000)
