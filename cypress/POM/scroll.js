export class Scrollpage{
    scrollft = '[data-test="footer"]' //Scroll to footer
    scrollsb = ':nth-child(4) > [data-test="inventory-item-description"]'  //Scroll to any item subject

    scrolltoft(){
        cy.get(this.scrollft).scrollIntoView()
    }
    scrolltoitem(){
        cy.get(this.scrollsb).scrollIntoView()
    }
    scrolltohdr(){
        cy.get('.app_logo').scrollIntoView()
    }
}