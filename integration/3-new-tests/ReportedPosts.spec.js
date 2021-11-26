// ReportedPosts.spec.js created with Cypress
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
    describe('Addis Event Arranger ReportedPosts page test', () => {   
      it('ReportedPosts page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_reports')

      });
      it('Edit ReportedPost by diabling it ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_reports')
        cy.get('tbody > :nth-child(2) > :nth-child(4) > a > .fa').click()
        cy.get('button.btn').click()
                        
      });
    });       