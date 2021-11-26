// SystemUsers.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
    describe('Addis Event Arranger SystemUsers page test', () => {   
      it('add new SystemUsers page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/system_users')
        cy.get('.col-3 > .btn').click()
      });
      it('add new SystemUsers successfully with valid user name , valid email, valid password, valid confrom password , show email checkbox checked, show phone checkbox checked, selecting the requried module fields' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/system_users')
        cy.get('.col-3 > .btn').click()
        cy.get('#name').type('kaleb2')
        cy.get('#user_email').type('kaleb2@gmail.com')
        cy.get('#user_password').type('abcd')
        cy.get('#conf_password').type('abcd')
        cy.get('#role_id').select('Manager')
        cy.get('#is_show_email').check()
        cy.get('#is_show_phone').check()
        cy.get(':nth-child(2) > .form-check-label > input').uncheck()
        cy.get(':nth-child(3) > .form-check-label > input').uncheck()
        cy.get(':nth-child(7) > .form-check-label > input').uncheck()
        cy.get(':nth-child(12) > .form-check-label > input').uncheck()
        cy.get('button.btn').click()
        cy.get('.alert').contains('User has been successfully added')
      });
      it('add new SystemUsers unsuccessfully with empty user name , empty email, empty password, empty confrom password , show email checkbox checked, show phone checkbox checked, selecting the requried module fields' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/system_users')
        cy.get('.col-3 > .btn').click()
        // cy.get('#name').type('kaleb2')
        // cy.get('#user_email').type('kaleb3@gmail.com')
        // cy.get('#user_password').type('abcd')
        // cy.get('#conf_password').type('abcd')
        cy.get('#role_id').select('Manager')
        cy.get('#is_show_email').check()
        cy.get('#is_show_phone').check()
        cy.get(':nth-child(2) > .form-check-label > input').uncheck()
        cy.get(':nth-child(3) > .form-check-label > input').uncheck()
        cy.get(':nth-child(7) > .form-check-label > input').uncheck()
        cy.get(':nth-child(12) > .form-check-label > input').uncheck()
        cy.get('button.btn').click()
        cy.get(':nth-child(1) > label.error').contains('Please provide username')
        cy.get(':nth-child(1) > :nth-child(2) > label.error').contains('Please provide email address')
        cy.get(':nth-child(3) > label.error').contains('Please provide password')
        cy.get(':nth-child(4) > label.error').contains('Please provide confirm password')
      });
      it('add new SystemUsers unsuccessfully with valid user name , valid email, valid password, Invalid confrom password , show email checkbox checked, show phone checkbox checked, selecting the requried module fields' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/system_users')
        cy.get('.col-3 > .btn').click()
        cy.get('#name').type('kaleb4')
        cy.get('#user_email').type('kaleb4@gmail.com')
        cy.get('#user_password').type('abcd')
        cy.get('#conf_password').type('abc1')
        cy.get('#role_id').select('Manager')
        cy.get('#is_show_email').check()
        cy.get('#is_show_phone').check()
        cy.get(':nth-child(2) > .form-check-label > input').uncheck()
        cy.get(':nth-child(3) > .form-check-label > input').uncheck()
        cy.get(':nth-child(7) > .form-check-label > input').uncheck()
        cy.get(':nth-child(12) > .form-check-label > input').uncheck()
        cy.get('button.btn').click()
        cy.get(':nth-child(4) > label.error').should('have.text', 'Password and confirm password do not match')        
      });

    });      

