import "@shelex/cypress-allure-plugin";

/// <reference types="cypress" />

//case 1
/* describe('Bank login test cases', () => {
    beforeEach(() => {
      cy.visit('http://localhost/Bank/login.php')
    })
 */
/*   // Test Case 1 : Valid Login with registered account
    it('valid login as user', () => {
      cy.get('input[name="email"]').type('admin123@gmail.com')
      cy.get('input[name="password"]').type('1234')
      cy.get('input[name="userlogin"]').click()
      cy.url({ timeout: 1000}).should('include', '/home.php')
      cy.contains('Profile').click()
      cy.url().should('include', '/profile.php')
    })

  // Test Case 2 : Valid Login with unregistered account
    it('login with valid email and complex password but not registered', () => {
      cy.get('input[name="email"]').type('sya23@cashier.com')
      cy.get('input[name="password"]').type('S23#a')
      cy.get('input[name="userlogin"]').click()
      cy.on('window:alert', (text) => {
        expect(text).to.contain('Username or password wrong try again!')
      })
    })

  // Test Case 3 : Missing @ Symbol in email 
    it('invalid email without @ symbol', () => {
      cy.get('input[name="email"]').type('notatsymbol.com')
      cy.get('input[name="password"]').type('abc')
      cy.get('input[name="userlogin"]').click()
      cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

  // Test Case 4 : Missing Domain
    it('invalid email with wrong domain format', () => {
      cy.get('input[name="email"]').type('cashier@.com')
      cy.get('input[name="password"]').type('123456')
      cy.get('input[name="userlogin"]').click()
      cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

  // Test Case 5 : Missing .com 
    it('should not login with email missing ".com"', () => {
    cy.get('input[name="email"]').type('cashier@email');
    cy.get('input[name="password"]').type('S23#a');
    cy.get('input[name="userlogin"]').click();
    cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
    expect(validity.valid).to.be.false;})
  });

  // Test Case 6 : Email did not entered <blank space>
  it('should not login with blank email', () => {
    cy.get('input[name="email"]').clear();
    cy.get('input[name="password"]').type('S23#a');
    cy.get('input[name="userlogin"]').click();
    cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
    expect(validity.valid).to.be.false;})
  });

  // Test Case 7 : Password did not entered <blank space>
  it('should not login with blank password', () => {
    cy.get('input[name="email"]').type('admin123@gmail.com');
    cy.get('input[name="password"]').clear();
    cy.get('input[name="userlogin"]').click();
    cy.get('input[name="password"]').should('have.prop', 'validity').then((validity) => {
    expect(validity.valid).to.be.false;})
  });

  }) */

  //case 2
 /*  describe('Profile Update Test Cases', () => {
    beforeEach(() => {

      cy.visit('http://localhost/Bank/login.php')
      cy.get('input[name="email"]').type('admin123@gmail.com')
      cy.get('input[name="password"]').type('1234')
      cy.get('input[name="userlogin"]').click()
      cy.url({ timeout: 1000}).should('include', '/home.php')
      cy.contains('Profile').click()
      cy.url().should('include', '/profile.php')
    })
    //Test Case 1 : Valid Update Profile 
    it('valid profile update', () => {
      cy.get('input[name="dob"]').clear().type('1991-01-01')
      cy.get('input[name="email"]').clear().type('admin123@gmail.com')
      cy.get('input[name="phonenumber"]').clear().type('+60123456789')
      cy.get('input[name="occupation"]').clear().type('Developer')
      cy.get('input[name="city"]').clear().type('Kuala Lumpur')
      cy.contains('Save Changes').click()
      cy.on('window:alert', (text) => {
        expect(text).to.contain('Data Successfully Updated')
      })
    })

    //Test Case 2 : Update invalid email format missing @ symbol 
    it('invalid email format missing @ symbol', () => {
      cy.get('input[name="email"]').clear().type('dani11gmail.com')
      cy.contains('Save Changes').click()
      cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 3 : Update invalid email format missing domain
    it('invalid email format missing domain ', () => {
      cy.get('input[name="email"]').clear().type('user@.com')
      cy.contains('Save Changes').click()
      cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 4 : Update invalid email format missing .com
    it('invalid email format missing .com', () => {
      cy.get('input[name="email"]').clear().type('user@.gmail')
      cy.contains('Save Changes').click()
      cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 5 : Update phone number contains alphanumeric
    it('invalid phone number format contain alphanumeric', () => {
      cy.get('input[name="phonenumber"]').clear().type('1234abc789')
      cy.contains('Save Changes').click()
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 6 : Update phone number contains symbol
    it('invalid phone number format contain symbol', () => {
      cy.get('input[name="phonenumber"]').clear().type('1234abc@78')
      cy.contains('Save Changes').click()
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 7 : Update phone number less than 10 digits
    it('invalid phone number format less than 10 digit', () => {
      cy.get('input[name="phonenumber"]').clear().type('123456')
      cy.contains('Save Changes').click()
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 8 : Update phone number more than 11 digits
    it('invalid phone number format more than 11 digits', () => {
      cy.get('input[name="phonenumber"]').clear().type('0123456789123')
      cy.contains('Save Changes').click()
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 9 : Update phone number blank space
    it('invalid phone number format blank space *required', () => {
      cy.get('input[name="phonenumber"]').clear()
      cy.contains('Save Changes').click()
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 10 : Update occupation with Contain symbol 
    it('invalid occupation with contain symbol', () => {
      cy.get('input[name="occupation"]').clear().type('@Manager')
      cy.contains('Save Changes').click()
      cy.get('input[name="occupation"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 11 : Update occupation with digit 
    it('invalid occupation with numbers only', () => {
      cy.get('input[name="occupation"]').clear().type('1234')
      cy.contains('Save Changes').click()
      cy.get('input[name="occupation"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 12 : Update city with contain symbol 
    it('invalid city with contain symbol', () => {
      cy.get('input[name="city"]').clear().type('KL#Sentral')
      cy.contains('Save Changes').click()
      cy.get('input[name="city"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    //Test Case 13 : Update city with contain alphanumeric input
    it('invalid city with alphanumeric input', () => {
      cy.get('input[name="city"]').clear().type('123Town')
      cy.contains('Save Changes').click()
      cy.get('input[name="city"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })
  })

 */

  //case 3
  describe('Create Cashier Account Flow', () => {
    beforeEach(() => {
      cy.visit('http://localhost/Bank/login.php')
      cy.contains('Manager').click()
      cy.get('input[name="email"]').type('manager@manager.com')
      cy.get('input[name="password"]').type('1234')
      cy.get('input[name="login"]').click()
      cy.url({ timeout: 2000 }).should('include', 'manager_home.php')
      cy.contains('Staff Accounts').click()
      cy.url({ timeout: 2000 }).should('include', 'manager_accounts.php')
      cy.contains('Add New Cashier Account').click()
      cy.get('#exampleModal').should('have.class', 'show')
    })

    // Test Case 1 Valid Add Cashier Account 
    it('should accept valid email and password - Dataset 1 ', () => {
      cy.get('#exampleModal input[name="email"]').type('fiq12@gmail.com')
      cy.get('#exampleModal input[name="password"]').type('Fiqs#8')
      cy.get('#exampleModal button[name="saveAccount"]').click()
      cy.on('window:alert', (text) => {
        expect(text).to.contain('Account created successfully')
      })
    })

    // Test Case 2 Invalid Email Without .com
    it('should reject invalid email and password - Dataset 2 ', () => {
      cy.get('#exampleModal input[name="email"]').type('user@cashier')
      cy.get('#exampleModal input[name="password"]').type('fiq')
      cy.get('#exampleModal button[name="saveAccount"]').click()
      cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

    // Test Case 3 Invalid Email without domain
    it('should reject another invalid email and password - Dataset 3 ', () => {
      cy.get('#exampleModal input[name="email"]').type('c@.com')
      cy.get('#exampleModal input[name="password"]').type('8888')
      cy.get('#exampleModal button[name="saveAccount"]').click()
      cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })

      // Test Case 4 : Missing @ Symbol in email 
    it('invalid email without @ symbol', () => {
      cy.get('#exampleModal input[name="email"]').type('fifa.com')
      cy.get('#exampleModal input[name="password"]').type('abc')
      cy.get('#exampleModal button[name="saveAccount"]').click()
      cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;})
    })


  // Test Case 6 : Email did not entered <blank space>
  it('should not login with blank email', () => {
    cy.get('#exampleModal input[name="email"]').clear();
    cy.get('#exampleModal input[name="password"]').type('hhhj1');
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
    expect(validity.valid).to.be.false;})
  });

  // Test Case 7 : Password did not entered <blank space>
  it('should not login with blank password', () => {
    cy.get('#exampleModal input[name="email"]').type('ali11@gmail.com');
    cy.get('#exampleModal input[name="password"]').clear();
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.get('#exampleModal input[name="password"]').should('have.prop', 'validity').then((validity) => {
    expect(validity.valid).to.be.false;})
  });
    
})
  
  
  
  