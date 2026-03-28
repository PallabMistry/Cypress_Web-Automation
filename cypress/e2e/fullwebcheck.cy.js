import { Checkout } from "../POM/home_page/checkout"
import { Checkinfo } from "../POM/home_page/ckeckoutinfo"
import { Shopping } from "../POM/home_page/shopping"
import { LoginPage } from "../POM/login_page/loginPage"
import { Logout } from "../POM/login_page/logout"
import { Scrollpage } from "../POM/scroll"
import { Wait } from "../POM/wait"

const ln = new LoginPage()
const sc = new Scrollpage()
const wt = new Wait()
const sp = new Shopping()
const ck = new Checkout()
const cki = new Checkinfo()
const lo = new Logout()



// beforeEach(() => {
//     ln.navigate('https://www.saucedemo.com')
//     ln.enterusername('standard_user')
//     ln.enteruserpassword('secret_sauce')
//     ln.clickloginbutton()

// })

before(()=>{
    ln.navigate('https://www.saucedemo.com')
    ln.enterusername('standard_user')
    ln.enteruserpassword('secret_sauce')
    ln.clickloginbutton()    

})

describe('Check the full Website to automations',function(){
    // before(() => {
    //     ln.navigate('https://www.saucedemo.com')
    //     ln.enterusername('standard_user')
    //     ln.enteruserpassword('secret_sauce')
    //     ln.clickloginbutton()

    // })
    // it('View website and login',() => {
    //     ln.navigate('https://www.saucedemo.com')
    //     ln.enterusername('standard_user')
    //     ln.enteruserpassword('secret_sauce')
    //     ln.clickloginbutton()

    //     it('scroll the website',() => {
    //     sc.scrolltoft()
    // })
        
    // })

    it('automation the full website',() => {
        sc.scrolltoft()
        wt.w500()
        sc.scrolltoitem()
        wt.w1200()
        sp.prdclickitem()
        wt.w500()
        sc.scrolltohdr()
        sp.cartbtnclick()
        ck.ckbuttonclick()
        cki.Userfname('Karim')
        cki.Userlname('Alam')
        cki.Userpcode(1340)
        cki.Cclick()
        ck.ckovbuttonclick()
        ck.backhomebutton()
        wt.w800()
        lo.clickdrawer()
        lo.clicklogoutbutton()        
        

        
        

    })

    
    // it('Shopping items',()=> {
    //     sp.prdclickitem()
    //     wt.w500()
    //     sc.scrolltohdr()
    //     sp.cartbtnclick()        
    // })
})
