    //Click on Feed Tab
    cy.contains('Feed').click({force:true})
    cy.wait(3000)


    //Open a Question
    cy.get(':nth-child(3) > #panel1a-header').click()
    cy.wait(1000)

    //Click on Reply Button
    cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiBox-root > .MuiButtonBase-root')
    .click()
    cy.wait(1000)

    //Write Answer
    cy.get('#replayField0').type("Arabian Ways Website which contains different tabs like Market, About Us, Deposit, Blogs, Feed, Trade, Users, Sign up, Sign in, NFT, and many more. Automation testing is being performed on this website using Cypress (Automation Tool) in JavaScript Programming Language.")
    cy.wait(1000)

    //Click on Post Button
    cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .css-0 > .MuiBox-root > :nth-child(2)')
    .click()
    cy.wait(3000)

    //Page Refresh
    cy.reload()
    cy.wait(4000)

    //Open a Question to Verify that Answer has been added
    cy.get(':nth-child(3) > #panel1a-header').click()
    cy.wait(1000)


    //Scroll to Another Question
    cy.get(':nth-child(11) > #panel1a-header').scrollIntoView({ duration: 3000 }).click()
    cy.wait(1000)

    //Click on Reply Button
    cy.get(':nth-child(11) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .MuiBox-root > .MuiButtonBase-root')
    .click()

    //Write Answer
    cy.get('#replayField0').type("Adding a programming language to your skill set can demonstrate your abilities. It can also complement your current knowledge. If you work in a people-focused career, learning to code can strengthen your reasoning and logic skills. And if you're in an analytical field, coding can sharpen your ability to work with data.")
    cy.wait(1000)

    //Click on Post Button
    cy.get(':nth-child(3) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .css-0 > .MuiBox-root > :nth-child(2)')
    .click()
    cy.wait(1000)

    //scroll to top
    cy.scrollTo('top', { duration: 4000 })
