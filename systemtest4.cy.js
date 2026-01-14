/// <reference types="cypress" />
import "@shelex/cypress-allure-plugin";

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.allure().fileAttachment(
      'Screenshot',
      `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`,
      'image/png'
    );
  }
});

describe('Manager User Account', () => {
  beforeEach(() => {
    cy.allure().feature('User Management');
    cy.allure().story('Login as Manager');
    cy.allure().step('Login as manager', () => {
      cy.visit('http://localhost/Bank/manager_login.php');
      cy.get('input[name="email"]').type('manager@manager.com');
      cy.get('input[name="password"]').type('1234');
      cy.get('input[name="login"]').click();
      cy.url({ timeout: 1000 }).should('include', '/manager_home.php');
    });
  });

  it('Check Button View', () => {
    cy.allure().story('View User');
    cy.allure().severity('critical');
    cy.allure().step('Click View button', () => {
      cy.contains('View').click();
      cy.url({ timeout: 1000 }).should('include', '/view.php');
    });
  });

  it('Check Button Send Notice', () => {
    cy.allure().story('Send Notice');
    cy.allure().severity('critical');
    cy.allure().step('Click Send Notice button', () => {
      cy.get('a.btn.btn-primary').contains('Send Notice').click();
      cy.url({ timeout: 1000 }).should('include', '/manager_notice.php');
    });
  });

  it('Delete User Account', () => {
    cy.allure().story('Delete User');
    cy.allure().severity('blocker');
    cy.allure().step('Click Delete button', () => {
      cy.contains('Delete').click();
      cy.url({ timeout: 1000 }).should('include', '/manager_home.php');
    });
  });
});

describe('Send Notice to User', () => {
  beforeEach(() => {
    cy.allure().feature('User Management');
    cy.allure().story('Login and go to Send Notice page');
    cy.allure().step('Login and navigate', () => {
      cy.visit('http://localhost/Bank/manager_login.php');
      cy.get('input[name="email"]').type('manager@manager.com');
      cy.get('input[name="password"]').type('1234');
      cy.get('input[name="login"]').click();
      cy.url({ timeout: 1000 }).should('include', '/manager_home.php');
      cy.get('a.btn.btn-primary').contains('Send Notice').click();
      cy.url({ timeout: 1000 }).should('include', '/manager_notice.php');
    });
  });

  it('Send Valid Notice', () => {
    cy.allure().story('Send Valid Notice');
    cy.allure().severity('critical');
    cy.allure().step('Type and send valid notice', () => {
      cy.get('textarea[name="notice"]').type('Please be informed that…');
      cy.get('button[name="send"]').click();
      cy.contains('Successfully send').should('be.visible');
    });
  });

  it('Send Invalid Notice', () => {
    cy.allure().story('Send Invalid Notice');
    cy.allure().severity('minor');
    cy.allure().step('Type and send invalid notice', () => {
      cy.get('textarea[name="notice"]').type('Please be informed that…');
      cy.get('button[name="send"]').click();
      cy.get('textarea[name="notice"]')
        .should('have.prop', 'validity')
        .then((validity) => {
          expect(validity.valid).to.be.false;
        });
    });
  });
});

describe('Check Button Function in Homepage as User', () => {
  beforeEach(() => {
    cy.allure().feature('User Homepage');
    cy.allure().story('Login as User');
    cy.allure().step('Login as user', () => {
      cy.visit('http://localhost:8080/Bank/login.php');
      cy.get('input[name="email"]').type('admin123@gmail.com');
      cy.get('input[name="password"]').type('1234');
      cy.get('input[name="userlogin"]').click();
      cy.url({ timeout: 1000 }).should('include', '/home.php');
    });
  });

  it('Check Button Function Account', () => {
    cy.allure().story('Check Account Page');
    cy.allure().severity('critical');
    cy.allure().step('Open Account page', () => {
      cy.get('.navbar-toggler').click();
      cy.contains('Accounts').click();
      cy.url().should('include', '/account.php');
    });
  });

  it('Check Button Function Account Statements', () => {
    cy.allure().story('Check Account Statements Page');
    cy.allure().severity('critical');
    cy.allure().step('Open Account Statements page', () => {
      cy.get('.navbar-toggler').click();
      cy.contains('Account Statements').click();
      cy.url().should('include', '/statement.php');
    });
  });
});
