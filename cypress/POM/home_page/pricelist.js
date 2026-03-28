export class Pricelist{
    dpbtn = '[data-test="product-sort-container"]'
    dpbtn1 = '[value="lohi]'

    productlist(){
        cy.get(this.dpbtn).select(2)
    }
    listitem(){
        cy.get(this.dpbtn1).click()
    }


}

