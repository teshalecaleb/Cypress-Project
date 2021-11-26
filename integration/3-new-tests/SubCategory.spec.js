// SubCategory.spec.js created with Cypress
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
    describe('Addis Event Arranger SubCategory page test', () => {   
      it('add subcatgory page is displayed' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()      
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('.col-3 > .btn').click()
      });

      it('Is able to submit a subcategory with Category name selected, valid subcategory name, valid cover photo & valid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_id').select('Wedding')
        cy.get('#name').type("testcase9")
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
        //cy.get('.alert').should('have.text','Sub Category has been successfully added')        
      });
      it('Is unable to submit a subcategory with category name notselected, empty subcategory name, empty cover photo & empty Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_id').select('Select Category Name')              
        cy.get('button.btn').click(); 
        cy.get(':nth-child(2) > label.error').should('have.text', 'Please provide sub category name')       
      });
      it('Is unable to submit a subcategory with category name selected, empty subcategory name, valid cover photo & valid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_id').select('Wedding')
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
        cy.get(':nth-child(2) > label.error').should('have.text', 'Please provide sub category name')        
      });


      it('Is unable to submit a subcategory with category name selected, valid subcategory name, valid cover photo & Invalid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_id').select('Wedding')
        cy.get('#name').type('testcase9')

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

      it('Is unable to submit a subcategory with category name selected, valid subcategory name, Invalid cover photo & valid Icon fields   ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('.col-3 > .btn').click()
        cy.get('#cat_id').select('Wedding')
        cy.get('#name').type('testcase5')
        
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

      it('remove a subcategory successfully' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('#catae36d4ae54ae7aa28bf06fc17a1c7be5 > .fa').click()
        cy.get('.btn-no').click()
        cy.get('.alert').should('have.text','Category has been successfully deleted')               
      });
      it('Cancel removing a subcategory' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories/index/20')
        cy.get('#subcate4426862799159d589a12432b108b356 > .fa').click() 
        cy.get('.modal-footer > [href="#"]').click({force:true})          
      });
     
      it('Set Publish a subcategory value to yes or no' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories/index/20')
        cy.get(':nth-child(6) > #subcatbc16e8b59851c2a8984a8a0302cbf3db').click()
                    
      });
      it('Order subcategory by dropdown list  ' , () => {
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('#order_by').select('Select Order')
        cy.get(':nth-child(4) > .btn').click()
        cy.get('#order_by').select('Name Ascending')
        cy.get(':nth-child(4) > .btn').click()
        cy.get('#order_by').select('Name Descending')
        cy.get(':nth-child(4) > .btn').click()

                    
      });
      it('Edit a subcategory', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get('tbody > :nth-child(2) > :nth-child(4) > a').click()

        cy.get('button.btn').click()
        //cy.get('.alert').should('have.text','Sub Category has been successfully updated')        
      });
      it('Transverse to next Subcategory page', () =>{
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
        cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
        cy.get(':nth-child(5) > .form-control').type("admin")
        cy.get('.btn').click()
        cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
        cy.get(':nth-child(3) > .page-link').click()        
      });
      // it('Search a subcategory by subcategory name  ' , () => {
      //   cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login') 
      //   cy.get(':nth-child(4) > .form-control').type("franol@gmail.com")
      //   cy.get(':nth-child(5) > .form-control').type("admin")
      //   cy.get('.btn').click()
      //   cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/subcategories')
      //   cy.get('.form-group.mr-3 > .form-control')                    
      // });
    });