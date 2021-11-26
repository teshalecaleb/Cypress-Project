// Posts.spec.js created with Cypress
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
    describe('Addis Event Arranger Posts page test', () => {   
      it('add Post page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/items')
        cy.get('.col-3 > .form-group > .btn').click()
      });

      it('Is able to add a post successfuly with valid title name, selected category name,select event location,select post location township,select deal option, valid description, valid post highlight information,valid price , selected subcategory name ,selected price type, selected post currency, valid post image, valid brand, valid address, valid latitude, valid longitude' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/items')
        cy.get('.col-3 > .form-group > .btn').click()
        cy.get('#title').type('testcase4')
        cy.get('#cat_id').select('Wedding')
        cy.get('#item_location_id').select('Addis Ababa')
        cy.get('#item_location_township_id').select('Mexico')
        cy.get('#description').type('description')
        cy.get('#info').type('info')
        cy.get('#brand').type('ethionew')
        cy.get('#address').type('newaddress')
        cy.get('#price').type('12000')
        cy.get('#sub_cat_id').select('Photography')
        cy.get('#item_price_type_id').select('Fixed')
        cy.get('#status').check().should('be.checked')
        cy.get('#item_currency_id').select('USD')
        cy.get('#lat').type('8.96686')
        cy.get('#lng').type(' 38.803251')

        cy.fixture("pic1.jpg", "base64").then(fileContent => {
          cy.get(':nth-child(6) > .btn').attachFile(
            {
              fileContent,
              fileName: "pic1.jpg",
              mimeType: "image/jpg"
            },
            {
              uploadType: "input"
            }
          )          
        });
        
        cy.get('.card-footer > :nth-child(1)').click();
        cy.get('.alert').contains('Post has been successfully added')        
      });
      it('Is unable to add a post successfuly with empty title name, selected category name,select event location,select post location township,select deal option, valid description, valid post highlight information,valid price , selected subcategory name ,selected price type, selected post currency, valid post image, valid brand, valid address, valid latitude, valid longitude' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/items')
        cy.get('.col-3 > .form-group > .btn').click()
        cy.get('#title').type(' ')
        cy.get('#cat_id').select('Wedding')
        cy.get('#item_location_id').select('Addis Ababa')
        cy.get('#item_location_township_id').select('Mexico')
        cy.get('#description').type('description')
        cy.get('#info').type('info')
        cy.get('#brand').type('ethionew')
        cy.get('#address').type('newaddress')
        cy.get('#price').type('12000')
        cy.get('#status').check().should('be.checked')
        cy.get('#sub_cat_id').select('Photography')
        cy.get('#item_price_type_id').select('Fixed')
        cy.get('#item_currency_id').select('USD')
        cy.get('#lat').type('8.96686')
        cy.get('#lng').type(' 38.803251')

        cy.fixture("pic1.jpg", "base64").then(fileContent => {
          cy.get(':nth-child(6) > .btn').attachFile(
            {
              fileContent,
              fileName: "pic1.jpg",
              mimeType: "image/jpg"
            },
            {
              uploadType: "input"
            }
          )          
        });
        
        cy.get('.card-footer > :nth-child(1)').click();
        cy.get('.alert > p').contains('The name field is required.')        
      });
      

      it('remove a post successfully' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/items')
        cy.get('#itm_fb22e5e7197a7fb11eec224ff519d2e1 > .fa').click()
        cy.get('.btn-no').click()
        //cy.get('.alert').contains('post has been successfully deleted')
                       
      });
      it('Cancel removing a post' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/items')
        cy.get('#itm_992d71747481a32864f904eb94669b5b > .fa').click()
        cy.on('window:confirm', (str) => {
          expect(str).to.equal('When delete this Post, it will delete all related sub categories and category also. So, do you still want to delete it?')
          return false;
      }) 
                  
      });
         
      it('Filter posts by category name  ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/items')
        cy.get('#cat_id').select('Select Category Name')
        cy.get('[style="padding-top: 3px;padding-right: 5px;"] > .btn').click()
        cy.get('#cat_id').select('Wedding')
        cy.get('[style="padding-top: 3px;padding-right: 5px;"] > .btn').click()
        cy.get('#cat_id').select('Baby Shower')
        cy.get('[style="padding-top: 3px;padding-right: 5px;"] > .btn').click()

                    
      });
      
      
      
    });
