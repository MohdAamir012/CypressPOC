const PIMBTN="//div[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span";
const searchName="//div[@class='oxd-grid-4 orangehrm-full-width-grid']/child ::div[1]/div/child::div[2]";
const empStatus="//div[@class='oxd-grid-4 orangehrm-full-width-grid']/child ::div[3]/div/child::div[2]";
const include="//div[@class='oxd-grid-4 orangehrm-full-width-grid']/child ::div[4]/div/child::div[2]"
const searchBtn='.oxd-form-actions >.oxd-button--secondary';
class PIMSearchEmp {
    searchEmp(name,id){
    cy.xpath(PIMBTN).click();
    cy.wait(1000)
    cy.xpath(searchName).type(name+'{downArrow}{enter}');
    cy.wait(1000)
  cy.xpath(empStatus).type(id)
  cy.wait(1000)
  cy.xpath(include).type('{downArrow}{downArrow}{enter}')
  cy.wait(2000)
  cy.clickBtnForceFully(' Search ');
  cy.wait(2000)
  cy.xpath(`//div[text()=${id}]`).should('have.text',id)
  cy.wait(2000)
    }
}
export default PIMSearchEmp;