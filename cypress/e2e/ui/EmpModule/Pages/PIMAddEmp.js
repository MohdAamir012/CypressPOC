const PIMBTN="//div[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span";
const addBtn = "//button[text()=' Add ']";
const firstName="//input[@name='firstName']";
const middleName="//input[@name='middleName']";
const lastName="//input[@name='lastName']";
const empId="//div[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input";
const saveBtn='.oxd-button--secondary';

class PIMAddEmp{
    addEmp(fn,mn,ln,id){
        cy.xpath(PIMBTN).click();
        cy.wait(1000);
  cy.xpath(addBtn).click({force:true});
  cy.wait(1000);
  cy.xpath(firstName).type(fn)
  cy.wait(1000);
  cy.xpath(middleName).type(mn);
  cy.wait(1000);
  cy.xpath(lastName).type(ln);
  cy.wait(1000);
  cy.xpath(empId).type(`{selectall}{backspace}${id}`);
  cy.wait(1000);
  cy.get(saveBtn).click({force:true});
  cy.wait(2000)
    }
}
export default PIMAddEmp;