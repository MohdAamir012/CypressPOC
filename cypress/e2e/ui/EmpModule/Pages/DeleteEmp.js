const verifyTitle = ".orangehrm-modal-header >p";
const PIMBTN="//div[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span";
const searchName="//div[@class='oxd-grid-4 orangehrm-full-width-grid']/child ::div[1]/div/child::div[2]";
const empStatus="//div[@class='oxd-grid-4 orangehrm-full-width-grid']/child ::div[3]/div/child::div[2]";
const include="//div[@class='oxd-grid-4 orangehrm-full-width-grid']/child ::div[4]/div/child::div[2]"
export default class DeleteEmp {
  deleteEmp(name, id) {
    cy.xpath(PIMBTN).click();
    cy.wait(1000);
    cy.xpath(searchName).type(name + "{downArrow}{enter}");
    cy.wait(1000);
    cy.xpath(empStatus).type(id);
    cy.wait(1000);
    cy.xpath(include).type("{downArrow}{downArrow}{enter}");
    cy.wait(2000);
    cy.clickBtnForceFully(" Search ");
    cy.wait(2000);
    const xpathfordel = `//div[text()=${id}]/parent:: div/following-sibling::div[7]/child ::div/button[1]`;
    cy.clickBtnByXpath(xpathfordel);
    cy.wait(1000);
    cy.get(verifyTitle).should("have.text", "Are you Sure?");
    cy.wait(1000);
    cy.clickBtn(" Yes, Delete ");
    cy.wait(1000);
  }
}
