// Blog.spec.js created with Cypress
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
    describe('Addis Event Arranger Dashboard', () => {   
      it('add Post deal option page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        
      });

      it('adding deal option ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        cy.get('.col-3 > .btn').click()
        cy.get('#name').type('with length greater than FOUR charss')
        cy.get('button.btn').click()
        cy.get('.alert').contains('Deal Option has been successfully added') 
      

        
      });


      it('Is unable to add deal option with a deal option name not provided' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        cy.get('.col-3 > .btn').click()
        cy.get('button.btn').click()
        cy.get('label.error').should('have.text','Please provide Deal Option name') 

     });

     it('Is unable to add deal option if less than 4 char specified inside deal option name' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        cy.get('.col-3 > .btn').click()
        cy.get('#name').type('AA')
        cy.get('button.btn').click()
        cy.get('label.error').should('have.text','The length of Deal Option Name must be greater than 4') 
      

        
      });
      it('cancelled' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        cy.get('.col-3 > .btn').click()
        cy.get('a.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        

        
      });
      it('Edit deal option', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        cy.get('tbody > :nth-child(2) > :nth-child(3) > a > .fa').click()
        cy.get('#name').type("EDITED")
        cy.get('button.btn').click()
        cy.get('.alert').contains('Deal Option has been successfully updated')   

     });

     it('Delete deal option', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').click()

        cy.get('.btn-no').click()
        cy.get('.alert').contains('Deal Option has been successfully deleted')   

     });
     it('Publish deal option', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click({force:true})
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')
        cy.get(':nth-child(5) > #itm_option5c549679f21d461dd4f0028e62b1ab01').click({force:true})
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/deal_options')


     });


    });
