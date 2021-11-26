// RegisteredUsers.spec.js created with Cypress
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
    describe('Addis Event Arranger RegisteredUsers page test', () => {   
      it('RegisteredUsers page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/registered_users')
      });
      it('Ban or Unban a user' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/registered_users')
        cy.get(':nth-child(2) > :nth-child(7) > .btn').click()
      });
      it('Edit registered user with valid username , valid address, valid city, valid about me , show email checkbox checked & show phone checkbox checked' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/registered_users')
        cy.get('tbody > :nth-child(2) > :nth-child(6) > a > .fa').click()
        cy.get('#user_name').type('newname')
        cy.get('#is_show_email').check()
        cy.get('#is_show_phone').check()
        cy.get('#user_address').type('piassa')
        cy.get('#city').type('addis ababa')
        cy.get('#user_about_me').type('hi there')
        cy.get('button.btn').click()
        cy.get('.alert').contains('User has been succesfully updated')
      });      
      

      
});      
