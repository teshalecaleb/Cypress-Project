// PendingPosts.spec.js created with Cypress
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
    describe('Addis Event Arranger PendingPosts page test', () => {   
      it('PendingPosts page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/pendings')
      });
      it('Edit a PendingPost status to approve  ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/pendings')
        cy.get('tbody > :nth-child(2) > :nth-child(6) > a > .fa').click()
        cy.get('#item_is_published').select('Approved')
        cy.get('button.btn').click()
        cy.get('.alert').contains('Successfully sent push notification to Kaleb Teshale')
      });
      it('Edit a PendingPost status to disable' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/pendings')
        cy.get(':nth-child(3) > :nth-child(6) > a > .fa').click()
        cy.get('#item_is_published').select('Disable')
        cy.get('button.btn').click()
        cy.get('.alert').contains('Successfully sent push notification to Kaleb Teshale')
      });
      it('Edit a PendingPost status to reject' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/pendings')
        cy.get('tbody > :nth-child(2) > :nth-child(6) > a > .fa').click()
        cy.get('#item_is_published').select('Reject')
        cy.get('button.btn').click()
        cy.get('.alert').contains('Successfully sent push notification to Kaleb Teshale')
      });



    });









