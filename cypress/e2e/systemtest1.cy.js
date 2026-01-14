import "@shelex/cypress-allure-plugin";
/// <reference types="cypress" />

describe('Create Cashier Account Flow', () => {

  beforeEach(() => {
    cy.allure().step('Open login page and login as manager');
    cy.visit('http://localhost/Bank/login.php')
    cy.contains('Manager').click()
    cy.get('input[name="email"]').type('manager@manager.com')
    cy.get('input[name="password"]').type('1234')
    cy.get('input[name="login"]').click()
    cy.url({ timeout: 2000 }).should('include', 'manager_home.php')
    cy.allure().step('Navigate to Staff Accounts page');
    cy.contains('Staff Accounts').click()
    cy.url({ timeout: 2000 }).should('include', 'manager_accounts.php')
    cy.allure().step('Open Add New Cashier Account modal');
    cy.contains('Add New Cashier Account').click()
    cy.get('#exampleModal').should('have.class', 'show')
  })

  it('should accept valid email and password - Dataset 1', () => {
    cy.allure().feature('Cashier Account Creation')
    cy.allure().story('Valid account creation')
    cy.allure().severity('critical')
    cy.allure().step('Enter valid email and password and save account');
    cy.get('#exampleModal input[name="email"]').type('fiq12@gmail.com')
    cy.get('#exampleModal input[name="password"]').type('Fiqs#8')
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.allure().step('Verify success alert is shown');
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Account created successfully')
    })
  })

  it('should reject invalid email and password - Dataset 2', () => {
    cy.allure().feature('Cashier Account Creation')
    cy.allure().story('Invalid email format')
    cy.allure().severity('normal')
    cy.allure().step('Enter invalid email without .com and password and try to save');
    cy.get('#exampleModal input[name="email"]').type('user@cashier')
    cy.get('#exampleModal input[name="password"]').type('fiq')
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.allure().step('Validate email input is invalid');
    cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;
    })
  })

  it('should reject another invalid email and password - Dataset 3', () => {
    cy.allure().feature('Cashier Account Creation')
    cy.allure().story('Invalid email format without domain')
    cy.allure().severity('normal')
    cy.allure().step('Enter invalid email c@.com and password and save');
    cy.get('#exampleModal input[name="email"]').type('c@.com')
    cy.get('#exampleModal input[name="password"]').type('8888')
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.allure().step('Validate email input is invalid');
    cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;
    })
  })

  it('invalid email without @ symbol', () => {
    cy.allure().feature('Cashier Account Creation')
    cy.allure().story('Invalid email format missing @')
    cy.allure().severity('normal')
    cy.allure().step('Enter email without @ symbol');
    cy.get('#exampleModal input[name="email"]').type('fifa.com')
    cy.get('#exampleModal input[name="password"]').type('abc')
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.allure().step('Check email input is invalid');
    cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;
    })
  })

  it('should not login with blank email', () => {
    cy.allure().feature('Cashier Account Creation')
    cy.allure().story('Blank email input')
    cy.allure().severity('minor')
    cy.allure().step('Leave email blank and enter password');
    cy.get('#exampleModal input[name="email"]').clear();
    cy.get('#exampleModal input[name="password"]').type('hhhj1');
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.allure().step('Check email input is invalid');
    cy.get('#exampleModal input[name="email"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;
    })
  })

  it('should not login with blank password', () => {
    cy.allure().feature('Cashier Account Creation')
    cy.allure().story('Blank password input')
    cy.allure().severity('minor')
    cy.allure().step('Enter email and leave password blank');
    cy.get('#exampleModal input[name="email"]').type('ali11@gmail.com');
    cy.get('#exampleModal input[name="password"]').clear();
    cy.get('#exampleModal button[name="saveAccount"]').click()
    cy.allure().step('Check password input is invalid');
    cy.get('#exampleModal input[name="password"]').should('have.prop', 'validity').then((validity) => {
      expect(validity.valid).to.be.false;
    })
  })

})
