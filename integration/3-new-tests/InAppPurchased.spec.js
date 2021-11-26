// InAppPurchased.spec.js created with Cypress
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
    describe('Addis Event Arranger InAppPurchased page test', () => {   
      it('add InAppPurchased page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/in_app_purchases')
        cy.get('.col-3 > .btn').click()
      });
      it('add In App Product successfuly with valid product id, valid day, valid description, valid type, status checkbox checked ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/in_app_purchases')
        cy.get('.col-3 > .btn').click()
        cy.get('#in_app_purchase_prd_id').type('newid')
        cy.get('#day').type('60')
        cy.get('#description').type('newdescription')
        cy.get('#type').type('IOS')
        cy.get('#status').check()
        cy.get('button.btn').click()
        cy.get('.alert').contains('success_purchase_add')

      });
      it('add In App Product unsuccessfuly with empty product id, empty day, empty description, empty type, status checkbox unchecked ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/in_app_purchases')
        cy.get('.col-3 > .btn').click()
        // cy.get('#in_app_purchase_prd_id').type('newid')
        // cy.get('#day').type('60')
        // cy.get('#description').type('newdescription')
        // cy.get('#type').type('IOS')
        cy.get('#status').uncheck()
        cy.get('button.btn').click()
        cy.get('label.error').should('have.text','Please Provide Purchase Id.')
        //cy.get('.alert').contains('success_purchase_add')

      });
      
    });
