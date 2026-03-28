import { Shopping } from "../POM/home_page/shopping"
import { LoginPage } from "../POM/login_page/loginPage"
import { Scrollpage } from "../POM/scroll"
import { Wait } from "../POM/wait"

const li = new LoginPage()
const sc = new Scrollpage()
const sp = new Shopping()
const wt = new Wait()

it('shopping item check',function(){
    li.navigate('https://www.saucedemo.com')
    li.enterusername('standard_user')
    li.enteruserpassword('secret_sauce')
    li.clickloginbutton()
    sc.scrolltoitem()
    wt.w800()
    sp.prdclickitem()
    wt.w500()
    sc.scrolltohdr()
    sp.cartbtnclick()
    
})