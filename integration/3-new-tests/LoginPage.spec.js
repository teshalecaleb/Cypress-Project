// test1.spec.js created with Cypress
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
  })
describe('Addis Event Arranger Admin Panel login page test', () => {
    it('successfully loads the website', () => {
      cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
    });

    it('successfully login with valid email & valid password submission', () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()

        
      });
    it('unsuccessful login with invalid email & valid password submission', () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin') 
        cy.get(':nth-child(4) > .form-control').type("kaleb@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.get('.alert').contains('Email and Password do not match')
  
      });
      it('unsuccessful login with empty email & empty password submission', () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin') 
        // cy.get(':nth-child(4) > .form-control').type(' ')
        // cy.get(':nth-child(5) > .form-control').type(' ')
        cy.get('.btn').click()
        cy.get(':nth-child(4) > label.error').should('have.text','Please fill username.')
        cy.get(':nth-child(5) > label.error').should('have.text','Please fill password')
  
      });
      it('unsuccessful login with valid email & invalid password submission', () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("newone")
        cy.get('.btn').click()
        cy.get('.alert').contains('Email and Password do not match')
  
      });
      it('unsuccessful login with invalid email & invalid password submission', () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin') 
        cy.get(':nth-child(4) > .form-control').type("kaleb@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("newone")
        cy.get('.btn').click()
        cy.get('.alert').contains('Email and Password do not match')
  
      });    
  });


  