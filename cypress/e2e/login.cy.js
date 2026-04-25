import { LoginPage } from "../POM/login_page/loginPage"

const tc = new LoginPage()

    describe('Automation web test',function() {

        it('login Page automation',() => {
            tc.navigate('https://www.saucedemo.com')
            tc.enterusername('standard_user')
            tc.enteruserpassword('secret_sauce')
            tc.clickloginbutton()
        })
    }) 
