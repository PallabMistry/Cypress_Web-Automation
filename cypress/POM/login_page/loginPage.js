export class LoginPage{

    usertext = '[data-test="username"]'
    userpasword ='[data-test="password"]' 
    loginButton = '[data-test="login-button"]'

    navigate(url){
        cy.visit(url)
    }
    enterusername(username){
        cy.get(this.usertext).type(username)
    }
    enteruserpassword(userpassword){
        cy.get(this.userpasword).type(userpassword)
    }
    clickloginbutton(){
        cy.get(this.loginButton).click()
        
    }
}