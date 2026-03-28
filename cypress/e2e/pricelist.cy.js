import { Pricelist } from "../POM/home_page/pricelist"
import { LoginPage } from "../POM/login_page/loginPage"

const pl = new Pricelist()
const li = new LoginPage()

it('product list check',function(){
    li.navigate('https://www.saucedemo.com')
    li.enterusername('standard_user')
    li.enteruserpassword('secret_sauce')
    li.clickloginbutton()
    cy.wait(800)
    pl.productlist()
    // pl.listitem()
})