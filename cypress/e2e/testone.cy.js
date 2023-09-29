/// <reference types= "cypress" />




Cypress.Commands.add("a",(username,password)=>{

    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    //cy.get('.btn').click({multiple:true});
    
    
    
    })
   
    Cypress.Commands.add("add_to_cart",(number_of_items)=>{
    for (let i = 0; i < number_of_items;i++) {
        var randomNumber = Math.floor(Math.random() * 6);
        console.log(randomNumber);
        cy.wait(1000)
        cy.get('.btn').eq(randomNumber).click();
        
        
    }
    
    });
    
    
    describe('test login page', () => {
        it('login with correct username and password and add some charts', () => {
            cy.a("standard_user","secret_sauce");
            cy.add_to_cart(3);
            // cy.get('.shopping_cart_link').invoke("text").should("include",5)
            // cy.get('.shopping_cart_badge').click()
            // cy.get('[data-test="checkout"]').click()
            // cy.get('[data-test="firstName"]').type("raed")   
            // cy.get('[data-test="lastName"]').type("obaid")
            // cy.get('[data-test="postalCode"]').type("123")
            // cy.get('[data-test="continue"]').click()

            // cy.get('[data-test="finish"]').click()

            // cy.get('.complete-header').invoke('text').should("include","Thank you for your order!")

    
    
        });
    });
    
    