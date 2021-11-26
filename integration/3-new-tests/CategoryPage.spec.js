// admin-dashboard-panel-test.js created with Cypress
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
    describe('Addis Event Arranger Category page test', () => {   
      it('add catgory page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('.col-3 > .btn').click()
      });

      it('Is able to submit a category with valid category name, valid cover photo, valid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_name').type("testcase8")
        cy.fixture("pic1.jpg", "base64").then(fileContent => {
          cy.get('#cover').attachFile(
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
        cy.fixture("pic2.jpg", "base64").then(fileContent => {
        cy.get('#icon').attachFile(
          {
            fileContent,
            fileName: "pic2.jpg",
            mimeType: "image/jpg"
          },
          {
            uploadType: "input"
          }
        )
        });
        cy.get('button.btn').click();
        //cy.get('.alert').should('have.text','Category has been successfully added')        
      });
      it('Is unable to submit a category with empty category name, empty cover photo, empty Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('.col-3 > .btn').click()              
        cy.get('button.btn').click();
        cy.get(':nth-child(1) > .form-group > label.error').should('have.text','Please provide category name')
        cy.get(':nth-child(2) > label.error').should('have.text','Please File Upload Icon.')        
      });
      it('Is unable to submit a category with empty category name, valid cover photo, valid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('.col-3 > .btn').click()
        cy.fixture("pic1.jpg", "base64").then(fileContent => {
          cy.get('#cover').attachFile(
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
        cy.fixture("pic2.jpg", "base64").then(fileContent => {
        cy.get('#icon').attachFile(
          {
            fileContent,
            fileName: "pic2.jpg",
            mimeType: "image/jpg"
          },
          {
            uploadType: "input"
          }
        )
        });                
        cy.get('button.btn').click();
        cy.get('label.error').should('have.text','Please provide category name')
                
      });


      it('Is unable to submit a category with valid category name, valid cover photo, Invalid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_name').type('testcase4')
        cy.fixture("pic1.jpg", "base64").then(fileContent => {
          cy.get('#cover').attachFile(
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
        cy.fixture("pic2b.jfif", "base64").then(fileContent => {
          cy.get('#icon').attachFile(
            {
              fileContent,
              fileName: "pic2b.jfif",
              mimeType: "image/jfif"
            },
            {
              uploadType: "input"
            }
          )
          });               
        cy.get('button.btn').click();
        cy.get('.alert > p').should('have.text','The filetype you are attempting to upload is not allowed.')        
      });

      it('Is unable to submit a category with valid category name, Invalid cover photo, valid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_name').type('testcase5')
        
        cy.fixture("pic1a.jfif", "base64").then(fileContent => {
          cy.get('#cover').attachFile(
            {
              fileContent,
              fileName: "pic1a.jfif",
              mimeType: "image/jfif"
            },
            {
              uploadType: "input"
            }
          )          
        });
        cy.fixture("pic2.jpg", "base64").then(fileContent => {
        cy.get('#icon').attachFile(
          {
            fileContent,
            fileName: "pic2.jpg",
            mimeType: "image/jpg"
          },
          {
            uploadType: "input"
          }
        )
        });                
        cy.get('button.btn').click()
        cy.get('.alert > p').should('have.text','The filetype you are attempting to upload is not allowed.')        
      });

      it('remove a category successfully' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('#catae36d4ae54ae7aa28bf06fc17a1c7be5 > .fa').click()
        cy.get('.btn-no').click()
        cy.get('.alert').should('have.text','Category has been successfully deleted')               
      });
      it('Cancel removing a category' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')        

        cy.get('#cat34d35d757235c94782d377fcd09b0718 > .fa').click()
        cy.on('window:confirm', (str) => {
          return false;
      })
            
      });
     
      it('Set Publish a category value to yes or no' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get(':nth-child(2) > :nth-child(5) > .btn').click()
                    
      });
      it('Order category by dropdown list  ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('#order_by').select('Select Order')
        cy.get(':nth-child(4) > .btn').click()
        cy.get('#order_by').select('Name Ascending')
        cy.get(':nth-child(4) > .btn').click()
        cy.get('#order_by').select('Name Descending')
        cy.get(':nth-child(4) > .btn').click()
      });
      it('Update a category successfully ', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
        cy.get('tbody > :nth-child(2) > :nth-child(3) > a > .fa').click()
        cy.on('window:confirm', (str) => {
          return true;
        })

        cy.get('button.btn').click()
        cy.get('.alert').contains('Category has been successfully updated')        
      });
      

      // it('Search a category by category name  ' , () => {
      //   cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
      //   cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
      //   cy.get(':nth-child(5) > .form-control').type("admin")
      //   cy.get('.btn').click()
      //   cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/categories')
      //   cy.get('.form-group.mr-3 > .form-control')                    
      // });
      




});
