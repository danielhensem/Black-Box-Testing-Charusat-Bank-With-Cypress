/// <reference types="cypress" />
import "@shelex/cypress-allure-plugin";

describe('User transfer money', () => {

    beforeEach(() => {
        cy.allure().step('Open login page and login');
        cy.visit('http://localhost/Bank/login.php');
        cy.get('input[name="email"]').type('admin123@gmail.com');
        cy.get('input[name="password"]').type('1234');
        cy.get('input[name="userlogin"]').click();
        cy.url({ timeout: 1000 }).should('include', '/home.php');
        cy.contains('Transfer Money').click();
        cy.url({ timeout: 1000 }).should('include', '/funds_transfer.php');
    });

    it('Insert valid receiver account & valid amount', () => {
        cy.allure().severity('blocker');  // most critical
        cy.allure().story('Valid Transfer').step('Enter valid receiver account and amount');
        cy.get('input[name="otherNo"]').type('1748751310');
        cy.contains('Get Account Info').click();
        cy.get('input[name="amount"]').type('3000');
        cy.get('button[name="transferSelf"]').click();

        cy.allure().step('Verify success alert');
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Transfer Successfull');
        });
    });

    it('Insert invalid amount less than 3000', () => {
        cy.allure().severity('critical');  // important business rule
        cy.allure().story('Invalid Transfer').step('Enter valid account but amount < 3000');
        cy.get('input[name="otherNo"]').type('1748751310');
        cy.contains('Get Account Info').click();
        cy.get('input[name="amount"]').type('2000');
        cy.get('button[name="transferSelf"]').click();

        cy.allure().step('Verify invalid amount');
        cy.get('input[name="amount"]').should('have.prop', 'validity').then((validity) => {
            expect(validity.valid).to.be.false;
        });
    });

    it('Insert invalid amount exceeding balance', () => {
        cy.allure().severity('critical');
        cy.allure().story('Invalid Transfer').step('Enter amount exceeding balance');
        cy.get('input[name="otherNo"]').type('1748751310');
        cy.contains('Get Account Info').click();
        cy.get('input[name="amount"]').type('10000000');
        cy.get('button[name="transferSelf"]').click();

        cy.allure().step('Verify invalid amount');
        cy.get('input[name="amount"]').should('have.prop', 'validity').then((validity) => {
            expect(validity.valid).to.be.false;
        });
    });

    it('Insert invalid account number: no number', () => {
        cy.allure().severity('normal');  // less critical
        cy.allure().story('Invalid Account').step('Enter non-numeric account');
        cy.get('input[name="otherNo"]').type('daniel');
        cy.contains('Get Account Info').click();

        cy.allure().step('Verify account error message');
        cy.contains('Account No. daniel Does not exist');
    });

    it('Insert invalid account number: nonexistent account number', () => {
        cy.allure().severity('normal');
        cy.allure().story('Invalid Account').step('Enter nonexistent account number');
        cy.get('input[name="otherNo"]').type('191919191919');
        cy.contains('Get Account Info').click();

        cy.allure().step('Verify account error message');
        cy.contains('Account No. 191919191919 Does not exist');
    });
});
