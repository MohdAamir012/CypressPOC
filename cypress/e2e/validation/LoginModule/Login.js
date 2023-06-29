/// <reference types="Cypress"/>
/// <reference types="Cypress-xpath"/>

const nameXpath =":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
const pwdXpath =":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
class Login{
    login(url){
        var uname,pwd;
        cy.visit(url)
    cy.get('.orangehrm-login-error >div >p').first().invoke('text').then((text) => {
      const myArray = text.split(":");
      cy.log(myArray[1]);
       uname = myArray[1].trim();
            expect(uname).equal('Admin')
            cy.get(nameXpath).type(uname);
        });
        cy.get('.orangehrm-login-error >div >p').next().invoke('text').then((text) => {
          const myArray = text.split(":");
           pwd = myArray[1].trim();
          expect(pwd).equal('admin123')
          cy.get(pwdXpath).type(pwd);
            });
            cy.log("outside the functn"+uname+" "+pwd);
            cy.clickBtn(' Login ')
            cy.getAllCookies().then((cookies)=>{
              cy.log(cookies);
              cy.writeFile('cypress/fixtures/accessToken.json', cookies)

          })
}
}

export default Login;