/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';

describe('Allure Test Check', () => {
  it('should generate allure results', () => {
    cy.allure().feature('Smoke Test');
    cy.allure().story('Allure generation check');
    cy.allure().severity('critical');
    cy.allure().step('Visit example page', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('type').should('be.visible');
    });
  });
});
