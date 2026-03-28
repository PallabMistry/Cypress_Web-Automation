export class Logout{
    drawerbutton = '[type = "button"]'
    logoutbutton = '[data-test="logout-sidebar-link"]'

    clickdrawer(){
        cy.get(this.drawerbutton).click({ multiple: true })
        
    }
    clicklogoutbutton(){
        cy.get(this.logoutbutton).click({force: true})
    }
}