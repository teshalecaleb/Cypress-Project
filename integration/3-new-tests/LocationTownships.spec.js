// LocationTownships.spec.js created with Cypress
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
    describe('Addis Event Arranger LocationTownships page test', () => {   
      it('add LocationTownships page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_location_townships')
        cy.get('.col-3 > .btn').click()
      });
      it('add LocationTownships successfully with location name selected, valid township name, valid ordering,valid latitude & valid longitude' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_location_townships')
        cy.get('.col-3 > .btn').click()
        cy.get('#city_id').select('Addis Ababa')
        cy.get('#township_name').type('newtownship00')
        cy.get('#ordering').type('12')
        cy.get('#lat').type('9.026339')
        cy.get('#lng').type(' 38.761428')
        cy.get('button.btn').click()
        cy.get('.alert').contains('success_township_add')
    });
    it('add LocationTownships unsuccessfully with location name notselected, empty township name, empty ordering,empty latitude & empty longitude' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()  
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_location_townships')
        cy.get('.col-3 > .btn').click()
        //cy.get('#township_name').type('')
        // cy.get('#ordering').type(' ')
        // cy.get('#lat').type(' ')
        // cy.get('#lng').type(' ')
        cy.get('#city_id').select('Location Name')        
        cy.get('button.btn').click()
        cy.get(':nth-child(2) > label.error').contains('err_township_name')
        cy.get(':nth-child(3) > label.error').contains('err_lat')
        cy.get(':nth-child(4) > label.error').contains('err_lng')
    });
    
});