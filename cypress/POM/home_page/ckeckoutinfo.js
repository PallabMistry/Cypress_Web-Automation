export class Checkinfo{
    fname = '[data-test="firstName"]'
    lname = '[data-test="lastName"]'
    postc = '[data-test="postalCode"]'
    continuebutton = '[data-test="continue"]'

    Userfname(firstname){
        cy.get(this.fname).type(firstname)
    }
    Userlname(lastname){
        cy.get(this.lname).type(lastname)
    }
    Userpcode(postalcode){
        cy.get(this.postc).type(postalcode)
    }
    Cclick(){
        cy.get(this.continuebutton).click()
    }

}