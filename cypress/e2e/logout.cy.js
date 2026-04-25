import { LoginPage } from "../POM/login_page/loginPage"
import { Logout } from "../POM/login_page/logout"

    const tc = new LoginPage()
    const lo = new Logout()
    //const tc2 = new lo
        it('logIn to logout',function(){

            tc.navigate('https://www.saucedemo.com')
            tc.enterusername('standard_user')  //problem_user
            tc.enteruserpassword('secret_sauce')    //secret_sauce
            tc.clickloginbutton()
            lo.clickdrawer()
            lo.clicklogoutbutton()
            // cy.get('[type = "button"]').click({ multiple: true })
            // cy.get('[data-test="logout-sidebar-link"]').click({force: true})


    
        })

        // it('LogOut',function(){
        //     cy.get('[type = "button"]').click({ multiple: true })
        //     cy.get('[data-test="logout-sidebar-link"]').click({force: true})

        // })