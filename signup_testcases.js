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
