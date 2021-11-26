// PostPrice.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  describe('Addis Event Arranger PostPrice page test', () => {   
    it('add PostPrice page is displayed' , () => {
      cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
      cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
      cy.get(':nth-child(5) > .form-control').type("admin")
      cy.get('.btn').click()      
      cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_price')
      cy.get('.col-3 > .btn').click()      
    });
    it('add PostCurrency successfully with valid price name' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_price')
        cy.get('.col-3 > .btn').click()
        cy.get('#name').type('new_method4')
        cy.get('button.btn').click()
        cy.get('.alert').contains('Price has been successfully added')

      });
    it('add PostCurrency unsuccessfully with repeted valid price name' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_price')
        cy.get('.col-3 > .btn').click()
        cy.get('#name').type('new_method2')
        cy.get('button.btn').click()
        cy.get('label.error').contains('Price Name is already existed in the system.')

      });
      it('add PostCurrency unsuccessfully with empty price name' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_price')
        cy.get('.col-3 > .btn').click()
        cy.get('#name').type(' ')
        cy.get('button.btn').click()
        cy.get('.alert > p').contains('The Price Name field is required.')
      });
});