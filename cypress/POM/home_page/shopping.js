export class Shopping{
    pjkt ='[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    cbck = '[data-test="shopping-cart-link"]'

    prdclickitem(){
        cy.get(this.pjkt).click()
    }
    cartbtnclick(){
        cy.get(this.cbck).click()
    }
}