import "@shelex/cypress-allure-plugin";

/// <reference types="cypress" />
//case 1
describe('Manager add user test cases', () => {
beforeEach(() => {
cy.allure().step('Login as manager');
cy.visit('http://localhost/Bank/manager_login.php')
cy.get('input[name="email"]').type('manager@manager.com')
cy.get('input[name="password"]').type('1234')
cy.get('input[name="login"]').click()
cy.url({ timeout: 1000}).should('include', '/manager_home.php')
cy.allure().step('Navigate to Add New Account page');
cy.contains('Add new Account').click()
cy.url({ timeout: 1000}).should('include', '/addnewaccount.php')
})
// Test Case 1: Add valid user
it('Add valid user', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Valid user registration')
cy.allure().severity('critical')
cy.allure().step('Fill all valid user details and register');
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
cy.allure().step('Verify account created successfully');
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 2: Insert invalid name | with numbers/symbol
it('Insert invalid name input with numbers/symbols', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid name validation')
cy.allure().severity('normal')
cy.allure().step('Enter invalid name with numbers/symbols and submit');
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
cy.allure().step('Verify name input is invalid');
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
cy.allure().step('Verify Aadhaar input is invalid');
cy.get('input[name="aadhaar"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 4: Insert invalid Aadhaar Number | More than 12 digit
it('Insert invalid Aadhaar number format which is more than 12 digits', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid Aadhaar validation - More than 12 digits')
cy.allure().severity('normal')
cy.allure().step('Enter Aadhaar number with more than 12 digits and submit');
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
cy.allure().step('Verify Aadhaar input is invalid');
cy.get('input[name="aadhaar"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 5: Insert invalid Aadhaar Number | Contain letters
it('Insert invalid Aadhaar number format that contains letters', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid Aadhaar validation - Contains letters')
cy.allure().severity('normal')
cy.allure().step('Enter Aadhaar number with letters and submit');
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
cy.allure().step('Verify Aadhaar input is invalid');
cy.get('input[name="aadhaar"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 6: Select valid gender | Male
it('Gender "male" is selected', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Valid gender selection - Male')
cy.allure().severity('critical')
cy.allure().step('Select Male gender and register user');
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
cy.allure().step('Verify account created successfully');
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 7: Select valid gender | Female
it('Gender "female" is selected', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Valid gender selection - Female')
cy.allure().severity('critical')
cy.allure().step('Select Female gender and register user');
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
cy.allure().step('Verify account created successfully');
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 8: Select invalid gender | Select Gender
it('Gender is not selected ', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid gender selection - Not selected')
cy.allure().severity('normal')
cy.allure().step('Leave gender unselected and submit');
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
cy.allure().step('Verify gender selection is invalid');
cy.get('select[name="gender"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})

// Test Case 9: Insert invalid email address | Without @
it('Insert invalid email format without @ symbol', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid email validation - Missing @ symbol')
cy.allure().severity('normal')
cy.allure().step('Enter email without @ symbol and submit');
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
cy.allure().step('Verify email input is invalid');
cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 10: Insert invalid email address | Without gmail
it('Insert invalid email format without domain', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid email validation - Missing domain')
cy.allure().severity('normal')
cy.allure().step('Enter email without domain and submit');
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
cy.allure().step('Verify email input is invalid');
cy.get('input[name="email"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 11: Insert invalid city format | Contains letters/symbols
it('Insert invalid city format that contains letters/symbols', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid city validation - Contains symbols')
cy.allure().severity('minor')
cy.allure().step('Enter city with symbols and submit');
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
cy.allure().step('Verify city input is invalid');
cy.get('input[name="city"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 12: Insert invalid address format | Contains letters/symbols
it('Insert invalid address format that contains letters/symbols', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid address validation - Contains symbols')
cy.allure().severity('minor')
cy.allure().step('Enter address with symbols and submit');
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
cy.allure().step('Verify address input is invalid');
cy.get('input[name="address"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 13: Insert invalid profile picture | Not supported (.gif file)
it('Insert invalid profile picture that are not supported', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid file validation - Unsupported format')
cy.allure().severity('normal')
cy.allure().step('Upload unsupported file format and submit');
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
cy.allure().step('Verify file input is invalid');
cy.get('input[type="file"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})

// Test Case 14: Insert valid deposit amount | More than 3000
it('Insert valid deposit amount more than RM3000', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Valid deposit amount - More than RM3000')
cy.allure().severity('critical')
cy.allure().step('Enter deposit amount more than RM3000 and register');
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
cy.allure().step('Verify account created successfully');
cy.get('*[class^="alert alert-info text-center"]').contains('Account added Successfully')
})
// Test Case 15: Insert invalid deposit amount | Less than 3000
it('Insert invalid deposit amount less than RM3000', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid deposit validation - Less than RM3000')
cy.allure().severity('normal')
cy.allure().step('Enter deposit amount less than RM3000 and submit');
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
cy.allure().step('Verify deposit input is invalid');
cy.get('input[name="deposit"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})
// Test Case 16: Insert invalid occupation | Contains only number/symbols
it('Insert invalid occupation that contains only number/symbols', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid occupation validation - Numbers/symbols only')
cy.allure().severity('minor')
cy.allure().step('Enter occupation with only numbers/symbols and submit');
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
cy.allure().step('Verify occupation input is invalid');
cy.get('input[name="occupation"]').should('have.prop', 'validity').then((validity) => {
expect(validity.valid).to.be.false;
})
})

// Test Case 17: Insert invalid mobile number | More than 11 digits
  it('Insert invalid mobile number more than 11 digits', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid phone validation - More than 11 digits')
cy.allure().severity('normal')
cy.allure().step('Enter phone number with more than 11 digits and submit');
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
      cy.allure().step('Verify phone number input is invalid');
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
        expect(validity.valid).to.be.false;
      })
    })

  // Test Case 18: Insert invalid mobile number | Less than 10 digits
  it('Insert invalid mobile number less than 10 digits', () => {
cy.allure().feature('User Account Creation')
cy.allure().story('Invalid phone validation - Less than 10 digits')
cy.allure().severity('normal')
cy.allure().step('Enter phone number with less than 10 digits and submit');
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
      cy.allure().step('Verify phone number input is invalid');
      cy.get('input[name="phonenumber"]').should('have.prop', 'validity').then((validity) => {
        expect(validity.valid).to.be.false;
      })
    })
})