describe('Arabian Ways Website', () => {
  //----------------------------------------------------------Signup Page----------------------------------------------------------
    it('Sign Up Form', () => {
    //Direct Click on Signup Button
    cy.visit('https://arbianways-v1.up.railway.app')
    
    //Maximize Window
    cy.viewport(1900,1000)
    
    //Click on Register Tab
    cy.contains('Register').click()
 
    //click on Signup
    cy.get('button[type="submit"]').click()
    cy.wait(3000)


    //Signup Form
    //Enter User Name
    cy.get('[placeholder="Full Name"]').type('kinzaghaffar.qa@gmail.com')

    //Enter Email Address
    cy.get('[placeholder="Email"]').type('kinzaghaffar.qa@gmail.com')

    //Select Country
    cy.get('.PhoneInputCountrySelect').select("PK")
    //Enter Phone Number
    cy.get('[placeholder="Enter phone number"]').type('3231567384')

    //Enter Password
    cy.get('[placeholder="Password"]').type('BtS123$%^')

    //Enter Confirm Password
    cy.get('[placeholder="Confirm Password"]').type('BtS123$%^')

    //Show Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Hide Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Select Phone Number
    cy.get('input[value="number"]').check()
    cy.wait(500)

    //Select Email
    cy.get('input[value="email"]').check()
    cy.wait(500)

    //Checkbox
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[8]/span[1]/input[1]').click()

    //Checkbox
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[9]/span[1]/input[1]').click()
    
    //click signup
    cy.get('button[type="submit"]').click()
    cy.wait(2000)

  })
  

  //----------------------------------------------------------Signin Page----------------------------------------------------------
  it('Sign In Form', () => {
    //Direct Click on Signin Button
    cy.visit('https://arbianways-v1.up.railway.app')
    
    cy.viewport(1900,1000)
    cy.contains('Login').click()

    //Click Login Button
    cy.get('#pressLogin').click()
    cy.wait(2000)


    //Correct Email and Wrong Password
    //Enter User Name or Email Address
    cy.get('[placeholder="Username/Email"]').type('kinzaghaffar.qa@gmail.com')

    //Enter Password
    cy.get('[placeholder="Password"]').type('hvewh64672!@#')

    //Show Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Click Login Button
    cy.get('#pressLogin').click()
    cy.wait(3000)

    cy.get('[placeholder="Username/Email"]').clear()
    cy.get('[placeholder="Password"]').clear()    



    //Wrong Email and Correct Password
    //Enter User Name or Email Address
    cy.get('[placeholder="Username/Email"]').type('kinzaghaffar1040@gmail.com')

    //Enter Password
    cy.get('[placeholder="Password"]').type('BtS123$%^')

    //Show Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Click Login Button
    cy.get('#pressLogin').click()
    cy.wait(2000)

    cy.get('[placeholder="Username/Email"]').clear()
    cy.get('[placeholder="Password"]').clear()  



    //Wrong Email and Wrong Password
    //Enter User Name or Email Address
    cy.get('[placeholder="Username/Email"]').type('kinzaghaffar1040@gmail.com')

    //Enter Password
    cy.get('[placeholder="Password"]').type('hvewh64672!@#')

    //Show Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Click Login Button
    cy.get('#pressLogin').click()
    cy.wait(2000)

    cy.get('[placeholder="Username/Email"]').clear()
    cy.get('[placeholder="Password"]').clear()  



    //Correct Email and Correct Password
    //Enter User Name or Email Address
    cy.get('[placeholder="Username/Email"]').type('kinzaghaffar.qa@gmail.com')

    //Enter Password
    cy.get('[placeholder="Password"]').type('BtS123$%^')

    //Show Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Hide Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Click Login Button
    cy.get('#pressLogin').click()
    cy.wait(2000)
  })


  it('Website Pages',()=>{
    cy.visit('https://arbianways-v1.up.railway.app')
    
    cy.viewport(1900,1000)
    cy.contains('Login').click({force:true})

    //Enter User Name or Email Address
    cy.get('[placeholder="Username/Email"]').type('kinzaghaffar.qa@gmail.com')

    //Enter Password
    cy.get('[placeholder="Password"]').type('BtS123$%^')

    //Show Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Hide Password
    cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/*[name()="svg"][1]').click()
    cy.wait(1000)

    //Click Login Button
    cy.get('#pressLogin').click()
    cy.wait(2000)


    //----------------------------------------------------------Market Page----------------------------------------------------------
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


    //----------------------------------------------------------About Us Page----------------------------------------------------------
    cy.contains('About Us').click()
    cy.wait(500)
    

    //Enter Email to Subscribe
    cy.get('[placeholder="Email"]').type('kinzaghaffar.qa@gmail.com')
    cy.contains('Submit').click()
    cy.wait(500)
    cy.get('[placeholder="Email"]').clear()


    //Scroll to Top
    cy.scrollTo('top', { duration: 500 })


    //----------------------------------------------------------Blog Page----------------------------------------------------------
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


    //----------------------------------------------------------Feed Page----------------------------------------------------------
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


    //-----------------------------Scroll to Another Question-----------------------------
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

    
    //-----------------------------Scroll to Another Question-----------------------------
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


    //----------------------------------------------------------User Page----------------------------------------------------------
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