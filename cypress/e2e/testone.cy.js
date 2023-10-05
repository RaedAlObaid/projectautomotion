/// <reference types= "cypress" />
let expecteditem="The requested qty is not available"
describe('', () => {
    it('', () => {
   cy.visit("https://magento.softwaretestingboard.com/")
   let items=["Women","Men","Gear"]
   let randomItems=Math.floor(Math.random()*items.length)
   cy.contains(items[randomItems]).click()

   if (items[randomItems]=="Women") {

    cy.get(".product-items.widget-product-grid").find(".product-item-info").eq(1).click()
    let randomSize=Math.floor(Math.random()*5)
    cy.get(".swatch-attribute.size").find(".swatch-option.text").eq(randomSize).click()


    let randmColor=Math.floor(Math.random()*3)

    cy.get(".swatch-attribute.color").find(".swatch-option.color").eq(randmColor).click()

    cy.get('#product-addtocart-button').click()


    let check=cy.get('.message-error > div').invoke('text').should('include',expecteditem)

    if (check) {
        cy.log("alert MSG,this item is not available")
    }



   }
   else if (items[randomItems]=="Men") {
    cy.get(".product-items.widget-product-grid").find(".product-item-info").eq(1).click()
    let randomSize=Math.floor(Math.random()*5)
    cy.get(".swatch-attribute.size").find(".swatch-option.text").eq(randomSize).click()


    let randmColor=Math.floor(Math.random()*3)

    cy.get(".swatch-attribute.color").find(".swatch-option.color").eq(randmColor).click()

    cy.get('#product-addtocart-button').click()

    let check=cy.get('.message-error > div').invoke('text').should('include',expecteditem)

    if (check) {
        cy.log("alert MSG,this item is not available")
    }


   }
   else if (items[randomItems]=="Gear") {
    cy.get(".product-items.widget-product-grid").find(".product-item-info").eq(1).click()
    cy.get(".action.primary.tocart").click()

    let check=cy.get('.message-error > div').invoke('text').should('include',expecteditem)

    if (check) {
        cy.log("alert MSG,this item is not available")
    }
   }

    });
});





//TASK 2
describe('test', () => {
    it('MAGENTO _TEST', () => {
    //cy.get('[disabled]').click({force: true})


        cy.visit("https://magento.softwaretestingboard.com/")
        let items=["Women","Men"]

        let randomNum1=Math.floor(Math.random()*items.length)
        cy.log(randomNum1+"**********")
        cy.contains(items[randomNum1]).click()

        cy.wait(1000)

        let randNUM2=Math.floor(Math.random()*4)
        cy.get(".product-items").find(".product-item-info").eq(randNUM2).click()

        cy.wait(1000)
         

        let randNUM3=Math.floor(Math.random()*3)

     cy.get(".swatch-attribute-options.clearfix").find(".swatch-option.color").eq(randNUM3).click()

    });
});