import { LoginPage } from "../POM/login_page/loginPage"
import { Scrollpage } from "../POM/scroll"
import { Wait } from "../POM/wait"

const sc = new LoginPage()
const scp = new Scrollpage()
const wt = new Wait()

it('Scrolling the Page',function(){
    sc.navigate('https://www.saucedemo.com')
    sc.enterusername('standard_user')
    sc.enteruserpassword('secret_sauce')
    sc.clickloginbutton()
    wt.w1200()
    scp.scrolltoft()
    // cy.scrollTo(0, 650) //scroll to page hight limits
    //scp.scrolltoitem()

})