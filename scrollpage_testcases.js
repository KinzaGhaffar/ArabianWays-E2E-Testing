    /*/Click Post Button Without Writing Answer
    cy.get(':nth-child(24) > #panel1a-header').scrollIntoView({ duration: 3000 }).click()
    cy.wait(1000)


    //Click on Reply Button
    cy.get(':nth-child(24) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiBox-root > .MuiButtonBase-root')
    .click()
    cy.wait(1000)


    //Click on Post Button
    cy.get(':nth-child(24) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .css-0 > .MuiBox-root > :nth-child(2)')
    .click()
    cy.wait(1000)

     //Cancel Post
    cy.get(':nth-child(25) > #panel1a-header').scrollIntoView({ duration: 3000 }).click()
    cy.wait(1000)

    //Click on Cancel Button
    cy.get(':nth-child(25) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .css-0 > .MuiBox-root > :nth-child(1)')
    .click()
    cy.wait(1000)*/


    //-----------------------------Add Question-----------------------------
    cy.contains('Add Question').click()

    cy.get('[placeholder="Add Question"]').type('What Kind of Website Arabian Ways is?')
    cy.wait(2000)
    
    cy.get('button[type="submit"]').click()

    cy.reload()
    cy.wait(4000)
