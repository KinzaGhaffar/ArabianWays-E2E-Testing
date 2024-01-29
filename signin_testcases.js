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
