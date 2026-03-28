export class Checkout{
    ckbtn = '[data-test="checkout"]'
    ckovbtn = '[data-test="finish"]'
    bhbtn = '[data-test="back-to-products"]'

    ckbuttonclick(){
        cy.get(this.ckbtn).click()
    }
    ckovbuttonclick(){
        cy.get(this.ckovbtn).click()
    }
    backhomebutton(){
        cy.get(this.bhbtn).click()
    }
}