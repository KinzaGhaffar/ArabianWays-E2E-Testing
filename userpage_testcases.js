    //Click on User Tab
    cy.contains('User').click()
    cy.wait(500)

    //Click on Profile Button
    cy.contains('Profile').click()

    //Type User Name
    cy.get('input[placeholder="Name"]').type('Kinza Ghaffar')
    cy.wait(500)


    //-----------------------------Upload User Profile Image-----------------------------
    //Image Path
    const userimagePath = "userprofileimage.png"
    cy.get(':nth-child(4) > .MuiBox-root > .MuiTypography-root').click()

    // Locate the file input element and attach the image file
    cy.get('input[type="file"]').attachFile(userimagePath)
    cy.wait(2000)


    //-----------------------------Upload Document Image-----------------------------
    //Image Path
    const docimagePath = "userdocumentimage.jpg"
    cy.get('.css-12s5qmc > :nth-child(6)').click()

    // Locate the file input element and attach the image file
    cy.get('input[type="file"]').eq(1).attachFile(docimagePath)
    cy.wait(2000)


    //Clcik on Submit Button
    cy.contains('Submit').click()
    cy.wait(500)
    
  })
})
