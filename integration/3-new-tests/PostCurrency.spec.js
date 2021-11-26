// PostCurrency.spec.js created with Cypress
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
  describe('Addis Event Arranger PostCurrency page test', () => {   
    it('add PostCurrency page is displayed' , () => {
      cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
      cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
      cy.get(':nth-child(5) > .form-control').type("admin")
      cy.get('.btn').click()      
      cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency')
      cy.get('.col-3 > .btn').click()      
    });
    it('add PostCurrency successfully with valid currency short form , valid currency symbol, default checkbox checked' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency')
        cy.get('.col-3 > .btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency/add')
        cy.get('#currency_short_form').type('EUR4')
        cy.get('#currency_symbol').type('€')
        cy.get('#is_default').uncheck()
        cy.get('button.btn').click()
        cy.get('.alert').contains('Currency has been successfully added')
      });
      it('add PostCurrency successfully with valid currency short form , valid currency symbol, default checkbox unchecked' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency')
        cy.get('.col-3 > .btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency/add')
        cy.get('#currency_short_form').type('EUR3')
        cy.get('#currency_symbol').type('€')
        cy.get('#is_default').uncheck()
        cy.get('button.btn').click()
        cy.get('.alert').contains('Currency has been successfully added')
      });
      it('add PostCurrency successfully with empty currency short form , valid currency symbol, default checkbox unchecked' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency')
        cy.get('.col-3 > .btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency/add')
        cy.get('#currency_short_form').type(' ')
        cy.get('#currency_symbol').type('€')
        cy.get('#is_default').uncheck()
        cy.get('button.btn').click()
        cy.get('.alert > p').contains('The Currency Short Form field is required.')
      });
      it('Set Publish a postcurrency value to yes or no' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_currency')
        cy.get(':nth-child(6) > #itm_curency22000ce34f3119a231d1342b3d962cdd').click()
                    
      });
});
