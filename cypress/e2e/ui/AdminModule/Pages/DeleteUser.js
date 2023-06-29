const adminbtn = "//a[@href='/web/index.php/admin/viewAdminModule']";
const verifyTitle = ".orangehrm-modal-header >p";
const searchName = ":nth-child(2) > .oxd-input";
const userRole =
  ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text";
const employeeName = ".oxd-autocomplete-text-input > input";
const userStatus =
  ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text";

export default class DeleteUser {
  deleteUser(name, empName, role, status) {
    cy.xpath(adminbtn).click();
    cy.wait(1000);
    cy.get(searchName).type(name);
    cy.wait(1000);
    role === "Admin"
      ? cy.get(userRole).first().type("{downArrow}{enter}")
      : cy.get(userRole).first().type("{downArrow}{downArrow}{enter}");
    cy.wait(1000);
    cy.get(employeeName).type(empName);
    cy.wait(2000);
    cy.get(employeeName).type("{downArrow}{enter}");
    cy.wait(1000);
    status === "Enabled"
      ? cy.get(userStatus).type("{downArrow}{enter}")
      : cy.get(userStatus).type("{downArrow}{downArrow}{enter}");
    cy.scrollTo(0);
    cy.wait(1000);
    cy.clickBtnForceFully(" Search ");
    cy.wait(2000);
    const xpathfordel = `//div[text()="${name}"]/parent:: div/following-sibling::div[4]/child ::div/child ::button`;
    cy.clickBtnByXpath(xpathfordel);
    cy.wait(1000);
    cy.get(verifyTitle).should("have.text", "Are you Sure?");
    cy.wait(1000);
    cy.clickBtn(" Yes, Delete ");
    cy.wait(1000);
  }
}
