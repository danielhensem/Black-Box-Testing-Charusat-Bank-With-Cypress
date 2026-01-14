import "@shelex/cypress-allure-plugin";

/// <reference types="cypress" />
//case 1
describe('Manager add user test cases', () => {
beforeEach(() => {
cy.visit('http://localhost/Bank/manager_login.php')
cy.get('input[name="email"]').type('manager@manager.com')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="login"]').click()
cy.url({ timeout: 1000}).should('include', '/manager_home.php')
cy.contains('Add new Account').click()
cy.url({ timeout: 1000}).should('include', '/addnewaccount.php')
})
// Test Case 1: Add valid user
it('Add valid user', () => {
cy.get('input[name="name"]').type('Ali')
cy.get('input[name="aadhaar"]').type('123456789012')
cy.get('select[name="gender"]').should('exist').select('Male')
cy.get('input[name="email"]').type('ali1111@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345678')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 2: Insert invalid name | with numbers/symbol
it('Insert invalid name input with numbers/symbols', () => {
cy.get('input[name="name"]').type('Ali123&')
cy.get('input[name="aadhaar"]').type('123456789013')
cy.get('select[name="gender"]').should('exist').select('Male')
cy.get('input[name="email"]').type('ali1112@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345679')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="name"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})

// Test Case 3: Insert invalid Aadhaar Number | Less than 12 digit
it('Insert invalid Aadhaar number format which is less than 12 digits', () => {
cy.get('input[name="name"]').type('Ali')
cy.get('input[name="aadhaar"]').type('12345678910')
cy.get('select[name="gender"]').should('exist').select('Male')
cy.get('input[name="email"]').type('ali1113@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345681')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="aadhaar"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 4: Insert invalid Aadhaar Number | More than 12 digit
it('Insert invalid Aadhaar number format which is more than 12 digits', () => {
cy.get('input[name="name"]').type('Ali')
cy.get('input[name="aadhaar"]').type('1234567891012')
cy.get('select[name="gender"]').should('exist').select('Male')
cy.get('input[name="email"]').type('ali1113@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345681')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="aadhaar"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 5: Insert invalid Aadhaar Number | Contain letters
it('Insert invalid Aadhaar number format that contains letters', () => {
cy.get('input[name="name"]').type('Ali')
cy.get('input[name="aadhaar"]').type('123456abcdef')
cy.get('select[name="gender"]').should('exist').select('Male')
cy.get('input[name="email"]').type('ali1113@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345681')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="aadhaar"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 6: Select valid gender | Male
it('Gender "male" is selected', () => {
cy.get('input[name="name"]').type('Ali')
cy.get('input[name="aadhaar"]').type('123456789101')
cy.get('select[name="gender"]').should('exist').select('Male')
cy.get('input[name="email"]').type('ali1113@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345681')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 7: Select valid gender | Female
it('Gender "female" is selected', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789102')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1113@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345682')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 8: Select invalid gender | Select Gender
it('Gender is not selected ', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789103')
cy.get('select[name="gender"]').should('exist').select('Select Gender')
cy.get('input[name="email"]').type('aliyah1114@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345683')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('select[name="gender"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})

// Test Case 9: Insert invalid email address | Without @
it('Insert invalid email format without @ symbol', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789104')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1115gmail.com')
cy.get('input[name="phonenumber"]').type('0112345684')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 10: Insert invalid email address | Without gmail
it('Insert invalid email format without domain', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789104')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1115@.com')
cy.get('input[name="phonenumber"]').type('0112345684')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 11: Insert invalid city format | Contains letters/symbols
it('Insert invalid city format that contains letters/symbols', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789104')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1115@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345684')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL@#%&')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="city"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 12: Insert invalid address format | Contains letters/symbols
it('Insert invalid address format that contains letters/symbols', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789105')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1116@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345685')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC@#%&')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="address"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 13: Insert invalid profile picture | Not supported (.gif file)
it('Insert invalid profile picture that are not supported', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789106')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1117@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345686')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/circle.gif')
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('3000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[type="file"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})

// Test Case 14: Insert valid deposit amount | More than 3000
it('Insert valid deposit amount more than RM3000', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789122')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1123@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345692')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('100000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 15: Insert invalid deposit amount | Less than 3000
it('Insert invalid deposit amount less than RM3000', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789123')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1124@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345693')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('1000')
cy.get('input[name="occupation"]').type('Engineer')
cy.contains('Register').click()
cy.get('input[name="deposit"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 16: Insert invalid occupation | Contains only number/symbols
it('Insert invalid occupation that contains only number/symbols', () => {
cy.get('input[name="name"]').type('Aliyah')
cy.get('input[name="aadhaar"]').type('123456789123')
cy.get('select[name="gender"]').should('exist').select('Female')
cy.get('input[name="email"]').type('aliyah1124@gmail.com')
cy.get('input[name="phonenumber"]').type('0112345693')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="city"]').type('KL')
cy.get('input[name="address"]').type('Jalan ABC')
cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
cy.get('input[name="dob"]').clear().type('1990-01-01')
cy.get('select[name="accounttype"]').should('exist').select('Saving')
cy.get('input[name="deposit"]').type('5000')
cy.get('input[name="occupation"]').type('3@1475|@')
cy.contains('Register').click()
cy.get('input[name="occupation"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})

// Test Case 17: Insert invalid mobile number | More than 11 digits
  it('Insert invalid mobile number more than 11 digits', () => {
      cy.get('input[name="name"]').type('Aliyah')
      cy.get('input[name="aadhaar"]').type('123456789104')
      cy.get('select[name="gender"]').should('exist').select('Female')
      cy.get('input[name="email"]').type('aliyah1115@gmail.com')
      cy.get('input[name="phonenumber"]').type('011234568411')
      cy.get('input[name="password"]').type('1234')
      cy.get('input[name="city"]').type('KL')
      cy.get('input[name="address"]').type('Jalan ABC')
      cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
      cy.get('input[name="dob"]').clear().type('1990-01-01')
      cy.get('select[name="accounttype"]').should('exist').select('Saving')
      cy.get('input[name="deposit"]').type('3000')
      cy.get('input[name="occupation"]').type('Engineer')
      cy.contains('Register').click()
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
        expect(validity.valid).to.be.false;
      })
    })

  // Test Case 18: Insert invalid mobile number | Less than 10 digits
  it('Insert invalid mobile number less than 10 digits', () => {
      cy.get('input[name="name"]').type('Aliyah')
      cy.get('input[name="aadhaar"]').type('123456789104')
      cy.get('select[name="gender"]').should('exist').select('Female')
      cy.get('input[name="email"]').type('aliyah1115@gmail.com')
      cy.get('input[name="phonenumber"]').type('60123')
      cy.get('input[name="password"]').type('1234')
      cy.get('input[name="city"]').type('KL')
      cy.get('input[name="address"]').type('Jalan ABC')
      cy.get('input[type="file"]').selectFile('C:/Users/Irfan/Desktop/Cypress/systemtestagain/cypress/fixtures/test.jpg');
      cy.get('input[name="dob"]').clear().type('1990-01-01')
      cy.get('select[name="accounttype"]').should('exist').select('Saving')
      cy.get('input[name="deposit"]').type('3000')
      cy.get('input[name="occupation"]').type('Engineer')
      cy.contains('Register').click()
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
        expect(validity.valid).to.be.false;
      })
    })
})