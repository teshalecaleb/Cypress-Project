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
    describe('Addis Event Arranger Blog Page', () => {   
      it('add blog post page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get(':nth-child(2) > .btn').click()
      });

      it('Is able to add a blog post with a length of 4 characters and above blog name and optional blog description' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#name').type('Test for ')
        cy.get('#cke_description').type('Test Blog Description')
        cy.get('.card-footer > :nth-child(1)').click();
        cy.get('.alert').contains('Blogs has been successfully added') 


     });



     it('Is unable to add a blog post with a length of 4 characters and above blog name and optional blog description' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#name').type('Test for blog non repeated name')
        cy.get('.card-footer > :nth-child(1)').click();
        cy.get('label.error').should('have.text','Blog Name is already existed in the system.') 

     });


     
     it('Is unable to add a blog with a blog name not specified' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get(':nth-child(2) > .btn').click()
        cy.get('.card-footer > :nth-child(1)').click();
        cy.get('label.error').should('have.text','Please provide blog name') 

     });

     it('Is unable to add a blog with a save and go click without specifying blog name' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#gallery').click();
        cy.get('label.error').should('have.text','Please provide blog name') 

     });

     it('able to return to the bloge page when a cancel is clicked' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get(':nth-child(2) > .btn').click()
        cy.get('a.btn').click();
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
       


     });

     it('Edit a blog', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get('tbody > :nth-child(2) > :nth-child(3) > a > .fa').click()

        cy.get('.card-footer > :nth-child(1)').click()
        cy.get('.alert').contains('Blogs has been successfully updated')   

     });

     it('Delete a blog', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get('#feed02cf14ce6b8ce2cf744b88c40bcb6453 > .fa').click()

        cy.get('.btn-no').click({force: true})
        cy.get('.alert').contains('Blogs has been successfully deleted')   

     });
     it('Publish Blog', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')
        cy.get(':nth-child(5) > #feeddf31e45ee9d15cec57888121ed7c5006').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/blogs')


     });
    });